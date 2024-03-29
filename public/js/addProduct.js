let user = JSON.parse(sessionStorage.user || null);
let loader = document.querySelector('.loader');

// checknig user is logged in or not
window.onload = () => {
    if(user){
        if(!compareToken(user.authToken, user.email)){
            location.replace('/login');
        }
    } else{
        location.replace('/login');
    }
}

// price inputs

const actualPrice = document.querySelector('#actual-price');
const discountPercentage = document.querySelector('#discount');
const sellingPrice = document.querySelector('#sell-price');

discountPercentage.addEventListener('input', () => {
    if(discountPercentage.value > 100){
        discountPercentage.value = 90;
    }else{
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount;
    }
})

sellingPrice.addEventListener('input', () => {
	let discount = 100-((sellingPrice.value / actualPrice.value) * 100);
	discountPercentage.value = (discount).toFixed(1);
})

//upload image handle
let uploadImages = document.querySelectorAll('.fileupload');
let imagePaths = []; //will store all uploaded images pathes;

/*fetch('/s3url').then(res => res.json())
.then(url => console.log(url));*/
uploadImages.forEach((fileupload, index) => {
	fileupload.addEventListener('change', () => {
		const file = fileupload.files[0];
		//console.log(file);
		let imageUrl;
		
		if(file.type.includes('image')){
			// means user uploaded an image
			fetch('/s3url').then(res => res.json())
			.then(url => {
				fetch(url,{
					method: 'PUT',
					headers: new Headers({'Content-Type': 'multipart/form-data'}),
					body: file
				}).then(res => {
					imageUrl = url.split("?")[0];
					imagePaths[index] = imageUrl;
					let label = document.querySelector(`label[for=${fileupload.id}]`);
					label.style.backgroundImage = `url(${imageUrl})`;
					let productImage = document.querySelector('.product-image');
					productImage.style.backgroundImage = `url(${imageUrl})`;
				})
			})
		} else{
			showAlert('upload image only');
		}
	})
})

// form aubmission

const productName = document.querySelector('#product-name');
const shortLine = document.querySelector('#short-des');
const des = document.querySelector('#des');

let sizes = []; // will store all the sizes

const stock = document.querySelector('#stock');
const tags = document.querySelector('#tags');
const tac = document.querySelector('#tac');

// buttons
const addProductBtn = document.querySelector('#add-btn');
const saveDraft = document.querySelector('#save-btn');

// store size function
const storeSizes = () => {
	sizes = [];
	let sizeCheckBox = document.querySelectorAll('.size-checkbox');
	sizeCheckBox.forEach(item => {
		if(item.checked){
			sizes.push(item.value);
		}
	})
}

const validateForm = () => {
	if(!productName.value.length){
		return showAlert('enter product name');
	} else if(shortLine.value.length > 100 || shortLine.value.length < 10){
		return showAlert('short line must be between 10 to 100 letters long');	
	} else if(!des.value.length){
		return showAlert('enter detail description about the product');
	} else if(!imagePaths.length){ // image link array
		return showAlert('upload atleast one product image');
	} else if(!sizes.length){ // size array
		return showAlert('select at least one size');
	} else if(!actualPrice.value.length || !discount.value.length || !sellingPrice.value.length){
		return showAlert('you must add pricing');
	} else if(stock.value < 20){
		return showAlert('you should have at least 20 items in stock');
	} else if(!tags.value.length){
		return showAlert('enter few tags to help ranking your product in search');
	} else if(!tac.checked){
		return showAlert('you must agree to our terms and conditions');
	}
	return true;
}

const productData = () => {
	let tagArr = tags.value.split(',');
	tagArr.forEach((item, i) => tagArr[i] = tagArr[i].trim());
	return data = {
		name: productName.value,
		shortDes: shortLine.value,
		des: des.value,
		images: imagePaths,
		sizes: sizes,
		actualPrice: actualPrice.value,
		discount: discountPercentage.value,
		sellPrice: sellingPrice.value,
		stock: stock.value,
		tags: tagArr,
		tac: tac.checked,
		email: user.email
	}
}


addProductBtn.addEventListener('click', () => {
	storeSizes();
	//console.log(sizes);
	//validate form
	if(validateForm()){ // validateForm return true or false while doing validation
		loader.style.display = 'block';
		let data = productData();
		if(productId){
			data.id = productId;
		}
		sendData('/add-product', data);
		//console.log(data);
	}
})

// save draft btn
saveDraft.addEventListener('click', () => {
	//alert('draft');
	//store sizes
	storeSizes();
	//check for product name
	if(!productName.value.length){
		showAlert('enter product name');
	} else{ // don't validate the data
		let data = productData();
		data.draft = true;
		if(productId){
			data.id = productId;
		}
		sendData('/add-product', data);
	}
})

//existing product detail handle

const setFormsData = (data) => {
	//console.log(data);
	productName.value = data.name;
	shortLine.value = data.shortDes;
	des.value = data.des;
	actualPrice.value = data.actualPrice;
	discountPercentage.value = data.discount;
	sellingPrice.value = data.sellPrice;
	stock.value = data.stock;
	tags.value = data.tags;
		
	// set up images
	imagePaths = data.images;
	imagePaths.forEach((url, i) => {
		let label = document.querySelector(`label[for=${uploadImages[i].id}]`);
		label.style.backgroundImage = `url(${url})`;
		let productImage = document.querySelector('.product-image');
		productImage.style.backgroundImage = `url(${url})`;
	})
	
	// setup sizes
	sizes = data.sizes;
	
	let sizeCheckbox = document.querySelectorAll('.size-checkbox');
	sizeCheckbox.forEach(item => {
		if(sizes.includes(item.value)){
			item.setAttribute('checked', '');
		}
	})
}

const fetchProductData = () => {
	// delete the tempProduct from the session
	//delete sessionStorage.tempProduct;
	fetch('/get-products', {
		method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({email: user.email, id: productId})
	})
	.then((res) => res.json())
	.then(data => {
		//console.log(data)
		setFormsData(data/*[0]*/);
	})
	.catch(err => {
		location.replace('/seller');
	})
 }
 
let productId = null;
//console.log(location.pathname);
if(location.pathname != '/add-product'){
	 productId = decodeURI(location.pathname.split('/').pop());
 
	//let productDetail = JSON.parse(sessionStorage.tempProduct || null);
	// fetch the data if product is not in session
	//if(productDetail == null){
		fetchProductData();
	//}
 }
 
