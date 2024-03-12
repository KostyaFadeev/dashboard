import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  CustomerField,
  CustomersTable,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
  User,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a reponse for demo purposes.
    // Don't do this in real life :)

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch complete after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to card data.');
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredInvoices(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    console.log(invoice); // Invoice is an empty array []
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTable>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * from USERS where email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getCurrencyRates() {
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Извлечение значений курсов валют
    const cnyRate = data.Valute.CNY.Value;
    const usdRate = data.Valute.USD.Value;
    const eurRate = data.Valute.EUR.Value;
    return [cnyRate, usdRate, eurRate];
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    throw new Error('Error fetching currency rates');
  }
}

export function getCorrectPriceRUB(course: any, price: any, weight: any) {
  try {
    const priceInKG = 640;
    const servicePrice = 1000;
    const currentPrice = parseInt(price.replace(/ /g, ''));
    let priceOfDeliveryInRussia = weight * priceInKG;
    // цена товара в рублях по курсу ЦБ
    return parseInt(
      String(currentPrice + currentPrice * course + priceOfDeliveryInRussia + servicePrice)
    );
  } catch (error) {
    console.error(error);
    throw new Error('Error');
  }
}

export async function fetchDataCards() {
  noStore();

  try {
    return [
      {
        id: 1,
        category: 'shoes',
        currentSize: '36 RUS',
        images: ['/nb550_1.jpg', '/nb550_2.jpg', '/nb550_3.jpg', '/nb550_4.jpg', '/nb550_5.jpg'],
        title: 'New Balance 550',
        tableSize: '1',
        description:
          'Стильные и комфортные кроссовки, идеальный выбор для активного образа жизни. Они объединяют в себе классический дизайн и высокую функциональность. Верхняя часть кроссовок выполнена из прочных материалов, которые обеспечивают хорошую вентиляцию и комфорт при носке.\n',
        price: '349',
        currency: 'CNY',
        weight: '1.8',
        variants: [
          {
            label: 'Выберите размер',
            values: [
              '36 RUS',
              '37 RUS',
              '37.5 RUS',
              '38 RUS',
              '38.5 RUS',
              '39.5 RUS',
              '40 RUS',
              '40.5 RUS',
              '41.5 RUS',
              '42 RUS',
              '42.5 RUS',
              '43 RUS',
              '44 RUS',
              '44.5 RUS',
              '45 RUS',
              '45.5 RUS',
              '46.5 RUS',
            ],
          },
        ],
      },
      {
        id: 2,
        category: 'electronic',
        currentSize: '128 ГБ',
        images: ['/iphone15.jpg'],
        title: 'Iphone 15 ',
        description:
          'Iphone 15 - это новейшая модель смартфона от компании Apple. Он обладает мощным процессором, высококачественным дисплеем и продвинутой камерой, которая позволяет делать невероятные фотографии и видео. Кроме того, Iphone 15 имеет большой объем внутренней памяти, что позволяет хранить большое количество данных и приложений. Этот смартфон станет надежным и стильным спутником в повседневной жизни.',
        price: '6000',
        currency: 'CNY',
        weight: '1.1',
        variants: [
          {
            label: 'Выберите объем памяти',
            values: ['128 ГБ', '256 ГБ', '512 ГБ'],
          },
        ],
      },
      {
        id: 3,
        category: 'shoes',
        currentSize: '36 RUS',
        images: [
          '/Nike Air Max Verona Sail_1.jpg',
          '/Nike Air Max Verona Sail_2.jpg',
          '/Nike Air Max Verona Sail_3.jpg',
          '/Nike Air Max Verona Sail_4.jpg',
          '/Nike Air Max Verona Sail_5.jpg',
        ],
        title: 'Nike Air Max Verona',
        tableSize: '1',
        description:
          'Кроссовки Nike Air Max Verona Sail Ghost Green — это элегантные и стильные женские кроссовки, сочетающие в себе комфорт и модный дизайн. Их ультрасовременный дизайн, вдохновленный классическими моделями Air Max, предлагает высокий комфорт и исключительную поддержку, делая их отличным выбором для повседневной носки.\n',
        price: '400',
        currency: 'CNY',
        weight: '1.6',
        variants: [
          {
            label: 'Выберите размер',
            values: [
              '35.5 RUS',
              '36 RUS',
              '36.5 RUS',
              '37.5 RUS',
              '38 RUS',
              '38.5 RUS',
              '39 RUS',
              '40 RUS',
              '40.5 RUS',
              '41 RUS',
              '42 RUS',
            ],
          },
        ],
      },
      {
        id: 4,
        category: 'shoes',
        currentSize: '36 RUS',
        images: [
          '/nb550white_1.jpg',
          '/nb550white_2.jpg',
          '/nb550white_3.jpg',
          '/nb550white_4.jpg',
        ],
        title: 'New Balance NB 550',
        tableSize: '1',
        description:
          'Стильные и комфортные кроссовки, идеальный выбор для активного образа жизни. Они объединяют в себе классический дизайн и высокую функциональность. Верхняя часть кроссовок выполнена из прочных материалов, которые обеспечивают хорошую вентиляцию и комфорт при носке.\n',
        price: '349',
        currency: 'CNY',
        weight: '1.8',
        variants: [
          {
            label: 'Выберите размер',
            values: [
              '36 RUS',
              '37 RUS',
              '37.5 RUS',
              '38 RUS',
              '38.5 RUS',
              '39.5 RUS',
              '40 RUS',
              '40.5 RUS',
              '41.5 RUS',
              '42 RUS',
              '42.5 RUS',
              '43 RUS',
              '44 RUS',
              '44.5 RUS',
              '45 RUS',
              '45.5 RUS',
              '46.5 RUS',
            ],
          },
        ],
      },
      {
        id: 5,
        category: 'wear',
        currentSize: 'S',
        images: ['/polo-wear.jpg'],
        title: 'Polo Ralph Lauren FW22',
        description:
          'Зип худи Polo Ralph Lauren FW22 в черном цвете - идеальный выбор для тех, кто ценит стиль и комфорт. Это универсальное худи с молнией, которое подойдет как для спортивного образа, так и для повседневной носки. Черный цвет придает ему элегантный вид, а логотип Polo Ralph Lauren на груди добавляет нотку роскоши. Изготовлено из высококачественного материала, худи обеспечивает тепло и уют в любое время года. Это отличный выбор для тех, кто ценит стиль, качество и комфорт.',
        price: '999',
        currency: 'CNY',
        weight: '0.8',
        variants: [
          {
            label: 'Выберите размер',
            values: ['S', 'M', 'L', 'XL', 'XXL'],
          },
        ],
      },
      {
        id: 6,
        category: 'wear',
        currentSize: 'M',
        images: ['/gap-1.jpg'],
        title: 'Худи GAP',
        description:
          'Плюшевое худи GAP в черничном цвете - уютное и стильное дополнение к вашему гардеробу. Это мягкое и теплое худи с капюшоном, которое подойдет для повседневной носки. Черничный оттенок придает ему элегантный вид, а мягкий материал обеспечивает комфорт и уют. Оно отлично сочетается с джинсами или спортивными брюками, создавая модный и удобный образ',
        price: '329',
        currency: 'CNY',
        weight: '0.7',
        variants: [
          {
            label: 'Выберите размер',
            values: ['S', 'M', 'L', 'XL'],
          },
        ],
      },
    ];
  } catch (error) {
    throw new Error('Failed to fetch revenue data.');
  }
}
