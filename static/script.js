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

    //a sweetAlert toast to show success status
    function success_toast (){
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Details filled automatically.'
          })
    }


    document.getElementById('fill-disease-data').addEventListener('click', function() {
        document.getElementById('age').value = '56';
        document.getElementById('sex').value = '1';
        document.getElementById('cp').value = '2';
        document.getElementById('trestbps').value = '130';
        document.getElementById('chol').value = '256';
        document.getElementById('fbs').value = '1';
        document.getElementById('restecg').value = '0';
        document.getElementById('thalach').value = '142';
        document.getElementById('exang').value = '1';
        document.getElementById('Oldpeak').value = '0.6';
        document.getElementById('Slope').value = '1';
        document.getElementById('Ca').value = '1';
        document.getElementById('Thal').value = '1';
        
        success_toast();
      });

    document.getElementById('fill-healthy-data').addEventListener('click', function() {
        document.getElementById('age').value = '57';
        document.getElementById('sex').value = '1';
        document.getElementById('cp').value = '0';
        document.getElementById('trestbps').value = '150';
        document.getElementById('chol').value = '276';
        document.getElementById('fbs').value = '0';
        document.getElementById('restecg').value = '0';
        document.getElementById('thalach').value = '112';
        document.getElementById('exang').value = '1';
        document.getElementById('Oldpeak').value = '0.6';
        document.getElementById('Slope').value = '1';
        document.getElementById('Ca').value = '1';
        document.getElementById('Thal').value = '1';

        success_toast();
      });

      