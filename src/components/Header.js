import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const form = () => {
    navigate(`/form`);
  }

  return (
    <header>
      <div className='container flexbox'>
        <h1>Final Space</h1>
        <p onClick={ form }>Add Character</p>
      </div>
    </header>
  )
}

export default Header;