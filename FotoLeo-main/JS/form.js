function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlMobile = 'https://api.whatsapp.com/';  
const urlDesktop = 'https://web.whatsapp.com/';
const telefono = '525566133585';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let email = document.querySelector('#email').value
        let asunto = document.querySelector('#asunto').value
        let texto = document.querySelector('#texto').value
        let mensaje = 'send?phone=' + telefono + '&text= Formulario de Foto Leo %0A*¿Cual es su Nombre?*%0A' + nombre + '%0A*¿Cuál es su correo electronico?*%0A' + email + '%0A*¿Cuál es su Asunto?*%0A' + asunto + '%0A*¿Cuál es su Mensaje?*%0A' + texto + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
