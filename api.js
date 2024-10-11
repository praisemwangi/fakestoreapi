async function productList() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json(); 
        return products; 
    } catch (error) {
        console.error("Error fetching products:", error); 
    }
}

const displayProductList = async () => {
    const dataElement = document.getElementById("product-card");
    const getData = await productList();
    
    if (getData) { 
        dataElement.innerHTML = getData.map(item => {
            return `
            <div class="card-container">
                <img src="${item.image}" alt="${item.title}">
                <h1>${item.title}</h1>
                <h2>$${item.price}</h2>
            </div>
            `;
        }).join('');
    } else {
        dataElement.innerHTML = "<p>No products available.</p>"; 
    }
}


displayProductList();
