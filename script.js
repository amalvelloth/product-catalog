document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
    const categoryFilter = document.getElementById('categoryFilter');

    fetch('/products.json')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);

            categoryFilter.addEventListener('change', (e) => {
                const category = e.target.value;
                const filteredProducts = category === 'all'
                    ? products
                    : products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            });
        });

    function displayProducts(products) {
        console.log(products)
        productContainer.innerHTML = products.map(product => `
            <div class="border bg-white rounded p-4 m-6 h-3/4">
                <img src="${product.image}" alt="${product.name}" class="w-full h-3/4  rounded-lg object-cover">
                <h2 class="text-lg font-bold">${product.name}</h2>
                <p>${product.description}</p>
                <p class="text-green-500 font-bold">$${product.price}</p>
                <p class="text-gray-500">${product.category}</p>
            </div>
        `).join('');
    }
});
