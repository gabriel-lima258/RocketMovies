import { Container, Form, Background} from "./style";
import { Link } from 'react-router-dom';

import {Input} from '../../components/Input';
import {Button} from "../../components/Button";
import {FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'; 

export function SignUp(){
    return(
        <Container>
            <Form>
            <h1>RocketMovies</h1>

            <p>Aplicação para aompanhar tudo que quiser assistir.</p>

            <h2>Crie sua conta</h2>

            <Input
                placeholder="Nome"
                type='text'
                icon={FiUser}
            />
            <Input
                placeholder="E-mail"
                type='text'
                icon={FiMail}
            />
            <Input
                placeholder="Senha"
                type='password'
                icon={FiLock}
            />

            <Button title="Cadastrar" $newsave/>
            <Link to="/SignIn">
                <FiArrowLeft/>
                Volte para o login
            </Link>
            </Form>

            <Background/>
        </Container>
    );
}