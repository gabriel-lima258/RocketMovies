import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import {Container, Form} from './style'

import {FiArrowLeft} from 'react-icons/fi'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Section} from '../../components/Section'
import {NoteItem} from '../../components/NoteItem'
import {Button} from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function NewMovie(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState([]); // guarda todos os tags
    const [newTag, setNewTag] = useState(""); // adiciona os tags atuais

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleConfirm(){
        const confirmRemove = window.confirm("Deseja sair sem salvar nenhuma alteração?")
        confirmRemove ? handleBack() : null;
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); // mantém todos os conteúdos anteriores e guarda os novos tags
        setNewTag(""); // reseta os próximos valores
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tags => tags !== deleted)) // pego os valores dos tags onde seja diferente do deleted
    } // retornando todos os valores menos o valor deletado

    async function handleNewNote(){
        // Validações !

        if(!title){ // se esquecer o título
            return alert("Digite o título do filme!")        
        }

        if(!rating){ // se esquecer o título
            return alert("Digite a classificação do filme!")
        }

        if(!description){ // se esquecer o título
            return alert("Diga o que você achou do filme...")
        }

        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionou. Click para adicionar ou deixe vazio!")
        }

        try {
        await api.post("/notes", { // parâmetros do back-end
            title,
            description,
            rating,
            tags
        }).then(() => {
            alert("Nota criada com sucesso!");
            navigate("/")
        })
    } catch(error) {
        error.response ? error.response.data.message : "Não foi possível cadastrar este filme..."
    }

        
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <ButtonText title= "Voltar" icon={FiArrowLeft} onClick={handleBack}/>
                        <h1>Novo filme</h1>
                    </header>
                    <div className="title">
                        <Input 
                        placeholder="Título" 
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                        placeholder="Sua nota (de 0 a 5)" 
                        type="text"
                        onChange={e => setRating(e.target.value)}
                        />
                    </div>

                        <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                        />

                    <Section title="Marcadores de categoria">
                        <div className="tags">
                            {
                                tags.map((tags, index) => ( // mapeia todos os tags
                                    <NoteItem
                                    key={String(index)} // key é a chave dos endereços
                                    value={tags}
                                    onClick={() => handleRemoveTag(tags)} // quando temos parâmetros usamos uma arrow function para não executar sozinho
                                    />
                                ))
                            }
                            <NoteItem 
                            $isnew
                            placeholder="Nova categoria"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button 
                        title="Excluir filme"
                        onClick={handleConfirm}
                        />
                        <Button 
                        $newsave 
                        title="Salvar alterações"
                        onClick={handleNewNote}
                        />
                    </div>      
                </Form>
            </main>
        </Container>
    );
}