renderItems(products);

let searchInput = document.querySelector('#searchInput');
let categoryFilter = document.querySelector('#categoryFilter');

let cartItemsIds = JSON.parse(localStorage.getItem('cartItemsIds')) || [];  

  updatecart();


  function renderItems(products){
    
    let productContainor = document.querySelector('.product-containor');
    productContainor.innerHTML = '';

    products.forEach((item)=>{

      let product = document.createElement('div');
      let img = document.createElement('img');
      let h3 = document.createElement('h3');
      let price = document.createElement('div');
      let currentPrice = document.createElement('span');
      let originalPrice = document.createElement('span');
      let discount = document.createElement('span');
      let reviews = document.createElement('div');
      let rating = document.createElement('span');
      let count = document.createElement('span');
      let addToCartBtn = document.createElement('button');
  
      product.classList.add("product");
      h3.classList.add("product-name");
      price.classList.add("product-price");
      currentPrice.classList.add("current-price");
      originalPrice.classList.add("original-price");
      discount.classList.add("discount");
      reviews.classList.add("reviews");
      rating.classList.add("rating");
      count.classList.add("review-count");
      addToCartBtn.classList.add("add-to-cart");
  
      img.src = item.image;
      h3.innerText = item.name;
      currentPrice.innerHTML = `$${item.price.current_price}`;
      originalPrice.innerHTML = `$${item.price.original_price}`;
      discount.innerHTML = `${(((item.price.original_price - item.price.current_price)*100)/item.price.original_price).toFixed(0)}% off`;
      rating.innerHTML = `${item.reviews.rating}★`;
      count.innerHTML = `(${item.reviews.count})`;
      addToCartBtn.innerText = 'Add to Cart';
  
      price.appendChild(currentPrice);
      price.appendChild(originalPrice);
      price.appendChild(discount);
      reviews.appendChild(rating);
      reviews.appendChild(count); 
  
      product.appendChild(img);
      product.appendChild(h3);
      product.appendChild(price);
      product.appendChild(reviews);
      product.appendChild(addToCartBtn);
      productContainor.appendChild(product);

      addToCartBtn.addEventListener('click',()=>{
          addItemsIds(item.id);
          updatecart();
      })
    })
  };

  function addItemsIds(ID){
    let alreadyExist =  cartItemsIds.find(item=> item.id === ID);
      if(alreadyExist){
        let showInfo = document.querySelector('.show-info');
          showInfo.style.display = 'block';
          showInfo.style.transform = 'scale(0.7)';

        setTimeout(() => {
        showInfo.style.transform = 'scale(1)';
        }, 5);

        setTimeout(() => {
          showInfo.style.display = 'none';
        }, 3000);
      }else{
        cartItemsIds.push({id:ID,qty:1});
        localStorage.setItem('cartItemsIds',JSON.stringify(cartItemsIds));
      }
       
  };


  function updatecart(){
    let count = document.querySelector('.cart-count');
    let countnumber = cartItemsIds.reduce((sum,item)=>{
      return sum + item.qty;
    },0)
    count.innerHTML = countnumber;
  }

  searchInput.addEventListener('input',()=>{
    let value = searchInput.value.trim().toLowerCase();
    let searchedItems = products.filter(item => item.name.toLocaleLowerCase().includes(value));
    renderItems(searchedItems);
  })

  categoryFilter.addEventListener('change',()=>{
    let category = categoryFilter.value;
    if(category === 'all'){
      renderItems(products);
    }else{
      let filtered = products.filter(item => item.category.toLowerCase() === category.toLowerCase());
      renderItems(filtered);
    }
  })