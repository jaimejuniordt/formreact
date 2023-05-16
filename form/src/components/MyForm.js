import './MyForm.css'

import {useState} from 'react'
const MyForm = ({user}) => {
  // 6 - controlled inputs
  // 3- gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    event.preventDefaut();
    console.log("Enviando o formulário");
    console.log(name, email, bio);

    // 7 - Limpar Formulário
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      { /* 5 - envio de form */}
      { /* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" 
          name="name" 
          placeholder="Digite o seu nome" 
          onChange={handleName} 
          value={name} />
        </div>
        {/* 2 - label envolvendo input - maneira mais simplificada do que a feita na 1 - acima*/}
        <label>
          <span>E-mail</span>

          { /* 4 - simplificação de manipulação de state */}
           <input 
           type="email" 
           name="email" 
           placeholder="Digite o seu e-mail" 
           onChange={(e) => setEmail(e.target.value)} 
           value={email} />
          </label> 

          {/* 8 - textarea */}
          <label>
            <span>bio:</span>
          <textarea name="bio" 
          placeholder="Descrição do usuário" 
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          ></textarea>
          </label>
        <input type="submit" value="Enviar" />
      </form>
      </div>
  )
}

export default MyForm 