// HAMBURGER MENU


$(document).ready(function () {

  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

});




// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    }
    else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });
}


//SLIDE HEADER




var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//SLIDE HEADER END




var swiper = new Swiper('.swiper-container2', {

  slidesPerView: 5,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

/*

$(function()
{

  $(".card").hover(a,b);

  function a()
  {
  }

  function b()
  {
  }
  
});*/

/******************NUMBER COUNTER************************ */


(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});






// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



// FORM

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


function error(input, message) {
    input.className = 'form-control is-invalid';
  const div = input.nextElementSibling;
   div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}




function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Yanlış email ünvanı');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });  
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `Adınız ən az 12 xarakter olmalıdır`);
    }else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
    }else {
        success(input);
    }
}


function checkPhone(input) {
    var exp = /^\d{10}$/;   
    if(!exp.test(input.value)) 
        error(input, 'Nömrə ən azı 10 simvoldan ibarət olmalıdır.');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkPhone(phone);
});





/*******************ANİMATİON GSAP**************** */

/*********SLide**************/


let work1;

 work1 = gsap.timeline({


  scrollTrigger:
  {
    trigger: 'header',
    start: "top center"
  }

})

work1.from(".slide-gsap-title", { x: -200, duration: 3 });


let work2;

 work2 = gsap.timeline({


  scrollTrigger:
  {
    trigger: 'header',
    start: "top center"
  }

})

work2.from(".slide-gsap-text", { x: 200, duration: 3 });



let work3;

 work3 = gsap.timeline({


  scrollTrigger:
  {
    trigger: 'header',
    start: "top center"
  }

})

work3.from(".btn-all", { y: 200, duration: 3 });

/*****************Section1******************** */



let work4;

 work4 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section1',
    start: "top center"
  }

})

work4.from(".left-caption", { x: -200, duration: 3 });

//Right img

let work5;

 work5 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section1',
    start: "top center"
  }

})

work5.from(".support-location-img", { y: 200, duration: 3 });


/*****************Section2******************** */



let work6;

 work6 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section2',
    start: "top center"
  }

})

work6.from(".gsap-section2", { y: 200, duration: 3 });






/*****************Section3******************** */



let work7;

 work7 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section3',
    start: "top center"
  }

})

work7.from(".gsap-content", { x: -200, duration: 3 });


//right img


let work8;

 work8 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section3',
    start: "top center"
  }

})

work8.from(".gsap-post-img", { y: 200, duration: 3 });

//ACCORDION

let work9;

 work9 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section3',
    start: "top center"
  }

})

work9.from(".accordion", { x: 200, duration: 3 });



/*****************Section4******************** */


let work10;

 work10 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section4',
    start: "top center"
  }

})

work10.from(".gsap-title-section4", { y: 200, duration: 3 });

//right img


let work11;

 work11 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section4',
    start: "top center"
  }

})

work11.from(".icon2", { x: 200, duration: 3 });



/*****************Section6******************** */


let work12;

 work12 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section6',
    start: "top center"
  }

})

work12.from(".gsap-section6-title", { x: -200, duration: 3 });


//portfolia

let work13;

 work13 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section6',
    start: "top center"
  }

})

work13.from(".cards-container", { y: 200, duration: 3 });


/*****************Section ORDER******************** */



let work14;

 work14 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.sectionorder-section',
    start: "top center"
  }

})

work14.from(".gsap-order-title", {x: -200, duration: 3 });


//MALE toch phone img

let work15;

 work15 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.sectionorder-section',
    start: "top center"
  }

})

work15.from(".male-phone", {x: -200, duration: 3 });


//FORM


let work16;

 work16 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.sectionorder-section',
    start: "top center"
  }

})

work16.from(".call-form", {y: 200, duration: 3 });





/*****************Section8******************** */


let work17;

 work17 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section8',
    start: "top center"
  }

})

work17.from(".gsap-section8-content", {x: -200, duration: 3 });


//teams

let work18;

 work18 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section8',
    start: "top center"
  }

})

work18.from(".teams-container", {x: -200, duration: 3 });


/*****************Section9******************** */

let work19;

 work19 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section9',
    start: "top center"
  }

})
work19.from(".gsap-section9-content", {x: -200, duration: 3 });
//form left




let work20;

 work20 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section9',
    start: "top center"
  }

})

work20.from(".gsap-form-content", {y: -200, duration: 3 });


//right form



let work21;

 work21 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section9',
    start: "top center"
  }

})

work21.from(".card-right", {x: 200, duration: 3 });




/****************GO TO BUTTON******************* */

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  //$("#topBtn").click(function(){
   // $('html ,body').animate({scrollTop : 0},800);
  //});
});
