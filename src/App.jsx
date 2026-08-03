import Footer from "./components/Footer";
import Header from "./components/Header";
import Saludo from "./components/Saludo";
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
          testimonio='Siempre he tenido problemas para aprender JavaScript...'
        />
        <Testimonio
          nombre='jhojann'
          pais='Paraguay'
          imagen='jhojann'
          cargo='Ingeniera de Software Amazon'
          empresa='Amazon'
          testimonio='ha logrado consolidar mi conocimiento...'
        />
        <Testimonio
          nombre='Jonathan'
          pais='España'
          imagen='jonathan'
          cargo='Ingeniera de Software Facebook'
          empresa='Facebook'
          testimonio='he empezado a desarrollar de manera muy principiente...'
        />
      </div>
      <Saludo />
      <Footer />
    </>
  );
}

export default App;