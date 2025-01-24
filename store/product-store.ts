import { makeAutoObservable } from "mobx";

class ProductStore {
     products = [];

     constructor() {
          makeAutoObservable(this);
     }
}

const productStore = new ProductStore();
export default productStore;
