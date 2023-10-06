// @ts-nocheck
export var loader = function(show = false) {
  if (show) {
    setTimeout(function() {
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').addClass('show');
      }
    }, 1);
  } else {
    setTimeout(function() {
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  }
};
