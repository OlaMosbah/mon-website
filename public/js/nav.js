const creatNav = () => {
	let nav = document.querySelector('.navbar');
	nav.innerHTML = `
			<div class="nav">
				<a href="/"><img src="../img/MON Logo.png" class="brand-logo" alt=""></a>
				<div class="nav-items">
					<div class="search">
						<input type="search" name="search" placeholder="Search Anything..." class="input-field">
						<ion-icon name="search-outline" aria-hidden="true"></ion-icon>
						
					</div>
					<a>
						<img src="../img/MONuser.png" id="user-img" alt="">
						<div class="login-logout-popup hide">
							<p class="account-info">Log in as, name</p>
							<button class="btn" id="user-btn">Log out</button>
						</div>
					</a>
					<a href="/cart"><img src="../img/MONcart.png" alt=""></a>
				</div>
			</div>
			<ul class="links-container">
				<li class="link-item"><a href="/" class="link">home</a></li>
				<li class="link-item"><a href="/shop" class="link">shop</a></li>
				<li class="link-item"><a href="#" class="link">new arrivals</a></li>
				<li class="link-item"><a href="#" class="link">about</a></li>
				<li class="link-item"><a href="#" class="link">reviews</a></li>
			</ul>
	`;
}
//<button class="search-btn">search</button>
//<input type="text" class="search-box" placeholder="search brand, product">
creatNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
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