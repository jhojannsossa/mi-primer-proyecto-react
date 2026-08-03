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
       
        src={imagenes[`../assets/img/${props.imagen}.jpg`]}
        
        alt={`Foto de ${props.nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
         
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
        
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
       
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;