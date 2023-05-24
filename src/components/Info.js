import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Info() {
  const { characterID } = useParams();
  const [ character, setCharacter ] = useState('');

  const characterURL = `https://finalspaceapi.com/api/v0/character/${ characterID }`;

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const { data } = await axios.get(characterURL);
        setCharacter(data);
        console.log(data);
      } catch(error) {
        console.log(error);
      }
    }
    getCharacter();
  }, []);

  return (
    <div className='info'>
      <div className='flex'>
        <figure>
          <img 
            src={ character.img_url } 
            alt={ character.name } 
            className='portrait'
          />
        </figure>
        <div className='box'>
          <h2>{ character.name }</h2>
          <div>
            <p><span>Species:</span> { character.species }</p>
            <p><span>Gender:</span> { character.gender }</p>
            <p><span>Status:</span> { character.status }</p>
            <p><span>Origin:</span> { character.origin }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info