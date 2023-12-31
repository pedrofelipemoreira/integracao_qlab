import { useState, useContext } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import contactImg from "../../assets/img/contact-img.svg";
import Footer from "../Footer";

import Input from '../form/input';

// Context
import { Context } from '../context/UserContext';

export const Inscrição = () => {

  /* const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here, for example, checking if the user and password are valid.
    // For demonstration purposes, I'm just logging the values for now.
    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmSenha);
  }; */

    const [user, setUser] = useState({});
    const {register} = useContext(Context);

    function handleChange(e){

        setUser({...user, [e.target.name]: e.target.value})

    }

    function handleSubmit(e) {

        e.preventDefault();

        //enviar o usuario para o banco
        register(user)

      
    }


  return (
    <>
    <div className="AppI">
      <Container>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={6}>
            <img className="img1" src={contactImg} alt="contact" />
          </Col>
          <Col xs={12} md={6}>
            <div className="login_form_containerI">
              <div className="login_formI">
                <h2 className="text-centerI">Inscrição</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-1" controlId="formBasicNome">

                    <Input className="input_textI" text="Nome" type="text" name = "name" placeholder = "Digite o Seu Nome" handleOnChange={handleChange}></Input>

                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicTelefone">

                    <Input className="input_textI" text="Telefone" type="text" name = "phone" placeholder = "Digite o Seu Telefone" handleOnChange={handleChange}></Input>

                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicEmail">

                    <Input className="input_textI" text="E-mail" type="email" name = "email" placeholder = "Digite o Seu e-mail" handleOnChange={handleChange}></Input>

                  </Form.Group>
                  
                  <Form.Group className="mb-1" controlId="formBasicSenha">

                    <Input className="input_textI" text="Senha" type="password" name = "password" placeholder = "Digite a Sua Senha" handleOnChange={handleChange}></Input>
                  
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="formBasicConfirmSenha">

                    <Input className="input_textI" text="Confirmação de Senha" type="password" name = "confirmpassword" placeholder = "Confirme a Sua Senha" handleOnChange={handleChange}></Input>

                  </Form.Group>
                  <div className="login_entrarI">     

                  <input type="submit" value = "Cadastrar" className="text-decoration-none" id="login_button"/>
                  
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </>
  );
}


export default Inscrição;