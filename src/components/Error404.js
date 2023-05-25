import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Error404() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  }

  return (
    <div className='error-page'>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <div className='flex'>
        <div className='error-msg'>
          <h2>Ooops!</h2>
          <p>Error 404: Page not Found</p>
          <button onClick={ handleClick }>Back to Home</button>
        </div>
        <div className='error-image'>
          <figure>
            <img src='https://rare-gallery.com/thumbnail/76827-Gary-Goodspeed-Hand-Blonde-ManFinal-Space-HD-Wallpaper.jpg' alt='Error404' />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Error404