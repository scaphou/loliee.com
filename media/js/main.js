$(document).ready(function() {
  var msize = '';

  if (Modernizr.mq('only screen and (max-width: 640px)')) {
    msize = 'small';
  }
  else if (Modernizr.mq('only screen and (max-width: 1024px)')) {
  	msize = 'medium';
  }
  if (Modernizr.mq('only screen and (min-width: 1025px)')) {
  	msize = 'big';
  }
  
  
  $('body').addClass(msize);
});