import erica from '../assets/img/erica.jpg';
import jhojann from '../assets/img/jhojann.jpg';
import jonathan from '../assets/img/jonathan.jpg';
import '../styles/Testimonio.css';

const imagenes = import.meta.glob('../assets/img/*.jpg', {
  eager: true,
  import: 'default'
});
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
       /* src={emma}*/
        src={imagenes[`../assets/img/${props.imagen}.jpg`]}
        /*alt='foto de emma'*/ 
        alt={`Foto de ${props.nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          /*Emma Bostian*/
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
        /*Ingeniera de Software en Spotify*/
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
        /*Lorem Ipsum*/
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;