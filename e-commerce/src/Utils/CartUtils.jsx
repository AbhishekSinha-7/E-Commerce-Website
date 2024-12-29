export const removeItemFromCart = (cart, id) => {
    return cart.filter(item => item.id !== id);
  };
  