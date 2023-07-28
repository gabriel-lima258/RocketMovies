import { useState } from "react"; // estados para armazenar informações
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

export function SignIn() {

  const [email, setEmail] = useState(""); // serve para carregar informações de estados 
  const [password, setPassword] = useState("");

  const {signIn} = useAuth(); // usando a função hook criada 

  function handleSignIn(){
    signIn({ email, password }); // função para ser usada no onClick
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para aompanhar tudo que quiser assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
        placeholder="E-mail" 
        type="text" 
        icon={FiMail} 
        onChange={e => setEmail(e.target.value)} // essa função observa qualquer alteração de evento
        />
        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock} 
        onChange={e => setPassword(e.target.value)} // essa função observa qualquer alteração de evento
        />

        <Button 
        title="Entrar" 
        $newsave 
        onClick={handleSignIn}
        />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
