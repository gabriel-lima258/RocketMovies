import { Container, Profile, Brand, Search} from "./style";
import { Input } from "../Input";

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
                    <a href="/">sair</a>
                </div>
                <img 
                    src="https://github.com/gabriel-lima258.png" 
                    alt="foto de Gabriel Lima" 
                />
            </Profile>
        </Container>
    );
}