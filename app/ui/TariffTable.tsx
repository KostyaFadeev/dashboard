'use client';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';

interface Object {
  type: string;
  price: string;
  weight: string;
}

interface TariffTableProps {
  data: Array<Object>;
}

const TariffTable = ({ data }: TariffTableProps) => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Тип товара</TableColumn>
        <TableColumn>Стоимость наших услуг</TableColumn>
        <TableColumn>Средний вес товара</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.weight}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TariffTable;
