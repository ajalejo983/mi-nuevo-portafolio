//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.contacto__formulario');

    formulario.addEventListener('submit', function (event) {
        let isValid = true;
        const campos = formulario.querySelectorAll('.contacto__campo');
        
        campos.forEach(campo => {
            const errorMensaje = document.createElement('span');
            errorMensaje.classList.add('error-mensaje');

            // Elimina mensajes de error previos
            if (campo.nextElementSibling && campo.nextElementSibling.classList.contains('error-mensaje')) {
                campo.nextElementSibling.remove();
            }

            if (!campo.checkValidity()) {
                isValid = false;
                // Muestra el mensaje del atributo 'title' como mensaje de error
                errorMensaje.textContent = campo.title || campo.validationMessage;
                campo.after(errorMensaje);
            }
        });

        if (!isValid) {
            event.preventDefault(); // Evita el envío del formulario si hay errores
        }
    });
});


//Mostrar menú hamburguesa

document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const navegacion = document.querySelector('.navegacion');

    menuHamburguesa.addEventListener('click', function () {
        navegacion.classList.toggle('navegacion--visible');
    });
});


