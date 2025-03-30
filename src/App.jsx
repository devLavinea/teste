import React, { useEffect } from "react";
import "./index.css";
import ScrollReveal from "scrollreveal";
import Toastify from "toastify-js"; // Corrigido a importação do Toastify

import { useCart } from "./script"; // Corrigido para importar o hook useCart

const App = () => {
  // Desestruturando o hook useCart para pegar as variáveis e funções necessárias
  const {
    cart,
    cartTotal,
    addToCart,
    handleCartModal,
    handleCheckout,
    handleAddressChange,
    address,
  } = useCart();

  useEffect(() => {
    ScrollReveal().reveal("#information_left", {
      origin: "left",
      duration: 1500,
      distance: "20%",
    });

    ScrollReveal().reveal("#title", {
      origin: "top",
      duration: 1500,
      distance: "30%",
    });

    ScrollReveal().reveal("#menu", {
      origin: "top",
      duration: 1500,
      distance: "5%",
    });

    ScrollReveal().reveal("#information_rigth", {
      origin: "right",
      duration: 1500,
      distance: "20%",
    });
  }, []); // O array vazio significa que o efeito será executado apenas uma vez quando o componente for montado.

  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <header className="shadow w-full h-[420px] bg-zinc-900 bg-[url('/src/images/bg.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center text-center items-end pr-[10vw]">
          <h1 className="text-5xl mt-4 mb-2 font-bold text-white">
            Dev Burguer
          </h1>
          <span className="text-white font-medium text-[18px]">
            Rua dev 10, Campo Grande - MS
          </span>
          <div
            className="bg-green-600 px-10 py-1 rounded-lg mt-5"
            id="date-span"
          >
            <span className="text-white font-medium text-[17px]">
              Seg á Dom 18:00 as 22:00
            </span>
          </div>
        </div>
      </header>

      <h2
        id="title"
        className="text-3xl md:text-3x1 font-bold text-center mt-9 mb-6 text-white uppercase"
      >
        Conheça nosso menu
      </h2>

      <div
        id="menu"
        className="lg:w-[80%] w-[98%] mb-[80px] pt-[50px] rounded-1xl"
      >
        <main className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 mx-auto max-w-6xl px-2 mb-16">
          {/* Menu Item */}
          <div className="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
            <img
              src="./src/images/hamb-1.png"
              alt="Hamburguer Smash"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />
            <div>
              <p className="font-bold">Smash Burger Deluxe</p>
              <p className="font-sm">
                Pão brioche, hambúrguer suculento, queijo cheddar cremoso, bacon
                crocante e molho especial exclusivo.
              </p>
              <div className="flex items-center gap-2 justify-between mt-3">
                <p className="font-bold text-lg">R$ 21.90</p>
                <button
                  className="bg-amber-500 px-5 rounded add-to-cart-btn w-[50px] h-[50px]"
                  data-name="Smash Burger Deluxe"
                  data-price="21.90"
                  onClick={() => addToCart("Smash Burger Deluxe", 21.9)}
                >
                  <i className="fa fa-cart-plus text-lg text-white"></i>
                </button>
              </div>
            </div>
          </div>
          {/* More menu items here... */}
        </main>

        <div className="mx-auto flex items-start justify-center max-w-6xl px-2 my-13">
          <h2 id="title" className="font-bold text-white text-3xl uppercase">
            Bebidas
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 mx-auto max-w-6xl px-2 mb-16"
          id="menu"
        >
          {/* Beverage Item */}
          <div className="flex gap-2 w-full bg-neutral-900 text-white p-[15px] rounded-1xl">
            <img
              src="./src/images/refri-1.png"
              alt="Coca lata"
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />
            <div className="w-full">
              <p className="font-bold">Coca-Cola Lata</p>
              <div className="flex items-center gap-2 justify-between mt-3">
                <p className="font-bold text-lg">R$ 6.00</p>
                <button
                  className="bg-amber-500 px-5 rounded add-to-cart-btn"
                  data-name="Coca-Cola Lata"
                  data-price="6.00"
                  onClick={() => addToCart("Coca-Cola Lata", 6.0)}
                >
                  <i className="fa fa-cart-plus text-lg text-white"></i>
                </button>
              </div>
            </div>
          </div>
          {/* More beverage items here... */}
        </div>
      </div>

      {/* Cart Modal */}
      <div className="relative bg-amber-500 w-full md:h-[70vh] h-[100vh] shadow3 items-center justify-center flex md:flex-row flex-col-reverse p-[20px] pb-[40px]">
        <div id="information_left" className="md:w-[35%] md:h-[80%] w-full">
          <div className="mb-[60px]">
            <h3 className="text-white text-[26px] font-bold uppercase">
              horário de funcionamento
            </h3>
            <p className="text-white text-[24px]">
              Segunda a domingo das 18:00 ás 22:00
            </p>
          </div>
          <div className=" mb-[50px]">
            <h3 className="text-white font-bold text-[26px] uppercase">
              Endereço
            </h3>
            <p className="text-white cursor-pointer text-[24px]">
              Rua Dev 10, Bairro Tecnópolis, Campo Grande - MS, 79000-000
            </p>
          </div>
          <div className="md:w-[190px] flex md:justify-between w-full justify-end">
            <a href="">
              <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
                <i className="fab fa-whatsapp text-[30px]"></i>
              </button>
            </a>

            <a href="">
              <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
                <i className="fab fa-instagram text-[30px]"></i>
              </button>
            </a>

            <a href="">
              <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
                <i className="fab fa-facebook-f text-[30px]"></i>
              </button>
            </a>
          </div>
        </div>

        <div
          id="information_rigth"
          className="md:w-[35%] md:h-[80%] w-full flex flex-col items-center"
        >
          <h3 className="text-white font-bold text-2xl uppercase">Carrinho</h3>
          <button
            className="text-white text-xl p-[5px] cursor-pointer bg-red-500 rounded-md"
            onClick={handleCartModal}
          >
            Fechar
          </button>
          <div id="cart-items" className="flex justify-between m-2 flex-col">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>R${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="font-bold text-lg">
            Total: R${cartTotal.toFixed(2)}
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="text-white">
              Endereço:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              className="p-2 rounded"
            />
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white mt-4 p-3 w-full rounded-lg"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
