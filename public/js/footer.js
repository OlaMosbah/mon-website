const createFooter = () => {
	let footer = document.querySelector('footer');
	
	footer.innerHTML = `
	<div class="footer-content">
		<img src="../img/MON light-logo.png" class="logo" alt="">
		<div class="footer-ul-container">
			<ul class="category">
				<li class="category-title">men</li>
				<li><a href="#" class="footer-link">t-sherts</a></li>
				<li><a href="#" class="footer-link">sweatshirts</a></li>
				<li><a href="#" class="footer-link">shirts</a></li>
				<li><a href="#" class="footer-link">jeans</a></li>
				<li><a href="#" class="footer-link">trousers</a></li>
				<li><a href="#" class="footer-link">shoes</a></li>
				<li><a href="#" class="footer-link">casuals</a></li>
				<li><a href="#" class="footer-link">formals</a></li>
				<li><a href="#" class="footer-link">sports</a></li>
				<li><a href="#" class="footer-link">watchs</a></li>

			</ul>
			<ul class="category">
				<li class="category-title">women</li>
				<li><a href="#" class="footer-link">t-sherts</a></li>
				<li><a href="#" class="footer-link">sweatshirts</a></li>
				<li><a href="#" class="footer-link">shirts</a></li>
				<li><a href="#" class="footer-link">jeans</a></li>
				<li><a href="#" class="footer-link">trousers</a></li>
				<li><a href="#" class="footer-link">shoes</a></li>
				<li><a href="#" class="footer-link">casuals</a></li>
				<li><a href="#" class="footer-link">formals</a></li>
				<li><a href="#" class="footer-link">sports</a></li>
				<li><a href="#" class="footer-link">watchs</a></li>

			</ul>
		</div>
	</div>
	<p class="footer-title">about company</p>
	<p class="info">Our mission has always been to excite you with scrunchies as bold as your confidence. All scrunchies are hand crafted and all products are designed with care to ensure that any gems you find at XXL is unique, just like you. </p>
	<p class="info">support emails - mon.rafcroch@gmail.com</p>
	<p class="info">telephone - 20 106 111 1111</p>
	<div class="footer-social-container">
		<div>
			<a href="#" class="social-link">terms & services</a>
			<a href="#" class="social-link">privacy page</a>
		</div>
		<div>
			<a href="#" class="social-link">instagram</a>
			<a href="#" class="social-link">facebook</a>
			<a href="#" class="social-link">tiktok</a>
		</div>
	</div>
	<p class="footer-credit">MON, Best online store</p>
	`;
}

createFooter();