import FooterImagen from '../components/FooterImagen';

const Imagen = ({ src, alt }) => {
  return (
    <>
    
      <div className='imagen-container'>
        <FooterImagen text={alt} />
        <img src={src} alt={alt} className='imagen-galeria' />


      </div>
      
    </>
  );
};

export default Imagen;  