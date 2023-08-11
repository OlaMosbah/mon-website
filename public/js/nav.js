const creatNav = () => {
	let nav = document.querySelector('.navbar');
	nav.innerHTML = `
    <div class="navContainer">
		<div class="overlay" data-overlay></div>
		<a href="/"><img src="../img/MON Logo.png" alt="MON logo" class="brand-logo"></a>
		<div class="nav-items">
			<!-- search -->
			<div class="search close">
				<button class="search-close-btn" data-search-close-btn aria-label="Close search">
					<ion-icon name="close-outline"></ion-icon>
				</button>
				<input type="search" name="search" placeholder="Search Anything..." class="search-box">
				<ion-icon class="search-btn" name="search-outline" aria-hidden="true"></ion-icon>
			</div>
			<!-- -->
		  	<div class="header-actions">
				<a class="header-action-btn">
					<ion-icon name="person-outline" id="user-img" aria-hidden="true"></ion-icon>
					<!-- -->
					<div class="login-logout-popup hide">
						<button class="userpopup-close-btn" data-user-close-btn aria-label="Close User">
							<ion-icon name="close-outline"></ion-icon>
						</button>
						<p class="account-info">Log in as, name</p>
						<button class="btn" id="user-btn">Log out</button>
					</div>
					<!-- -->
				</a>
				<!-- search -->		
				<button class="header-action-btn">
					<ion-icon name="search-outline" id="scnd-search-btn" aria-hidden="true"></ion-icon>
				</button>
				<a href="#" class="header-action-btn">
					<ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
					<span class="btn-badge">0</span>
				</a>
				<a href="/cart" class="header-action-btn">
					<ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
					<span class="cart-btn-badge, btn-badge">0</span>
				</a>
			</div>
		</div>
		<button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
			<span></span>
			<span></span>
			<span></span>
		</button>

		<div class="sidenav" data-navbar>
			<div class="sidenav-top">
				<a href="/"><img src="./img/MON Logo.png" alt="MON logo" width="78" height="50"></a>
				<button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
					<ion-icon name="close-outline"></ion-icon>
				</button>
			</div>
			<ul class="links-container">
				<li class="link-item"><a href="/" class="link">Home</a></li>
				<li class="link-item"><a href="/shop" class="link">shop</a></li>
				<li class="link-item"><a href="#" class="link">new arrivals</a></li>
				<li class="link-item"><a href="#" class="link">about</a></li>
				<li class="link-item"><a href="#" class="link">reviews</a></li>
			</ul>
		</div>
    </div>			
	`;
}

creatNav();

'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const sidenav = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    sidenav.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on navbar when scrolled 200px from top
 */

const navbar = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? navbar.classList.add("active")
    : navbar.classList.remove("active");
})


//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
const popupCloseBtn = document.querySelector('[data-user-close-btn]');

userImageButton.addEventListener('click', () => {
	userPopup.classList.toggle('hide');
})

popupCloseBtn.addEventListener('click', () => {
	userPopup.classList.toggle('hide');
})
window.onload = () => {
	let user = JSON.parse(sessionStorage.user || null);
	if(user != null){
		//means user is logged in
		popuptext.innerHTML = `log in as, ${user.name}`;
		actionBtn.innerHTML = 'log out';
		actionBtn.addEventListener('click', () => {
			sessionStorage.clear();
			location.reload();
		})
	}else{
		//user is logged out
		popuptext.innerHTML = 'log in to place order';
		actionBtn.innerHTML = 'log in';
		actionBtn.addEventListener('click', () => {
			location.href = '/login';
		})
	}
}

// search box
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
	if(searchBox.value.length){
		location.href = `/search/${searchBox.value}`
	}
})

//second search phone view 
const secSearchButton = document.querySelector('#scnd-search-btn');
const search = document.querySelector('.search');
const searchCloseBtn = document.querySelector('[data-search-close-btn]');

secSearchButton.addEventListener('click', () => {
	search.classList.toggle('close');
})

searchCloseBtn.addEventListener('click', () => {
	search.classList.toggle('close');
})




// nav cart count

const updateNavCartCounter = () => {
	let cartCounter = document.querySelector('.cart-btn-badge');
	
	let cartItem = JSON.parse(localStorage.getItem('cart'));
	
	if(cartItem == null){
		cartCounter.innerHTML = '0';
	} else{
		if(cartItem.length > 9){
			cartCounter.innerHTML = '9+';
		} else if(cartItem.length <= 9){
			cartCounter.innerHTML = `${cartItem.length}`
		}
	}
}

updateNavCartCounter();

// nav wishlist count

const updateNavWishlistCounter = () => {
	let WishlistCounter = document.querySelector('.btn-badge');
	
	let WishlistItem = JSON.parse(localStorage.getItem('wishlist'));
	
	if(WishlistItem == null){
		WishlistCounter.innerHTML = '0';
	} else{
		if(WishlistItem.length > 9){
			WishlistCounter.innerHTML = '9+';
		} else if(WishlistItem.length <= 9){
			WishlistCounter.innerHTML = `${WishlistItem.length}`
		}
	}
}

updateNavWishlistCounter();