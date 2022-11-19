import { makeAutoObservable, runInAction } from 'mobx';

class Store {
  products = [];
  product = {};
  isLoading = true;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getProductsList() {
    this.products = [];
    this.isLoading = true;

    try {
      const response = await fetch('http://localhost:7070/api/services');
      const productsList = await response.json();

      runInAction(() => {
        this.products = productsList;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
        this.isLoading = false;
      });
    }
  }

  async getProductById(productId) {
    this.product = {};
    this.isLoading = true;
    this.isError = false;

    try {
      const response = await fetch(
        `http://localhost:7070/api/services/${productId}`
      );
      const product = await response.json();

      runInAction(() => {
        this.product = product;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
        this.isLoading = false;
        this.isError = true;
      });
    }
  }
}

export default new Store();
