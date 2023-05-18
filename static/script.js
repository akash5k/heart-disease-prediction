$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

function scrollToForm() {
    var formElement = document.getElementById("form-fill");
    formElement.scrollIntoView({ behavior: "smooth" });
}