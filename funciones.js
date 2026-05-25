// funciones.js

// 1. DICCIONARIO DE EXPEDIENTES SIMULADOS (Datos de prueba)
const alumnosBaseDatos = {
  "325869": {
    nombre: "Diego Armando Valle Gómez",
    expediente: "325869",
    carrera: "Ingeniería de Software",
    semestre: "6to Semestre",
    equipo: "Aston Birria",
    goles: 12,
    asistencias: 5,
    partidosJugados: 9
  },
  "325737": {
    nombre: "Rogelio Franco Sanchez",
    expediente: "325737",
    carrera: "Ingeniería de Software",
    semestre: "7to Semestre",
    equipo: "Al-Hospythal",
    goles: 0,
    asistencias: 0,
    partidosJugados: 2
  },
  "325777": {
    nombre: "Elias David Camacho Durán",
    expediente: "325777",
    carrera: "Ingeniería de Software",
    semestre: "5to Semestre",
    equipo: "Aston Birria",
    goles: 6,
    asistencias: 2,
    partidosJugados: 9
  }
};

// 2. LÓGICA PARA LA PÁGINA DE INICIO DE SESIÓN (login.html)
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    // Evitamos que el formulario recargue la página de forma nativa
    event.preventDefault();

    const expedienteIngresado = document.getElementById('expediente').value.trim();

    // Verificamos si el expediente existe en nuestro diccionario
    if (alumnosBaseDatos[expedienteIngresado]) {
      // Guardamos el objeto del alumno en localStorage convertido a texto JSON
      localStorage.setItem('usuarioLogueado', JSON.stringify(alumnosBaseDatos[expedienteIngresado]));

      // Redirigimos a la pantalla de perfil
      window.location.href = 'perfil.html';
    } else {
      // Feedback visual simple por si el expediente no coincide
      alert('El expediente ingresado no está registrado en el Sport Fest.');
    }
  });
}

// 3. LÓGICA PARA LA PÁGINA DE PERFIL (perfil.html)
// Este bloque se ejecuta automáticamente si encuentra los contenedores de texto del perfil
document.addEventListener('DOMContentLoaded', function () {
  const perfilContainer = document.getElementById('perfil-nombre');

  // Si estamos en la página de perfil, intentamos leer el localStorage
  if (perfilContainer) {
    const datosUsuarioTexto = localStorage.getItem('usuarioLogueado');

    if (datosUsuarioTexto) {
      // Convertimos el texto JSON de vuelta a un objeto JavaScript
      const usuario = JSON.parse(datosUsuarioTexto);

      // Inyectamos los datos dinámicamente en el HTML
      document.getElementById('perfil-nombre').textContent = usuario.nombre;
      document.getElementById('perfil-expediente').textContent = `Exp. ${usuario.expediente}`;
      document.getElementById('perfil-detalles').textContent = `${usuario.carrera} • ${usuario.semestre}`;
      document.getElementById('perfil-equipo').textContent = usuario.equipo;
      document.getElementById('perfil-goles').textContent = usuario.goles;
      document.getElementById('perfil-asistencias').textContent = usuario.asistencias;
      document.getElementById('perfil-pj').textContent = usuario.partidosJugados;
    } else {
      // Si alguien intenta entrar a perfil.html sin haber iniciado sesión, lo mandamos al login
      window.location.href = 'login.html';
    }
  }
});

// Función opcional para cerrar sesión (la puedes usar en un botón si quieres)
function cerrarSesion() {
  localStorage.removeItem('usuarioLogueado');
  window.location.href = 'login.html';
}