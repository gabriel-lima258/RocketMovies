import {Container, Content, Profile, Description} from './style'
import {FiArrowLeft, FiTrash2} from 'react-icons/fi'
import {WiTime2} from 'react-icons/wi'

import {Header} from "../../components/Header";
import { Stars } from '../../components/Stars';
import { ButtonText } from '../../components/ButtonText';
import {Tag} from '../../components/Tags';
import { useNavigate, useParams } from 'react-router-dom';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';

export function Details(){
    const [data, setData] = useState({})

    const params = useParams();
    const navigate = useNavigate();

    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleBack(){
        navigate(-1); // não empilha o histórico de navegação
    }

    async function handleExcludeFilm(){
        const confirm = window.confirm(`Deseja excluir a nota do filme '${data.title}'?`);

        if(!confirm){
            return
        }

        await api.delete(`notes/${params.id}`)
        handleBack();
        alert("Filme excluído com sucesso!");
    }

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`notes/${params.id}`)
            setData(response.data);
        }

        fetchNotes();
    }, [])

    return(
        <Container>
            <Header/>
                <Content>
                    <Profile>
                    <div className="Buttons">
                        <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack}/>
                        <ButtonText title="Deletar" icon={FiTrash2} onClick={handleExcludeFilm}/>
                    </div>

                    <div className="Title">
                        <h1>{data.title}</h1>
                        <Stars rating={data.rating}/>
                    </div>
                    
                    <div className="Info">
                        <img 
                        src={avatarUrl} 
                        alt={user.name} 
                        />
                        <p>
                            Por {user.name}
                        </p>
                        <WiTime2/>
                        <p>
                           {data.updated_at}
                        </p>
                    </div>
            
                    </Profile>
                    <Description>

                        {
                            data.tags &&
                            data.tags.map(tag => (
                                <Tag 
                                    key={String(tag.id)}
                                    title={tag.name}
                                />
                            ))
                        }
                        <p>
                           {data.description}
                        </p>    
                    </Description>
                </Content>
        </Container>
    );
}