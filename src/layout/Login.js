import { useReducer, useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Container = styled.div`
  display: flex;
  fieldset{
    width: 60%;
    border: none;
  }
`;

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  }
};

function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false); 
  
  const handleChange = (event) => {
    //Agora estamos usando o reducer
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);

  };
  
  return (
    <Container>
      <Banner background={true}>
        <h1>Faça seu Login</h1>
      </Banner>

      <Banner>
        {submitting && (
          <div>
            <p>Enviando o formulário...</p>
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>: {value.toString()}
                </li>
              ))}
            </ul>
          </div>

        )}

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              CPF: 
              <input type="text" name="cpf" id="cpf" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              Senha:
              <input type="password" name="senha" id="senha" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <button type="submit">Entrar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Register;
