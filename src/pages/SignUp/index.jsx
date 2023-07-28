import {useState} from 'react'; // cria um estado dinâmico de dados com back-end
import { Container, Form, Background} from "./style";
import { Link, useNavigate } from 'react-router-dom'; 

import { api } from '../../services/api'; 

import {Input} from '../../components/Input';
import {Button} from "../../components/Button";
import {FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'; 

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
           return alert("Preencha todos os campos!");
        }
        // chamos api para o destino users e enviar as propriedades passadas
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!"); // chama o then caso dê certo a aplicação
            navigate("/SignIn"); 
        })
        .catch(error => { // catch caso dê erro
            if(error.response){
                alert(error.response.data.message); // pegando a mensagem de erro do back end, caso exista
            } else {
                alert("Não foi possível realizar o cadastro!"); // paga uma mensagem genérica
            }
        });
    }

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
                onChange={e => setName(e.target.value)} // o e aciona o evento name devolvendo o valor ao banco
            />
            <Input
                placeholder="E-mail"
                type='text'
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
            />
            <Input
                placeholder="Senha"
                type='password'
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
            />

            <Button title="Cadastrar" $newsave onClick={handleSignUp}/>
            <Link to="/">
                <FiArrowLeft/>
                Volte para o login
            </Link>
            </Form>

            <Background/>
        </Container>
    );
}