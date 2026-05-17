  const cartContainer = document.querySelector(".cart-left");


let cartItemsIds = JSON.parse(localStorage.getItem('cartItemsIds')) || [];  

updatecart();

let cartItems;
IdtocartItems();

renderCartUI();

if(cartItemsIds.length === 0){
  cartContainer.innerHTML = "<h2>Your cart is empty 😢</h2>";
}

  function updatecart(){
    let count = document.querySelector('.cart-count');
    let countnumber = cartItemsIds.reduce((sum,item)=>{
      return sum + item.qty;
    },0)
    count.innerHTML = countnumber;
  }

  function IdtocartItems(){
    cartItems = cartItemsIds.map((ID)=>{
      let product = products.find(item => item.id ==ID.id);
      return {
        ...product,
        qty:ID.qty
      }
    });

  }

function renderCartUI(){
  cartContainer.innerHTML = "";

  cartItems.forEach((item, index) => {

    // MAIN DIV
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // ❌ CROSS ICON
    const cross = document.createElement("i");
    cross.classList.add("fa-solid", "fa-xmark", "cross");

    // IMAGE
    const img = document.createElement("img");
    img.src = item.image;

    // ITEM INFO
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    const title = document.createElement("h4");
    title.innerText = item.name;

    const priceBox = document.createElement("div");
    priceBox.classList.add("product-price");

    const currentPrice = document.createElement("span");
    currentPrice.classList.add("current-price");
    currentPrice.innerText = `$${item.price.current_price}`;

    const originalPrice = document.createElement("span");
    originalPrice.classList.add("original-price");
    originalPrice.innerText = `$${item.price.original_price}`;

    const discountpercent = document.createElement("span");
    discountpercent.classList.add("discount");

    let original = item.price.original_price;
    let current = item.price.current_price;

    discountpercent.innerText = `${Math.round(((original - current)/original)*100)}% OFF`;

    // APPEND PRICE
    priceBox.append(currentPrice, originalPrice, discountpercent);
    itemInfo.append(title, priceBox);

    // QUANTITY SECTION
    const qtyBox = document.createElement("div");
    qtyBox.classList.add("item-qty");

    const qtyBtns = document.createElement("div");
    qtyBtns.classList.add("qty-btns");

    const plus = document.createElement("i");
    plus.classList.add("fa-solid", "fa-plus", "plus");

    const qty = document.createElement("span");
    qty.classList.add("qty");
    qty.innerText = item.qty;

    const minus = document.createElement("i");
    minus.classList.add("fa-solid", "fa-minus", "minus");

    qtyBtns.append(plus, qty, minus);

    const totalText = document.createElement("h4");
    totalText.innerHTML = `Total: <span class="total-item-price">$${current*item.qty}</span>`;

    qtyBox.append(qtyBtns, totalText);

    // FINAL APPEND
    cartItem.append(cross, img, itemInfo, qtyBox);
    cartContainer.appendChild(cartItem);

    plus.addEventListener('click',()=>{
      let clickeditem = cartItemsIds.find(ITEM=> ITEM.id === item.id);
      clickeditem.qty++;
      updateAll();
    })

    minus.addEventListener('click',()=>{
      let clickeditem = cartItemsIds.find(ITEM=> ITEM.id === item.id);
      if(clickeditem.qty>1){
        clickeditem.qty--;
      }else{
        cartItemsIds = cartItemsIds.filter(ITEM => ITEM.id!==item.id)
      }
       updateAll();
    })

   cross.addEventListener('click',()=>{
       cartItemsIds.splice(index,1);
      updateAll();
   })

  });

  calculateTotalPrice();
}


    function updateAll(){
       localStorage.setItem('cartItemsIds',JSON.stringify(cartItemsIds));
      IdtocartItems();
      renderCartUI();
      updatecart();
    }


function calculateTotalPrice(){
  let subtotaltext = document.querySelector('.subtotal');
  let discounttext = document.querySelector('.discount');
  let totaltext = document.querySelector('.total');
  let subtotal = 0;
  let discount = 0;
  cartItems.forEach((item)=>{
    subtotal += item.price.current_price*item.qty;
  });

  let total = subtotal - discount;

  subtotaltext.innerHTML = `$${subtotal}`;
  discounttext.innerHTML = `$${discount}`;
  totaltext.innerHTML = `$${total}`;
}



// ===============================
// ELEMENTS
// ===============================
const checkoutBtn = document.getElementById("checkout-btn");
const form = document.getElementById("contact-form");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-form");

// ===============================
// OPEN MODAL
// ===============================
checkoutBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  form.style.display = "block";
});

// ===============================
// CLOSE MODAL
// ===============================
function closeModal() {
  overlay.style.display = "none";
  form.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// ===============================
// WHATSAPP ORDER
// ===============================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!cartItems || cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const name = document.getElementById("inputname").value;
  const phone = document.getElementById("inputnumber").value;
  const address = document.getElementById("inputaddress").value;
  const notes = document.getElementById("textinput").value;

  let orderItems = "";
  let total = 0;

  cartItems.forEach(item => {
    orderItems += `- ${item.name} x${item.qty} = Rs ${item.price.current_price * item.qty}\n`;
    total += item.price.current_price * item.qty;
  });

  let message =
`🛒 NEW ORDER

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}

📦 ITEMS:
${orderItems}

💰 TOTAL: Rs ${total}

📝 Notes: ${notes || "None"}
`;

  const whatsappNumber = "9779867018114";

  window.location.href =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});