import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/button-text'

import { Container, Form, Background } from "./style";

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus link úteis.</p>
        <h2>Faça seu login</h2>
        <Input placeholder='E-mail' type='text' icon={FiMail}/>
        <Input placeholder='Senha' type='password' icon={FiLock}/>
        <Button title='Entrar'/>
        <ButtonText title='Criar conta' isActive/>
      </Form>
      <Background/>
    </Container>
  );
};