import { makeAutoObservable } from 'mobx';

/**
 * Хранилище данных корзины
 * @description
 * В данном сторе содеражится вся информация о выбранных товарах пользователя в корзине
 */

class CartStore {
  productsSelect = [];
  priceInKG = 640;
  servicePrice = 1000;
  loadingProducts = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLoading(value) {
    this.loadingProducts = value;
  }

  setProductsSelect(value) {
    this.loadingProducts = true;
    const { id, title, selectSize, variants, images, correctPrice, weight } = value;
    const count = 1;
    const item = {
      id: id,
      title: title,
      selectSize: selectSize,
      variants: variants,
      images: images,
      price: correctPrice,
      weight: weight,
      count: count,
    };
    this.productsSelect = [item, ...this.productsSelect];
    this.loadingProducts = false;
  }

  deleteProductsSelect(id, selectSize) {
    this.productsSelect = this.productsSelect.filter(
      (item) => !(item.id === id && item.selectSize === selectSize)
    );
  }
}

export const cartStore = new CartStore();
