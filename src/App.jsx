import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <>
      <Header />
      <h1>Mi primera app en React</h1>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio
          nombre='Erica Sossa'
          pais='Bolivia'
          imagen='erica'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript y ahora me permito entender y orientar a mis compañeros de trabajo logrando un avance impresionanate y desarrollo profesional, y mi propio enfoque personal de crecimiento'
        />
        <Testimonio
          nombre='jhojann'
          pais='Paraguay'
          imagen='jhojann'
          cargo='Ingeniera de Software Amazon'
          empresa='Amazon'
          testimonio='ha logrado consolidar mi conocimiento con mucha solides por medio del ButCam, Caritas ahora estoy desarrollando nuevas experiencias en desarrollo y esto me ha rebolucionado la cabeza en nuevos objetivos, metas, desarrollo que he superado mis espectativas propias todo con la gracia y favor de Dios que me han puesto en este camino y me siento muy bendecido y victorioso'
        />
        <Testimonio
          nombre='Jonathan'
          pais='España'
          imagen='jonathan'
          cargo='Ingeniera de Software Facebook'
          empresa='Facebook'
          testimonio='he empezado a desarrollar de manera muy principiente, pero he desarrollado habilidades que han mejorado mi competitividad extraordinariamente permitiendome avanzar en focalizar mis propios objetivos personales y de trabajo, a la fecha he conquistado muchos espacios de formacion y trabajo con estos conocientos adquiridos en el ButCam'
        />
      </div>
      <Footer />
    </>
  );
}

export default App;