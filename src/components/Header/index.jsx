/* eslint-disable react/prop-types */
import { Container, Profile, Brand, Search} from "./style";
import { Input } from "../Input";

import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header({onChange}){
    const {signOut, user} = useAuth();
    const navigate = useNavigate();
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; // se o  user tiver foto carregar img, senão img padrão

    function handleSignOut(){
        navigate("/")
        signOut();
    }
    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título"
                onChange={onChange}
                />
            </Search>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                   
                    <span onClick={handleSignOut}>Sair</span>
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