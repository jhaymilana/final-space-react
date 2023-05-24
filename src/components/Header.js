import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const form = () => {
    navigate(`/form`);
  }

  const home = () => {
    navigate(`/`);
  }

  return (
    <header>
      <div className='container flexbox'>
        <h1>Final Space</h1>
        <div className='links'>
          <p onClick={ home }>Home </p>
          <p onClick={ form }>Add Character</p>
        </div>
      </div>
    </header>
  )
}

export default Header;