import { Container, Brand, Menu, Search, Content, NewNotes } from './style';

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/header';
import { ButtonText } from '../../components/button-text';
import { Input } from '../../components/input';
import { Section } from '../../components/section'
import { Note } from '../../components/note';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title='Todos' isActive/></li>
        <li><ButtonText title='React'/></li>
        <li><ButtonText title='Node'/></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
      </Search>

      <Content>
        <Section title='Minhas Notas'>
        <Note data={{
          title : 'Bem-vindo ao React', 
          tags: [
            {id: '1', name: 'react'},
            {id: '2', name: 'node'}
          ]
        }}/>
        </Section>
      </Content>

      <NewNotes to='/new'>
        <FiPlus/>
        Criar Nota
      </NewNotes>

    </Container>
  );
};