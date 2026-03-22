fetch('product.json')
.then(Response=> Response.json())
.then(data=>{
    console.log(data);

    const swiper_items_sale = document.getElementById("swiper_items_sale")

    const swiper_Poster = document.getElementById("swiper_Poster")

    const swiper_photo_cards = document.getElementById("swiper_photo_cards")

    const swiper_paper_model = document.getElementById("swiper_paper_model")

    const swiper_Paper_Keychains = document.getElementById("swiper_Paper_Keychains")
    
    data.forEach(product => {
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
                            <a href="#">EGP${product.name}
                            </a>
                        </p>
                        <div class="price">
                            <p><span>${product.price}</span></p>
                            <p class="old_price">${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    });
        
    
    data.forEach(product => {
        if(product.category == "Posters"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_Poster.innerHTML += `



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
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    });

        data.forEach(product => {
        if(product.category == "Photo cards"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_photo_cards.innerHTML += `



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
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    });

        data.forEach(product => {
        if(product.category == "Paper Models"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_paper_model.innerHTML += `



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
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>add to cart
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                     </div>


            `

        }
    });

        data.forEach(product => {
        if(product.category == "Paper Keychains"){

            const old_price_pargrahp = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";


            swiper_Paper_Keychains.innerHTML += `



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
                            <span class="btn_add_cart" data-id="${product.id}">
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