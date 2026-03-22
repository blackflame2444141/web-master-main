fetch('product.json')
.then(Response=> Response.json())
.then(data=>{
    console.log(data);

    const swiper_items_sale = document.getElementById("swiper_items_sale")

    const swiper_poster = document.getElementById("swiper_poster")

    const swiper_photocard = document.getElementById("swiper_photo card")

    const swiper_papermodel = document.getElementById("swiper_paper model")

    const swiper_PaperKeychains = document.getElementById("swiper_Paper Keychains")
    
    date.forEach(product => {
        if(product.old_price){


            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)

            swiper_items_sale.innerHTML += `



              <div class="swiper-slide product">
                        <span class="sale_present">${percent_disc}</span>
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product">
                            <a href="#">${product.name}
                               Photo Card
                            </a>
                        </p>
                        <div class="price">
                            <p><span>${product.price}</span></p>
                            <p class="old_price">${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    })
        
    
    date.forEach(product => {
        if(product.category == "posters"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_poster.innerHTML += `


              <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product">
                            <a href="#">${product.name}

                            </a>
                        </p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pargrahp}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    })

        date.forEach(product => {
        if(product.category == "Photo Cards"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_photocard.innerHTML += `



              <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product">
                            <a href="#">${product.name}
                               Photo Card
                            </a>
                        </p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pargrahp}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    })

        date.forEach(product => {
        if(product.category == "paper model"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_papermodel.innerHTML += `



              <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product">
                            <a href="#">${product.name}
                               Photo Card
                            </a>
                        </p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pargrahp}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    })

        date.forEach(product => {
        if(product.category == "Paper Keychains"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_PaperKeychains.innerHTML += `



              <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product">
                            <a href="#">${product.name}
                               Photo Card
                            </a>
                        </p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_pargrahp}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    })

})