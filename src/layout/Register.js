import { useReducer, useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Container = styled.div`
  display: flex;
  fieldset:not(:nth-child(6)){
    /* min-height: 90px; */
    width: 80%;
    border: none;
  }
  fieldset:nth-child(6){
    border: none;
    width: 80%;
  }

  > div:nth-child(2){
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  form {
    width: 70%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    > button {
      width: 80%;
      line-height: 50px;
      border: none;
      border-radius: 25px;
      font-size: 1.2em;
      cursor: pointer;
      margin-top: 2%;
    }
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
        <h1>Complete os campos ao lado para pedir sua Conta e Cartão de Crédito</h1>
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
              Nome Completo:
              <input type="text" name="nome" id="nome" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              Celular:
              <input type="tel" name="celular" id="celular" onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              Email:
              <input type="email" name="email" id="email" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
              Confirmação de email:
              <input type="email" name="confirma_email" id="confirma_email" required onChange={handleChange}></input>
            </label>
          </fieldset>

          <fieldset>
            <label>
                <input type="checkbox" name="aceito_comunicacao" id="aceito_comunicacao" />
                Aceito receber comunicações do Nubank por Whatsapp.
            </label>
          </fieldset>

          <fieldset>
            <label>
                <input type="checkbox" name="aceito_contrato" id="aceito_contrato" />
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu conscentimento, quando aplicável, conforme descrito nesta Política de Privacidade. 
            </label>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Register;
