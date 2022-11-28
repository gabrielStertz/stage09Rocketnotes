import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Form } from "./style";

import { api } from "../../services/api";

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/text-area';
import { NoteItem } from '../../components/noteItem';
import { Section } from '../../components/section';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/button-text'

export function NewNote(){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  };

  function handleRemoveLink(linkDeleted){
    setLinks(prevState => prevState.filter(link => link !== linkDeleted));
  };

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function HandleRemoveTag(tagDeleted){
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  };

  async function handleNewNote(){

    if(!title){
      return alert("Voce precisa adicionar um título!")
    };
    if(newLink){
      return alert("Voce deixou um link no campo, sem adicionar")
    };
    if(newTag){
      return alert("Voce deixou uma tag no campo, sem adicionar")
    };

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });
    alert("Nota criada com sucesso!");
    navigate(-1);
  };

  function handleBack(){
    navigate(-1);
  };

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack}/>
          </header>
          <Input 
            type='text' 
            placeholder='Título'
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea 
            placeholder='Observações'
            onChange={e => setDescription(e.target.value)}
          />
          <Section title='Links úteis'>
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />    
              ))
            }
            <NoteItem 
              placeholder='Novo Link' 
              isNew 
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              />
          </Section>
          <Section title='Marcadores'>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)} 
                    value={tag}
                    onClick={() => HandleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                placeholder='Nova Tag' 
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title='Salvar' onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  );
};