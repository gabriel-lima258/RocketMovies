import { Container, Profile, Brand, Search} from "./style";
import { Input } from "../Input";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header(){

    const {signOut, user} = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; // se o  user tiver foto carregar img, senão img padrão

    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <Link onClick={signOut}>sair</Link>
                </div>
                <Link to="/profile">
                    <img 
                    src={avatarUrl} 
                    alt={user.name} 
                    />
                </Link>
                
            </Profile>
        </Container>
    );
}