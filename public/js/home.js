const setupSlidingEffect = () => {
	const productContainers = [...document.querySelectorAll('.product-container')];
	const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
	const preBtn = [...document.querySelectorAll('.pre-btn')];

	productContainers.forEach((item, i) => {
		let containerDimenstions = item.getBoundingClientRect();
		let containerWidth = containerDimenstions.width;
		
		nxtBtn[i].addEventListener('click', () => {
			item.scrollLeft += containerWidth;
		})

		preBtn[i].addEventListener('click', () => {
			item.scrollLeft -= containerWidth;
		})
	})
}

// fetch product cards
const getProducts = (tag) => {
	return fetch('/get-products', {
		method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({tag: tag})
	})
	.then(res => res.json())
	.then(data => {
		return data;
	})
}

// create product slider
const createProductSlider = (data, parent, title) => {
	let slideContainer = document.querySelector(`${parent}`);
	
	slideContainer.innerHTML += `
		<section class="product">
			<h2 class="product-category">${title}</h2>
			<button class="pre-btn"><img src="../img/arrow.png" alt=""></button>
			<button class="nxt-btn"><img src="../img/arrow.png" alt=""></button>
			${createProductCards(data)}
		</section>
	`
	
	setupSlidingEffect();
}

const createProductCards = (data, parent) => {
	// here parent is for search product
	let discount=[];
	let start = '<div class="product-container">';
	let middle = ''; //this will cotain cart HTML
	let end = '</div>';
	
	for(let i = 0; i < data.length; i++){
		if(data[i].id != decodeURI(location.pathname.split('/').pop())){
			middle += `
			<div class="product-card">
				<div class="product-image" onclick="location.href = '/products/${data[i].id}'">
					<span class="discount-tag" hidden>${data[i].discount}% off</span>
					<img src="${data[i].images[0]}" class="product-thumb" alt="">
				</div>
				<div class="product-info" >
					<h2 class="product-prand">${data[i].name}</h2>
					<p class="product-short-des">${data[i].shortDes}</p>
					<span class="price">${data[i].sellPrice}LE</span><span class="actual-price">${data[i].actualPrice}LE</span>
				</div>
			</div>
			`
			discount = data[i].discount;
			console.log(discount);
		}
	}
	
			
	
	if(parent){
		let cardContainer = document.querySelector(parent);
		cardContainer.innerHTML = start + middle + end;
	}else{
		return start + middle + end;
	}
	/*ola*/
	let discountTag = document.querySelector('.discount-tag');
	if(discount != 0 ){
		discountTag.style.display = 'unset';
	}
	/*let discountTag = document.querySelector('.discount-tag');
	if(discountTag != '0% off' ){
		discountTag.style.display = 'unset';
	}*/
}

const add_product_to_cart_or_wishlist = (type, product) => {
	let data = JSON.parse(localStorage.getItem(type));
	if(data == null){
		data = [];
	}
	
	product = {
		item: 1,
		name: product.name,
		sellPrice: product.sellPrice,
		size: size || null,
		shortDes: product.shortDes,
		image: product.images[0]
	}
	
	data.push(product);
	//console.log(data);
	localStorage.setItem(type, JSON.stringify(data));
	return 'added';
}

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * header & back top btn active when window scroll down to 100px -woodecs toturial-
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);