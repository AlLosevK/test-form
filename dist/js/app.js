$(document).ready(function() {


  $('input[name="employment"]').click(function() {
     if($('#employment-hire').is(':checked')) {
       $('.form__row').removeClass('is-visible')
       $('.form__row-hire').addClass('is-visible')
     }
     if($('#employment-individual').is(':checked')) {
       $('.form__row').removeClass('is-visible')
       $('.form__row-individual').addClass('is-visible')
     }
     if($('#employment-director').is(':checked')) {
       $('.form__row').removeClass('is-visible')
       $('.form__row-director').addClass('is-visible')
     }
  });



});
