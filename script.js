//alert("Hola este es mi Javascript");
function enviarformulario(){
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
        alert("todos los campos son abligatorios");
        return;

    }
    console.log("nombre", nombre);
    console.log("correo",correo);
    console.log("mensaje",mensaje);

    document.getElementById("formulario").reset();
}