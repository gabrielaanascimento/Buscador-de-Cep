import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import '../styles.css'
import api from '../services/app';

function Home() {

  const [input, setInput] = useState('')
  const [dados, setDados] = useState({}) 

  const handleSearch = async() => {
    if(input==='') {
      alert('Preencha algum cep')
      return
    }    

    try {
      const response = await api.get(`${input}/json`)
      console.log(response.data);
      setDados(response.data)
      
    } catch (error) {
      console.log(error);
      alert('Erro ao buscar')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP ..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        />
        <button 
        className="buttonSearch"
        onClick={handleSearch}        
        >
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

        {Object.keys(dados).length > 0 && !dados.erro && (
        <div className='main'>
          <h2>Cep: {input}</h2>

          <span>{dados.logradouro?dados.logradouro:''}</span>
          <span>Complemento:{dados.complemento?dados.complemento:''}</span>
          <span>Bairro: {dados.bairro?dados.bairro:''}</span>
          <span>{dados.localidade?dados.localidade:''} - {dados.uf?dados.uf:''}</span>
        </div>

      )}



    </div>
  );
}

export default Home;
