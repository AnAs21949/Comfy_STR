const products = [
    {
        id: 'rec43w3ipXvP28vog',
        title: 'high-back bench',
        company: 'ikea',
        image:
            'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
        price: 9.99,
        },
        {
        id: 'rec4f2RIftFCb7aHh',
        title: 'albany table',
        company: 'marcos',
        image:
            'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
        price: 79.99,
        },
        {
        id: 'rec8kkCmSiMkbkiko',
        title: 'accent chair',
        company: 'caressa',
        image:
            'https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg',
        price: 25.99,
        },
        {
        id: 'recBohCqQsot4Q4II',
        title: 'wooden table',
        company: 'caressa',
        image:
            'https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg',
        price: 45.99,
        },
        {
        id: 'recDG1JRZnbpRHpoy',
        title: 'dining table',
        company: 'caressa',
        image:
            'https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg',
        price: 6.99,
        },
        {
        id: 'recNWGyP7kjFhSqw3',
        title: 'sofa set',
        company: 'liddy',
        image:
            'https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg',
        price: 69.99,
        },
        {
        id: 'recZEougL5bbY4AEx',
        title: 'modern bookshelf',
        company: 'marcos',
        image:
            'https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg',
        price: 8.99,
        },
        {
        id: 'recjMK1jgTb2ld7sv',
        title: 'emperor bed',
        company: 'liddy',
        image:
            'https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg',
        price: 21.99,
        },
        {
        id: 'recmg2a1ctaEJNZhu',
        title: 'utopia sofa',
        company: 'marcos',
        image:
            'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
        price: 39.95,
        },
        {
        id: 'recvKMNR3YFw0bEt3',
        title: 'entertainment center',
        company: 'liddy',
        image:
            'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
        price: 29.98,
        },
        {
        id: 'recxaXFy5IW539sgM',
        title: 'albany sectional',
        company: 'ikea',
        image:
            'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
        price: 10.99,
        },
        { 
        id: 'recyqtRglGNGtO4Q5',
        title: 'leather sofa',
        company: 'liddy',
        image:
            'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
        price: 9.99,
      },
    ];


const open = document.querySelector(".open")
const close = document.querySelector(".close");
const popup = document.querySelector(".pop-up");
const Btn  = document.querySelector(".cart-Btn");
const cart = document.querySelector(".side-cart");
const closeCart = document.querySelector(".close-cart");
const feaContainer = document.querySelector(".products-fe");
const productsContainer = document.querySelector(".products");






// document.addEventListener("DOMContentLoaded",function(){
//     randomDisplay()
// })
// randomDisplay()
const myProducts = []
randomDisplay()



function displayMyCart(){
    
    const productsContainer = document.querySelector(".products");
    const displayMyBuying =  myProducts.map(function(product){
        return `<div class="product">
        <img src="${product.image}" alt="">
        <div class="product-info">
            <p class="title">${product.title}</p>
            <span class="price">$${product.price}</span>
            <button class="remove" data-id="${product.title}">remove</button>
        </div>
        <div class="counter">
            <button class="up" data-id="${product.title}">
                <i class="fa-solid fa-chevron-up"></i>
            </button>
            <span class="counter-display" data-id="${product.title}">1</span>
            <button class="down" data-id="${product.title}">
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
    </div>`
    }).join("")

    productsContainer.innerHTML = displayMyBuying
    // return(myProducts)
}



function randomDisplay(){
    let table = [];
    for(let i=0; i<3; i++){
        table.push(products[i]);
    }

    const threePro  = table.map(function(product){
        return`<div class="product">
        <figure class="product-container">
            <div class="img-content">
                <div class="image"><img src="${product.image}" alt=""></div>
                <div class="icons">
                    <button class="search" >
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button class="add-cart" data-id="${product.title}">
                        <i class="fa-solid fa-cart-shopping" data-id="${product.title}"></i>
                    </button>
                </div> 
            </div>
            <figcaption class="pro-info">
                <h3 class="title">${product.title}</h3>
                <h2 class="price">${product.price}$</h2>
            </figcaption>
        </figure>
    </div>`
    }).join("")

    feaContainer.innerHTML = threePro;

    const addBtns = document.querySelectorAll(".add-cart");
    // const productsContainer = document.querySelector(".products");
    const itemsCart = document.querySelector(".items-number")
    
    
    // const totalMoney = document.querySelector(".t-money");
    let money = [];
    addBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            
            const id = e.target.dataset.id
            products.filter(function(product){
                if(product.title === id){
                    if(!myProducts.includes(product)){
                            myProducts.push(product)
                            money.push(product.price);
                        }
                }
                
                itemsCart.innerHTML = myProducts.length;
                // return(myProducts)
            })
            const totalMoney = document.querySelector(".t-money");
            console.log(money)
            let r = 0; 
            for(let i = 0; i < money.length ; i++){
                r = money[i] + r;
                console.log(r);
            }
            totalMoney.innerHTML = `$${r.toFixed(2)}`

        
        
        
            displayMyCart();
            const removeBtns = document.querySelectorAll(".remove");
            removeBtns.forEach(function(Btn){
                Btn.addEventListener("click", function(e){
                    
                    const removeId = e.target.dataset.id
                    console.log(removeId);
                    myProducts.filter(function(product){
                        if(product.title === removeId){
                            myProducts.splice(myProducts.indexOf(product),1)
                            return myProducts
                        }
                    })
                    itemsCart.innerHTML = myProducts.length;
                    displayMyCart()
                    return(myProducts)
                })
            })

            const conterContainer = document.querySelector(".counter-display")
            const moreBnt = document.querySelector(".up")
            const lessBnt = document.querySelector(".down")

            let i = 1;
            
            moreBnt.addEventListener("click", function(){
                i++
                conterContainer.innerHTML = i;
            })

            lessBnt.addEventListener("click", function(){
                i--
                if(i <= 1){
                    i=1
                }
                conterContainer.innerHTML = i;
            })

        })
        
        
        
    })

    console.log(myProducts)


    
    
    displayMyCart();
        
    
    
}    












open.addEventListener("click", function(){
    popup.classList.add("show")
})
close.addEventListener("click", function(){
    popup.classList.remove("show")
})

Btn.addEventListener("click",function(){
    cart.classList.add("show-cart");
})

closeCart.addEventListener("click", function(){
    cart.classList.remove("show-cart");
})




