import { makeAutoObservable, toJS } from 'mobx';

class BoundaryStore {
  course = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setCourse(value) {
    this.course = value;
  }
}

export const boundaryStore = new BoundaryStore();
