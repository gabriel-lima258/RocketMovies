import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  const data = useAuth(); // usando a função hook criada 

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para aompanhar tudo que quiser assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" $newsave />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
