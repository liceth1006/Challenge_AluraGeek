import { conexionApi } from "./conexionApi.js";
import { deleteProduct } from "./deleteProducts.js";
const lista = document.querySelector("[data-lista]");

export function createCard(name, price, image,id) {
  const product = document.createElement("li");
  product.classList = "card";
  product.innerHTML = ` <div class="card_image_container">
                <img
                  class="card__image"
                  src="${image}"
                  alt="imagen"
                />
              </div>
              <div class="card_title_container">
                <h3 class="text-title">${name}</h3>
              </div>
              <div class="card-footer">
                <span class="text-title"><strong>$ ${price}</strong></span>
                <button class="card-button" id="${id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                      </svg>
                </button>
              </div>`;
  return product;
}

async function conexion() {
  const products = await conexionApi.getProducts();

  products.forEach((item) => {
    lista.appendChild(createCard(item.name, item.price, item.image,item.id));
    
    deleteProduct(item.id)
  });
  
}

conexion();


