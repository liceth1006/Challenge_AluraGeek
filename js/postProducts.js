import { conexionApi } from "./conexionApi.js";
import { createCard } from "./getProducts.js";

const formulario = document.querySelector("[data-form]")

async function conexion(evento){
evento.preventDefault();
  const name= document.querySelector("[data-name]").value
  const price= document.querySelector("[data-price]").value
  const image= document.querySelector("[data-image]").value
  const products = await conexionApi.postProducts(name,price,image)
  console.log("estos son",products)
}


formulario.addEventListener("submit",(evento)=>{
  conexion(evento)
})



