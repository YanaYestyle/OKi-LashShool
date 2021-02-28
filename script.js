function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

// window.onclick = function(event){
//     if(!event.target.matches(".dropbutton")){
//         let dropdowns = document.getElementsByClassName("dropdown-content");
//         for(let i = 0; i < dropdowns.length; i++){
//             let openDropdown = dropdowns[i];
//             if(openDropdown.classList.contains("show")){
//                 openDropdown.classList.remove("show");
//             }
//         }
//     }
// } 


//bascket

/*let itemBox = document.querySelectorAll('.item-box');
console.log(itemBox);
let cartCont = document.getElementById('cart-content');
console.log(cartCont);

function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on' + type, function(){
            handler.call(elem);
        });
    }
    return false;
}

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function addToCart(e){
    this.disabled = true;
    let cartData = getCartData() || {};
    let parentBox = this.parentNode;
    let itemId = this.getAttribute('data-id');
    let itemTitle = parentBox.querySelector('.item-title');
    if(cartData.hasOwnProperty(itemId)){
        cartData[itemId][2] += 1;
    } else {
        cartData[itemId] = [itemTitle, 1];
    }
    if(!setCartData(cartData)){
        this.disabled = false;
        cartCont.innerHTML = 'Twój zakup jest w koszyku.';
        setTimeout(function(){
            cartCont.innerHTML = 'Kontynujemy zakupy...';
        }, 1000);
    }
    return false;
}

for(let i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.add-item'), 'click', addToCart);
}

function openCart(e){
    let cartData = getCartData();
    let totalItems = '';
    console.log(JSON.stringify(cartData));
    if(cartData !== null){
        totalItems = '<table class="shopping-list"><tr><th>Name</th><th>Iłość</th></tr>';
        for(var items in cartData){
            totalItems += '<tr>';
            for(var i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</table>';
            cartCont.innerHTML = 'W koszyku nic nie ma!';
        }
        return false;
        
    }
}

addEvent(document.getElementById('checkout', 'click', openCart));
addEvent(document.getElementById('clear-cart', 'click', function(e){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Koszyk jest pusty.';
}));*/

$("#buttonBuy1").on("click", function(event){
    localStorage.setItem("hidden", false);
})

let isHidden1 = localStorage.getItem("hidden") ? localStorage.getItem("hidden") : false;
if(isHidden1){
    $("#div1").removeAttr("hidden");
};

$("#buttonBuy2").on("click", function(event){
    localStorage.setItem("hidden", false);
})

let isHidden2 = localStorage.getItem("hidden") ? localStorage.getItem("hidden") : false;
if(isHidden2){
    $("#div2").removeAttr("hidden");
};

$("#buttonBuy3").on("click", function(event){
    localStorage.setItem("hidden", true);
})

let isHidden3 = localStorage.getItem("hidden") ? localStorage.getItem("hidden") : true;
if(isHidden3){
    $("#div3").removeAttr("hidden");
};

/*$("#buttonBuy4").on("click", function(event){
    localStorage.setItem("hidden", false);
})

let isHidden4 = localStorage.getItem("hidden") ? localStorage.getItem("hidden") : false;
if(isHidden){
    $("#div4").removeAttr("hidden");
};*/