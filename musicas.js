var container = document.querySelector('.container');
var cards = document.querySelectorAll('.card');

container.addEventListener('scroll', function() {
  var containerCenter = container.getBoundingClientRect().left + window.innerWidth / 2;
  
  cards.forEach(function(card) {
    var cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
    
    if (Math.abs(containerCenter - cardCenter) <= window.innerWidth / 4) {
      card.style.transform = 'scale(1.1)';
    } else {
      card.style.transform = 'scale(1)';
    }
  });
});
