window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("navbar").classList.remove("sticky-top");
    document.getElementById("navbar").classList.add("fixed-top");

  } else {
    document.getElementById("navbar").classList.add("sticky-top");
    document.getElementById("navbar").classList.remove("fixed-top");

  }
}

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Product Color Chooser

const colorOptions = document.querySelectorAll('.color-option');

    function selectColor(event) {
        
        colorOptions.forEach(option => {
            option.classList.remove('selected');
        });

        // Select the clicked color option
        event.target.classList.add('selected');
    }

    colorOptions.forEach(option => {
        option.addEventListener('click', selectColor);
    });

// json
function fetchProducts() {
  return fetch('../products.json') // Adjusted path to access products.json
      .then(response => response.json())
      .catch(error => console.error('Error fetching products:', error));
}


function renderProducts(products) {
  const productListDiv = document.getElementById('product-list');
  if (!productListDiv) {
      console.error('Product list container not found!');
      return;
  }

  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
          <div class="col gap-3">
              <a href="product.html" class="product" id="product${product.id}">
                  <div class="product-image">
                      <img src="${product.image}" class="product-img" alt="...">
                  </div>
                  <div class="product-description">
                      <p class="product-description__name text-truncate">${product.name}</p>
                      <h6 class="product-description__price"><span class="naira">N</span>${product.price.toFixed(2)}</h6>
                      <p class="product-description__fprice m-0">${product.discounted_price.toFixed(2)}</p>
                  </div>
              </a>
          </div>
      `;
      productListDiv.appendChild(productDiv);
  });
}

// Load products when the page is loaded
window.onload = function() {
  fetchProducts().then(products => {
      renderProducts(products);
  });
};
