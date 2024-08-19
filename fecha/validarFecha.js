document.getElementById('fechaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fechaInput = document.getElementById('fecha').value;
    const mensajeError = document.getElementById('mensajeError');
  
    if (!fechaInput) {
      mensajeError.textContent = "Por favor, ingrese una fecha válida.";
      return;
    }
  
    const fechaCorrecta = new Date('2023-08-02');
    const fechaIngresada = new Date(fechaInput);
  
    if (fechaIngresada.getTime() === fechaCorrecta.getTime()) {
      mensajeError.textContent = "";
      window.location.href = "../entrada/entrada.html";
    } else {
      mensajeError.textContent = "La fecha ingresada es incorrecta.";
    }
  });
