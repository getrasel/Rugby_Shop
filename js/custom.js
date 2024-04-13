

// slider ======================= >>>

$('.banner_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay:false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    margin: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>', // Custom previous arrow
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>', // Custom next arrow
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 716,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });


  
$('.testimonial_slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay:true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

  //counter 

  let divcounter = document.querySelector(".counter");
  let seconds = 59;
  let minutes = 59;
  let hours = 23;
  let days = 364; // 365 days - 1, since the countdown starts from 0
  
  function count() {
    if (seconds > 0) {
      seconds -= 1;
    } else if (seconds === 0 && minutes > 0) {
      minutes -= 1;
      seconds = 59;
    } else if (minutes === 0 && seconds === 0 && hours > 0) {
      hours -= 1;
      minutes = 59;
      seconds = 59;
    } else if (hours === 0 && minutes === 0 && seconds === 0 && days > 0) {
      days -= 1;
      hours = 23;
      minutes = 59;
      seconds = 59;
    }
  
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      clearInterval(counter);
    }
  
    divcounter.innerHTML = `<p><span>${days}</span> Days</p><p><span>${hours}</span> Hours</p><p><span>${minutes}</span> Mins</p><p><span>${seconds}</span> Secs</p>`;
  }
  
  let counter = setInterval(count, 1000);
  



  // Sticky

window.addEventListener('scroll', function() {
  var menu = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    menu.classList.add('sticky');
    menu.classList.remove('stickyout');
  }else{
    menu.classList.remove('sticky');
    menu.classList.add('stickyout');
  }
});


// // Preloader 

$(window).on('load', function() {
  var preloader = $('.circles-preloader');
  setTimeout(function() {
    preloader.fadeOut(500); // Adjust the fadeOut duration (in milliseconds) as needed
  }, 1500); // Adjust the delay (in milliseconds) as needed
});


// // // ScrollTop

$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
          $('.scrolltop').fadeIn();
          $('.scrolltop').addClass('show');
      } else {
          $('.scrolltop').fadeOut();
          $('.scrolltop').removeClass('show');
      }
  });

  $('.scrolltop').click(function() {
      $('html, body').animate({ scrollTop: 0 });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const tooltips = document.querySelectorAll('.product_img ul button');
  tooltips.forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
          boundary: document.body // or document.querySelector('#boundary')
      });
  });
});



// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});


// filter sidebar

$('button.filter').on('click', function() {
	$(".shop_area").toggleClass('sidebar_collapse');
	$(this).toggleClass('bgcolor');
});

//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 50,
	  max: 500,
	  values: [ 50, 250 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});



// cart quantity =============

function incrementButton(button) {
  var inputField = button.parentElement.parentElement.querySelector('input[name="IncDcr"]');
  var value = parseInt(inputField.value);
  
  value = isNaN(value) ? 1 : value;
  value++;
  
  inputField.value = value;
  updateCartQty(inputField, value);
}

function decrementButton(button) {
  var inputField = button.parentElement.parentElement.querySelector('input[name="IncDcr"]');
  var value = parseInt(inputField.value);
  
  value = isNaN(value) ? 1 : value;
  value = value > 1 ? value - 1 : 1;
  
  inputField.value = value;
  updateCartQty(inputField, value);
}

function updateCartQty(inputField, value) {
  var cardQty = inputField.parentElement.nextElementSibling.querySelector(".cart-qty");
  cardQty.innerHTML = value;
  cardQty.classList.add("rotate-x");
}



// cart delete item

$(document).ready(function() {
  $(".delate_cart").click(function() {
    $(this).closest(".cart_details ul").hide(250, function() {
      $(this).remove();
    });
  });
});