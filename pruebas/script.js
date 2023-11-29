function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar si los campos están vacíos
    if (!nombre || !email || !mensaje) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // Realizar acciones con los datos (puedes enviarlos a un servidor aquí)
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    // Opcional: Resetear el formulario
    document.getElementById("formulario").reset();
}
