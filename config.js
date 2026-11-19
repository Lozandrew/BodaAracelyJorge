const CONFIG = {
  textos: {
    tituloPagina: "Aracely & Jorge | Encuentra tu Mesa",
    titulo: "Aracely & Jorge",
    instrucciones: "Ingresa tu nombre y apellido para conocer tu mesa: ",
    placeholder: "Ej. Aracely",
    botonBuscar: "Buscar Mesa",
    botonRegresar: "Buscar nuevo invitado",
    bienvenida: "¡Gracias por acompañarnos!",
    bienvenidaMesa: "¡Disfruta la fiesta!",
    bienvenidaAnfitriona: "¡Hoy es su noche!",
    alertaVacio: "Por favor, escribe un nombre",
    errorNombre: "No encontramos ese nombre exacto en la lista 😢",
    errorHint: "Por favor, verifica la ortografía.",
    mensajeMesa: '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong>',
    mensajeAnfitriona: '¡Hola {nombre}!<br>¡Felicidades por su boda!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeAnfitrionaNumero: '¡Hola {nombre}!<br>¡Felicidades por su boda!<br>Tu lugar es la: <strong>Mesa {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeNinos: '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
    extraAnfitriona: '✨ ¡Disfruten al máximo su fiesta! ✨',
    avisoNinos: 'Pregunta por el servicio de niñeras',
  },
  especiales: {
    anfitriones: ["Aracely", "Jorge"],
    mesasNinos: ["ninos", "niños"],
  },
  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6ac55961ac6210605a1a5c86/latest",
  },
  tema: {
    colores: {
      primario: "#6B6B3A",
      acento: "#D4A017",
      instrucciones: "#C8622D",
      fondo: "#F7F5EE",
      tarjeta: "rgba(255, 255, 255, 0.85)",
      bordeTarjeta: "rgba(155, 155, 74, 0.15)",
      texto: "#3D3D1A",
      borde: "#E2DFD0",
      inputFondo: "#FFFFFF",
      separador: "#EEEBE0",
      sugerenciasHover: "rgba(155, 155, 74, 0.15)",
      error: "#C94C6E",
      errorHint: "#C8622D",
      aviso: "#6B2D5B",
    },
    fuentes: {
      titulo: { nombre: "Cinzel", pesos: "400;500" },
      texto: { nombre: "Inter", pesos: "300;400;600" },
    },
    imagenes: {
      fondo: "imagenes/fondo-app.jpg",
      croquis: "imagenes/croquis-{mesa}.jpg",
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
    fondos: {
      landing: "url('imagenes/fondo-app.jpg') center/cover no-repeat fixed",
      mesas: "url('imagenes/fondo-app.jpg') center/cover no-repeat fixed",
      album: "url('imagenes/fondo-app.jpg') center/cover no-repeat fixed"
    }
  },
  album: {
    habilitado: true,
    titulo: "Álbum de Aracely & Jorge",
    instrucciones: "Comparte los momentos de esta noche especial (Fotos y videos de máx. 15s)",
    placeholderNombre: "Tu nombre (opcional)",
    textoSubir: "Subir",
    textoVacio: "¡Sé el primero en subir un recuerdo!",
    cloudinary: {
      cloudName: "isclyhb1",
      uploadPreset: "Album_Aracely_y_Jorge"
    },
    firebase: {
      apiKey: "AIzaSyDmHRoWp97Mfh-au309VPHk8TVqg5FHC4Q",
      authDomain: "aracelyjorge-f464b.firebaseapp.com",
      databaseURL: "https://aracelyjorge-f464b-default-rtdb.firebaseio.com",
      projectId: "aracelyjorge-f464b",
      storageBucket: "aracelyjorge-f464b.firebasestorage.app",
      messagingSenderId: "422870621064",
      appId: "1:422870621064:web:f9d9a1eecbae4cca68783d",
      measurementId: "G-9N2Z5ZBYHX"
    }
  }
};