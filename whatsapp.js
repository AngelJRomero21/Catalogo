const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '584168578289';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let modelo = document.querySelector('#modelo').value
        let descripcion = document.querySelector('#descripcion').value
        let precio = document.querySelector('#precio').value
        let message = 'send?phone=' + phone + '&text=Hola, vengo de la pagina web.%0A*CROM STUDIO*%0A' 'Quiero comprar:' + modelo + descripcion +  'por el precio de' + precio + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Comprar'
        buttonSubmit.disabled = false

    }, 4000);

});
