import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Catalog() {
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

  const sortCharacters = () => {
    const sortedArray = [...characters];
    const list = sortedArray.sort((a, b) => a.name - b.name);
    console.log(list);  
  }

  return (
    <section>
      <div className='flex'>
        <h2>Characters</h2>
        <div className='buttons'>
          <button name='sort' className='sort' onClick={ sortCharacters }>Sort</button>
        </div>
      </div>
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalog;