var btn = document.querySelector('.burger-btn');
var mask = document.querySelector('.page-header__mask');
var wrap = document.querySelector('.page-header__wrap');

btn.addEventListener('click', function(){
  mask.classList.toggle('is-active');
  wrap.classList.toggle('is-active');
});

$('.main').flickity({

  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: true
});

$('.features__list').flickity({

  cellAlign: 'left',
  contain: true,
  prevNextButtons: false
});

$('.team__list').flickity({

  cellAlign: 'left',
  contain: true,
  prevNextButtons: false
});






// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid__item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('.filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.filters').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.filters__btn--active').removeClass('filters__btn--active');
    $( this ).addClass('filters__btn--active');
  });
});
