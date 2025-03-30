import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (name, price) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevCart];
      } else {
        return [...prevCart, { name, price, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (name) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.name !== name);
      return updatedCart;
    });
  };

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  }, [cart]);

  const handleCartModal = () => {
    setCartModalVisible(!cartModalVisible);
  };

  const handleCheckout = () => {
    if (!checkRestaurantOpen()) {
      Toastify({
        text: "Ops, o restaurante está fechado!",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#ef4444",
        },
      }).showToast();
      return;
    }

    if (cart.length === 0) return;
    if (!address) {
      return;
    }

    const cartItems = cart.map((item) => {
      return `${item.name}, Quantidade: (${item.quantity}), Preço: R$${item.price} |`;
    }).join(" ");

    const message = encodeURIComponent(cartItems);
    const phone = "5574988248014";

    window.open(`https://wa.me/${phone}?text=PEDIDO%0A%0A${message}%0AEndereço: ${address}`, "_blank");
    setCart([]);
  };

  const checkRestaurantOpen = () => {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22;
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return {
    cart,
    cartModalVisible,
    cartTotal,
    addToCart,
    removeItemFromCart,
    handleCartModal,
    handleCheckout,
    handleAddressChange,
  };
};
