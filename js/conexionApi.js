const URL_API = "http://localhost:3001/productos";

async function getProducts() {
  try {
    const response = await fetch(URL_API);

    const dataProducts = await response.json();

    return dataProducts;
  } catch (error) {
    console.log(error);
  }
}

async function postProducts(name,price,image) {
  try {
    const response = await fetch(URL_API,{
      method:"POST",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({
        name:name,
        price:price,
        image:image
    })
    });

    const dataProducts = await response.json();

    return dataProducts;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProducts(id) {
  try {
    const response = await fetch(`${URL_API}/${id}`,{
      method:"DELETE",
      headers:{'content-type': 'application/json'},
    });

    const dataProducts = await response.json();

    return dataProducts;
  } catch (error) {
    console.log(error);
  }
}

export const conexionApi ={
  deleteProducts,
  postProducts,
  getProducts

}