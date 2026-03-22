let category_nav_list =document.querySelector(".category_nav_list");

function Open_Categ_list(){
    category_nav_list.classList.toggle("active")
}



var cart = document.querySelector('.cart')

function open_close_cart(){
    cart.classList.toggle("active")
}



fetch('product.json')
.then(Response=> Response.json())
.then(data=>{
    console.log(data);
    

    const addToCartButtons = document.querySelectorAll(".btn_add_cart")

        addToCartButtons.forEach(button=> {
            button.addEventListener("click",(event) => {
                const productId = event.target.getAttribute('data-id')
                const selctedProduct =data.find(product => product.id == productId)

                addToCart(selctedProduct)
            })
        })

})
function addToCart(product){
    
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({... product , quantity: 1})
    localStorage.setItem('cart' ,JSON.stringify(cart))

    updateCart()
}


function updateCart() {
        const cartItemsContainer = document.getElementById("cart_items")

        const cart =  JSON.parse(localStorage.getItem('cart')) || []

        cartItemsContainer.innerHTML ="" ;
        cart.forEach((item, index) =>{ 
            cartItemsContainer.innerHTML += `
            
              <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart"> EGP${item.price}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity"><i class="fa-solid fa-minus"></i></button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="Increase_quantity"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>

                <button class="delete_items"><i class="fa-solid fa-trash-can btn " ></i></button>
            </div>


            `
        })
}