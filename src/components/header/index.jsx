import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from '../../assets/avatar.svg';
import { api } from "../../services/api";

import { useAuth } from '../../hooks/auth';

export function Header(){
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut(){
    navigate("/");
    signOut();
  };

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Profile to='/profile'>
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo(a)</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={ handleSignOut }>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}