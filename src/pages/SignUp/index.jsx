import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/input';
import { Button } from '../../components/button';


import { Container, Form, Background } from "./style";

export function SignUp(){
  return(
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus link úteis.</p>
        <h2>Crie sua Conta</h2>
        <Input placeholder='Nome' type='text' icon={FiUser}/>
        <Input placeholder='E-mail' type='text' icon={FiMail}/>
        <Input placeholder='Senha' type='password' icon={FiLock}/>
        <Button title='Cadastrar'/>
        <Link to="/">
          Voltar para LogIn
        </Link>
      </Form>
    </Container>
  );
};