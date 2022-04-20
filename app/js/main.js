$(function () {
  
  $('.related-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left-gray.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right-gray.svg"></button>',
  });


  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-one__num').styler();

  $('.product-slide__thumb').slick({
  asNavFor: '.product-slide__big',
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  draggable: false
});

$('.product-slide__big').slick({
  asNavFor: '.product-slide__thumb',
  draggable: false,
  arrows: false,
  fade: true
});

  $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.button-list').on('click', function () {
  $('.products-week__item').addClass('products-week__item--list');
  });

  $('.button-grid').on('click', function () {
  $('.products-week__item').removeClass('products-week__item--list'); 
  });

  $('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: "$",
  onStart: function (data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  },
  onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
        },
});


  $('.top-slider__inner').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});


  var mixer1 = mixitup('.products-week__items');
  var mixer2 = mixitup('.new-design__items');

});