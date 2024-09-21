function calcularDistancia() {
    const v = parseFloat(document.getElementById('velocidad').value);
    const t = parseFloat(document.getElementById('tiempo').value);
    if (!isNaN(v) && !isNaN(t)) {
        const d = v * t;
        document.getElementById('resultadoDistancia').textContent = `Distancia: ${d} m`;
    } else {
        document.getElementById('resultadoDistancia').textContent = 'Por favor, ingrese valores válidos.';
    }
}

function calcularVelocidad() {
    const d = parseFloat(document.getElementById('distancia').value);
    const t = parseFloat(document.getElementById('tiempo2').value);
    if (!isNaN(d) && !isNaN(t) && t !== 0) {
        const v = d / t;
        document.getElementById('resultadoVelocidad').textContent = `Velocidad: ${v} m/s`;
    } else {
        document.getElementById('resultadoVelocidad').textContent = 'Por favor, ingrese valores válidos y asegúrese de que el tiempo no sea cero.';
    }
}

function calcularTiempo() {
    const d = parseFloat(document.getElementById('distancia2').value);
    const v = parseFloat(document.getElementById('velocidad2').value);
    if (!isNaN(d) && !isNaN(v) && v !== 0) {
        const t = d / v;
        document.getElementById('resultadoTiempo').textContent = `Tiempo: ${t} s`;
    } else {
        document.getElementById('resultadoTiempo').textContent = 'Por favor, ingrese valores válidos y asegúrese de que la velocidad no sea cero.';
    }
}
