$(document).ready(function(){

  $('#my-form').submit(function(event){
    event.preventDefault();

    console.log( $SA( $('#my-form') ) );
  });

});