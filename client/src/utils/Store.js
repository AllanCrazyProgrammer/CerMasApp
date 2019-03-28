/* 
Store

Utility class that saves and retreives information from the local storage
*/
class Store {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    const value = JSON.parse(localStorage.getItem(key));
    if (!value) {
      return {};
    }
    return value;
  }
}

export default Store;