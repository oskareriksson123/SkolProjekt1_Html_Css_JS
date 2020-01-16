$(document).ready(function(){
    $('#kontaktForm').fadeOut(0);
    $('#kontaktForm').slideDown(800);
    getSparadForm();
    formValidate();
    
});

$(window).unload(function(){
    sparaData();
})

$(document).on('keyup keydown',function(){

    formValidate();  
  });

$('#submit').on('click', function(){
    skickat();
});


function formValidate(){
    
    var validNamn = false;
    var validEmail = false;
    var validTel = false;
    var validMeddelande = false;

    if(/^[a-zA-Z]{3,}\s[a-zA-Z]{2,}$/.test($('#namn').val())){
        validNamn = true;
        $('#spanNamn').addClass('hideForm')
        $('#namn').addClass('valid');
        }

    if (!/^[a-zA-Z]{3,}\s[a-zA-Z]{2,}$/.test($('#namn').val())){
        validNamn = false;
        $('#spanNamn').removeClass('hideForm');
        $('#namn').removeClass('valid');
        }
        
    if(/^[^@]+@[^@]+.[^@]{2,3}/.test($('#email').val())){
        $('#spanEmail').addClass('hideForm');
        $('#email').addClass('valid');
        validEmail = true;
        }

    if (!/^[^@]+@[^@]+.[^@]{2,3}/.test($('#email').val())){
        $('#spanEmail').removeClass('hideForm');
        $('#email').removeClass('valid');
        validEmail = false;   
        }

    if (/(\+?46|0)7\d{8}$/.test($('#tel').val())){
        $('#spanTel').addClass('hideForm');
        $('#tel').addClass('valid');
        validTel = true;   
        } 

    if (!/^(\+?46|0)7\d{8}$/.test($('#tel').val())){
        $('#spanTel').removeClass('hideForm');
        $('#tel').removeClass('valid');
        validTel = false;   
        } 

    if (/^\w/.test(($('#meddelande').val()))){
        $('#spanMeddelande').addClass('hideForm');
        $('#meddelande').addClass('valid');
        validMeddelande = true;
        }

    if (!/^\S+/.test(($('#meddelande').val()))){
        $('#spanMeddelande').removeClass('hideForm');
        $('#meddelande').removeClass('valid');
        validMeddelande = false;
        }

    if (validNamn && validEmail && validTel && validMeddelande){
        $('#submit').removeClass('disabled');
        }

    if (!validNamn || !validEmail ||!validTel ||!validMeddelande){
        $('#submit').addClass('disabled');
    }
    $('#skickat').addClass('hideForm');
}


function sparaData(){
    var namnSpara = $('#namn').val();
    var emailSpara = $('#email').val();
    var telSpara = $('#tel').val();
    var meddelandeSpara = $('#meddelande').val();

    const form = {
        namn: namnSpara,
        email: emailSpara,
        tel: telSpara,
        meddelande: meddelandeSpara,
    }
    
    window.localStorage.setItem('formSpara', JSON.stringify(form));
}

function getSparadForm(){
    var formSparad = JSON.parse(window.localStorage.getItem('formSpara'));
    
    $('#namn').val(formSparad.namn);
    $('#email').val(formSparad.email);
    $('#tel').val(formSparad.tel);
    $('#meddelande').val(formSparad.meddelande);
}

function skickat(){
    $('#skickat').removeClass('hideForm');
    $('#namn').val('');
    $('#email').val('');
    $('#tel').val('');
    $('#meddelande').val('');
}
