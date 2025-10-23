// src/reducers/cartReducer.js
export const initialState = {
  cart: {},
  addedProducts: new Set(),
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, plant } = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: state.cart[id]
            ? { ...state.cart[id], quantity: state.cart[id].quantity + 1 }
            : { ...plant, quantity: 1 },
        },
        addedProducts: new Set([...state.addedProducts, id]),
      };
    }
    case 'INCREASE_QUANTITY': {
      const { id } = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: { ...state.cart[id], quantity: state.cart[id].quantity + 1 },
        },
      };
    }
    case 'DECREASE_QUANTITY': {
      const { id } = action.payload;
      const newQuantity = state.cart[id].quantity - 1;
      if (newQuantity === 0) {
        const { [id]: _, ...newCart } = state.cart;
        const newAdded = new Set(state.addedProducts);
        newAdded.delete(id);
        return {
          ...state,
          cart: newCart,
          addedProducts: newAdded,
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: { ...state.cart[id], quantity: newQuantity },
        },
      };
    }
    case 'REMOVE_FROM_CART': {
      const { id } = action.payload;
      const { [id]: _, ...newCart } = state.cart;
      const newAdded = new Set(state.addedProducts);
      newAdded.delete(id);
      return {
        ...state,
        cart: newCart,
        addedProducts: newAdded,
      };
    }
    default:
      return state;
  }
}