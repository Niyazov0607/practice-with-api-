const wrapperEL = document.querySelector(".wrapper");

fetchProducts();
async function fetchProducts() {
    console.log("Iltimos kuting!");

    try {
        const result = await fetch("http://localhost:5000/products");
        const res = await result.json();

        console.log("Muvaffaqiyatli yakunlandi");

        const products = res.data;
        console.log(products);

        products.forEach((product) => {
            wrapperEL.appendChild(
                createCard(
                    product.image,
                    product.category,
                    product.name,
                    product.description,
                    product.price,
                    product.rating
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
}

function createCard(img, category, title, description, price, rating) {
    const newElement = document.createElement("div");
    newElement.classList.add("card");

    newElement.innerHTML = `

      <div class="img-container">
      <img src="${img}" alt="" />
        </div>
      <p class="card__price">${category}</p>
      <h3 class="card__title">${title}</h3>
      <p class="card__desc">${description}</p>
      <span class="rating card__price"><i class="icon fa-solid fa-star"></i> ${rating}</span>
      <p class="price card__price">${price} so'm</p>
    `;
    return newElement;
};