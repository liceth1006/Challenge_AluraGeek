 import { conexionApi } from "./conexionApi.js";

export async function deleteProduct(id) {

    const buttonDelete = document.getElementById(id);

    buttonDelete.addEventListener("click", async() => {
      await conexionApi.deleteProducts(id)
     });
}