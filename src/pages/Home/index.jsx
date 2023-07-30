import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {FiPlus} from 'react-icons/fi'

import {Container, Content, NewMovie} from './style'
import {Header} from '../../components/Header'
import {Note} from '../../components/Note'
import { api } from '../../services/api'

export function Home(){
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data);
        }

        fetchNotes();
    }, [search])

    return(
        <Container>
            <Header onChange={e => setSearch(e.target.value)}/>

            <main>
                <Content>
                    <h1>Meus filmes</h1>
                <NewMovie to="/new">
                    <FiPlus/>
                    Adicionar Filme
                </NewMovie>

                </Content>

                <section>
                   {
                    notes && 
                    notes.map(note => (
                     <Note
                        key={String(note.id)} 
                        data={note}
                        onClick={() => handleDetails(note.id)}
                     />
                    ))
                   }    
                </section>
            </main>
        </Container>
    );
}