import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const { data } = await axios.get('https://finalspaceapi.com/api/v0/character');
        const list = data.splice(0, 30);
        setCharacters(list);
      } catch(error) {
        console.log(error)
      }
    };
    
    getCharacters();
  }, []);

  useEffect(() => {
    console.log(characters);
  })

  const navigate = useNavigate();
  const handleClick = (character) => {
    navigate(`/info/${ character.target.id }`);
  }

  return (
    <section>
      <h2>Characters:</h2>
      <div className='grid'>
        {characters.map(character => (
          <div key={ character.id } className='characters'>
            <h2>{ character.name }</h2>
            <figure>
              <img 
                src={ character.img_url } 
                alt={ character.name }
                id={ character.id }
                onClick={ handleClick }
              />
            </figure>
            <div className='details'>
              <p>{ character.species }</p>
              <p>{ character.gender }</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Characters;