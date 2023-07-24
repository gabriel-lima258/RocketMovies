import { Container, Profile, Brand, Search} from "./style";
import { Input } from "../Input";
import { Link } from 'react-router-dom';

export function Header(){
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
                    <strong>Gabriel Lima da Silva</strong>
                    <Link to="/SignIn">sair</Link>
                </div>
                <img 
                    src="https://github.com/gabriel-lima258.png" 
                    alt="foto de Gabriel Lima" 
                />
            </Profile>
        </Container>
    );
}