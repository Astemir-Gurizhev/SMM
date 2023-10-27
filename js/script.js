new Swiper ('.swiper',{
	pagination: {
		el: '.slider-pagination',
		clickable: true,
	},
	slidesPerView: 1,
	watchOverflow: true,
	initialSlide: 0,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},
   effect: 'fade',
   fadeEffect: {
      crossFade: true,
   },
});

document.querySelector('.header-navigation__burger').onclick = function() {
	document.querySelector('.header-navigation__menu').classList.toggle('header-navigation__menu-active')
	document.querySelector('.header-navigation__burger').classList.toggle('active')
	$('body').toggleClass('lock')
}

//VK.Widgets.Group("vk_groups", {mode: 3, width: "290", height: "200"}, 157561331);

// Отправка данных на сервер
function send(event, php){
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); 
			 console.log(json);
			 if (json.result == "success") {
				 alert("Сообщение отправлено");
			 } else {
				 alert("Ошибка. Сообщение не отправлено");
			 }
		 } else {alert("Ошибка сервера. Номер: "+req.status);}
	}; 
	
	req.onerror = function() {alert("Ошибка отправки запроса");};
	req.send(new FormData(event.target));
}

/* Form Validation */

const inputEmail = document.querySelector(".input-email");
const inputPhone = document.querySelector(".input-phone");
const btn = document.querySelector('.form__btn');
const form = document.querySelector('.form');

btn.addEventListener("click", formSend);

function formSend(event) {
	//Border или Color по умолчанию, если введено правильно 
	if (phoneTest(inputPhone)) {
		inputPhone.style.border = "1px solid #d9d9de"
	}
	if (emailTest(inputEmail)) {
		inputEmail.style.border = "1px solid #d9d9de"
	}
	//Валидация
	if (phoneTest(inputPhone) && emailTest(inputEmail) && !(inputEmail.value === '') && !(inputPhone.value === '')) {}
	if (!phoneTest(inputPhone) || (inputPhone.value === '')) {
		inputPhone.style.border = "1px solid #DF2030"
		event.preventDefault()
	}
	if (!emailTest(inputEmail) || (inputEmail.value === '')) {
		inputEmail.style.border = "1px solid #DF2030"
		event.preventDefault()
	}
}

function phoneTest(input) {
	return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
}

function emailTest(input) {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value)
}