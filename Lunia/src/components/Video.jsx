import FooterImagen from '../components/FooterImagen';

const Video = ({ src, alt }) => {
    const videoId = src.split('/').pop().split('?')[0];
    return (
        <div className='video-container'>
          <FooterImagen text={alt} />
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoId}`} 
            title={alt} 
            allowFullScreen 
          ></iframe>
        </div>
    )
  };
  
    export default Video;  