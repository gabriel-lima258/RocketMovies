import { useState } from 'react';
import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import {Container, Form, Avatar} from './style'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile(){
    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; // se o  user tiver foto carregar img, senão img padrão

    const [avatar, setAvatar] = useState(avatarUrl); // para caso o user tiver já avatar
    const [avatarFile, setAvatarFile] = useState(null); // para trocar um novo avatar

    async function handleUpdate(){
        const user = { // criei um objeto com os parâmetros desejados
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({user, avatarFile}); // passando o objeto para dentro da função
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]; // pegando o arquivo da primeira posição
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatar} 
                    alt="Foto do usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                        type="file"
                        id='avatar'
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" $newsave onClick={handleUpdate}/>    
            </Form>
        </Container>
    );
}