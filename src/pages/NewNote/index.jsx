import { Container, Form } from "./style";
import { Link } from 'react-router-dom';

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/text-area';
import { NoteItem } from '../../components/noteItem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';

export function NewNote(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input type='text' placeholder='Título'/>
          <TextArea placeholder='Observações'/>
          <Section title='Links úteis'>
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem placeholder='Novo Link' isNew/>
          </Section>
          <Section title='Marcadores'>
            <div className="tags">
              <NoteItem value="React"/>
              <NoteItem placeholder='Nova Tag' isNew/>
            </div>
          </Section>
          <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  );
};