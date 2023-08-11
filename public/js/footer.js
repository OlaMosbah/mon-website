const createFooter = () => {
	let footer = document.querySelector('footer');
	
	footer.innerHTML = `
		<div class="footer-container">
			<div class="footer-content">
				<img src="../img/MON light-logo.png" class="logo" alt="">
				<ul>
					<li class="footer-list-title">category</li>
					<li><a href="#" class="footer-link">hair accessories</a></li>
					<li><a href="#" class="footer-link">satin pillowcasses</a></li>
					<li><a href="#" class="footer-link">bages ..soon..</a></li>
					<li><a href="#" class="footer-link">coasters ..soon..</a></li>
				</ul>
				<ul>
					<li class="footer-list-title">my account</li>
					<li><a href="#" class="footer-link">register</a></li>
					<li><a href="#" class="footer-link">my orders</a></li>
					<li><a href="#" class="footer-link">my wishlist</a></li>
				</ul>
				<ul>
					<li class="footer-list-title">help & information</li>
					<li><a href="#" class="footer-link">FAQ information</a></li>
					<li><a href="#" class="footer-link">list of shops</a></li>
					<li><a href="#" class="footer-link">return & exchange policy</a></li>
					<li><a href="#" class="footer-link">shipping & delivery</a></li>
					<li><a href="#" class="footer-link">loyalty & rewords</a></li>
					<li><a href="#" class="footer-link">scrunchie care instructions</a></li>
					<li><a href="#" class="footer-link">satin pillowcase care instructions</a></li>
				</ul>
			</div>
			<p class="footer-title">about company</p>
			<p class="info">Our mission has always been to excite you with products as bold as your confidence. All products are hand crafted and all products are designed with care to ensure that any gems you find at MON is unique, just like you. </p>
			<div class="info">
				<ion-icon name="mail-sharp"></ion-icon>
				<p>mon.rafcroch@gmail.com</p>
			</div>
			<div class="info">
				<ion-icon name="call-sharp"></ion-icon>
				<p>+20 100 000 0000</p>
			</div>
			<div class="footer-social-container">
				<div>
					<a href="#" class="policy-link">terms & services</a>
					<a href="#" class="policy-link">privacy page</a>
				</div>
				<ul class="social-list">
					<li>
						<a href="https://www.instagram.com/mon.rafaheya/" class="social-link">
							<ion-icon name="logo-instagram"></ion-icon>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/MON.rafaheya" class="social-link">
							<ion-icon name="logo-facebook"></ion-icon>
						</a>
					</li>
					<li>
						<a href="https://www.tiktok.com/@monrafaheya" class="social-link">
							<ion-icon name="logo-tiktok"></ion-icon>
						</a>
					</li>
					<li>
						<a href="https://youtube.com/@mon.rafaheya" class="social-link">
							<ion-icon name="logo-youtube"></ion-icon>
						</a>
					</li>
					<li>
						<a href="#" class="social-link">
							<ion-icon name="logo-twitter"></ion-icon>
						</a>
					</li>
					<li>
						<a href="#" class="social-link">
							<ion-icon name="logo-pinterest"></ion-icon>
						</a>
					</li>
				  </ul>
			</div>
			<p class="footer-credit">
				&copy; copyright 2023 MON Rafaheya. All Rights Reserved
			</p>
		</div>	
	`;
}

createFooter();