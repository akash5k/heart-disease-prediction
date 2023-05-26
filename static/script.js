$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  //opaque navbar after certain ht.
  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

//scroll button 
function scrollToForm() {
    var formElement = document.getElementById("form-fill");
    formElement.scrollIntoView({ behavior: "smooth" });
}

//carousel slide update
$('.carousel').carousel({
    interval: 5000      
  });


//Progressbar script
  const progressBar = document.getElementById('progress');
    const fieldsCount = 12; // Replace with the total number of fields in your form
    
    function updateProgress() {
      const filledFieldsCount = getFilledFieldsCount();
      const progress = (filledFieldsCount / fieldsCount) * 100;
      progressBar.style.width = progress + '%';
    }
    
    function getFilledFieldsCount() {
      let filledCount = 0;
      const fields = document.getElementsByTagName('input');
      for (let i = 0; i < fields.length; i++) {
        if (fields[i].value !== '') {
          filledCount++;
        }
      }
      return filledCount;
    }