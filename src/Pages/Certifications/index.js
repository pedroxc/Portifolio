import React from 'react';
import{ useNavigate} from 'react-router-dom'

// import { Container } from './styles';

function Certifications() {
  const navigate=useNavigate();
  return <div>
    Olá Mundo
    <button onClick={()=>{navigate(-1)}}>
      Voltar
    </button>
  </div>
}

export default Certifications;