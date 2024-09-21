function calcularVelocidadInicial() {
    const v = parseFloat(document.getElementById('velocidadFinal').value);
    const a = parseFloat(document.getElementById('aceleracion').value);
    const t = parseFloat(document.getElementById('tiempo').value);
    
    if (!isNaN(v) && !isNaN(a) && !isNaN(t)) {
        const v0 = v - (a * t);
        document.getElementById('resultadoVelocidadInicial').textContent = `Velocidad Inicial: ${v0} m/s`;
    } else {
        document.getElementById('resultadoVelocidadInicial').textContent = 'Por favor, ingrese valores válidos.';
    }
}

function calcularVelocidadFinal() {
    const v0 = parseFloat(document.getElementById('velocidadInicial').value);
    const a = parseFloat(document.getElementById('aceleracion2').value);
    const t = parseFloat(document.getElementById('tiempo2').value);
    
    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const v = v0 + (a * t);
        document.getElementById('resultadoVelocidadFinal').textContent = `Velocidad Final: ${v} m/s`;
    } else {
        document.getElementById('resultadoVelocidadFinal').textContent = 'Por favor, ingrese valores válidos.';
    }
}
