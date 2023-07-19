document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;

    // Aquí puedes hacer lo que necesites con los datos, como enviarlos a un servidor o mostrarlos en la consola
    console.log('Nombre:', nameInput);
    console.log('Email:', emailInput);
    console.log('Teléfono:', phoneInput);

    // Limpia el formulario después de obtener los datos
    document.getElementById('contactForm').reset();
});
