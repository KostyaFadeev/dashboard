import { makeAutoObservable } from 'mobx';

/**
 * Хранилище данных для авторизации
 * @description
 * В данном сторе содеражится вся информация о процессе авторизации на сервисе
 */

class AuthorizationStore {
  openAuth = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setOpenAuth(val) {
    this.openAuth = val;
  }
}

export const authorizationStore = new AuthorizationStore();
