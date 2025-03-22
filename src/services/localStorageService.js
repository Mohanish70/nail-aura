export const getProducts = () => {
    return JSON.parse(localStorage.getItem('nails')) || [];
  };
  
  export const addProduct = (product) => {
    const current = getProducts();
    const updated = [...current, product];
    localStorage.setItem('nails', JSON.stringify(updated));
  };
  