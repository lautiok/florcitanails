// Código para el menú de navegación
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});

const formulario = document.getElementById('reservationForm');
const mensajeExito = document.getElementById('mensajeExito');
const mensajeError = document.getElementById('mensajeError');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fecha = formulario.date.value;
    const hora = formulario.time.value;

    try {
        // Verificar si el turno ya existe
        const verificarResponse = await fetch("http://localhost:3000/verificar-turno", {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ fecha, hora })
        });

        if (verificarResponse.ok) {
            // No hay conflicto, enviar la reserva
            const response = await fetch("https://sheet.best/api/sheets/3b9c7881-cb13-4a21-941f-71deb1e1a26e", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify({
                    "Nombre": formulario.name.value,
                    "Teléfono": formulario.phone.value,
                    "fecha": fecha,
                    "hora": hora,
                    "servicio": formulario.service.value,
                })
            });

            if (response.ok) {
                mostrarMensajeExito();
            } else {
                mostrarMensajeError("Hubo un error al realizar la reserva. Por favor, contáctanos para más información.");
            }
        } else {
            // Turno ya existe, mostrar mensaje de error
            const verificarData = await verificarResponse.json();
            mostrarMensajeError(verificarData.error);
        }
    } catch (error) {
        mostrarMensajeError("Error en la conexión. Por favor, verifica tu conexión a internet o contáctanos para más información.");
    }
});

function mostrarMensajeExito() {
    mensajeExito.style.display = "flex";
    mensajeExito.style.justifyContent = "center";
    mensajeExito.style.alignItems = "center";
}

function mostrarMensajeError(mensaje) {
    mensajeError.style.display = "flex";
    mensajeError.style.justifyContent = "center";
    mensajeError.style.alignItems = "center";
    mensajeError.textContent = mensaje;
}
