import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/gabrielStertz.png" alt="Foto do Usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Gabriel Stertz</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}