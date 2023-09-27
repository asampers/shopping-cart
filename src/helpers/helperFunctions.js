export const subTotal = (products) => {
  let sum = 0.0;
  products.forEach((prod) => {
    sum = sum + Number(prod.quantity) * prod.price;
  });
  return sum.toFixed(2);
};

export const itemTotal = (price, quantity) => {
  const sum = price * quantity;
  return sum.toFixed(2);
};
