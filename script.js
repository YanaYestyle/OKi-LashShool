function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches(".dropbutton")){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }
} 


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


var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
	if (click) {
		if (curpage == 1) curpage = 5;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function rightSlide() {
	if (click) {
		if (curpage == 4) curpage = 0;
		console.log("woek");
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function move() {
	if (sliding) {
		sliding = false;
		if (svg) {
			for (j = 1; j <= 9; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 10; j <= 18; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		}
		setTimeout(() => {
			for (i = 1; i <= 4; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 600);
		setTimeout(() => {
			click = true;
		}, 1700);

		setTimeout(() => {
			if (svg) {
				for (j = 1; j <= 9; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
			} else {
				for (j = 10; j <= 18; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
				sliding = true;
			}
		}, 850);
		setTimeout(() => {
			click = true;
		}, 1700);
	}
}

left.onmousedown = () => {
	leftSlide();
};

right.onmousedown = () => {
	rightSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		leftSlide();
	} else if (e.keyCode == 39) {
		rightSlide();
	}
};

//for codepen header
// setTimeout(() => {
// 	rightSlide();
// }, 500);