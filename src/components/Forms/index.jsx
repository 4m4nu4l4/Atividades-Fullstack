import { useState } from "react";
import "./styles.css";

export default function Form() {
  const [formData, setFormData] = useState();
  ({
    nome: '',
    email: '',
    senha: ''

  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value, // função que modifica a propriedade específica daquele input

    });
    console.log(name, value)
  };

  return (
    <div id="header">
      <div>
        <label for="nome">nome:</label>
        <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange}/>
      </div>
      <div>
        <label for="email">email:</label>
        <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>
      </div>
      <div>
        <label for="senha">senha:</label>
        <input type="text" name="senha" id="senha" value={formData.senha} onChange={handleChange}/>
      </div>
    </div>
  );
}
