import { Container, Links, Content } from './style';

import { Button } from '../../components/button';
import { ButtonText } from '../../components/button-text';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';

export function Details(){
  
  return(
    <Container>
      <Header/>

      <main>
        <Content>
        <ButtonText title='Excluir nota'/>
        <h1>Introdução ao React</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum, repellendus corporis dolor porro quod, atque voluptates 
          numquam, laborum dolore asperiores reprehenderit laudantium nulla. 
          Excepturi nesciunt totam libero, assumenda sed obcaecati.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Ea, doloribus quos dolore nulla ipsum nesciunt magnam similique, 
          fuga quam atque fugit voluptatem. Nulla aperiam explicabo placeat 
          veritatis maxime laudantium voluptates.
        </p>
        <Section title='Links úteis'>
          <Links>
            <li><a href="#">https://github.com/gabrielStertz</a></li>
            <li><a href="#">https://rocketseat.com.br</a></li>
          </Links>
        </Section>
        <Section title='Marcadores'>
          <Tag title='Express'/>
          <Tag title='Node'/>
        </Section>
         <Button title = 'Voltar'/>
        </Content>
      </main>
    </Container>
  );
};