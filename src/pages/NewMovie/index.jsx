import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import {Container, Form} from './style'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Section} from '../../components/Section'
import {NoteItem} from '../../components/NoteItem'
import {Button} from '../../components/Button'

export function NewMovie(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <a href="#"> <FiArrowLeft/> Voltar</a>
                        <h1>Novo filme</h1>
                    </header>
                    <div className="title">
                        <Input placeholder="Título" type="text"/>
                        <Input placeholder="Sua nota (de 0 a 5)" type="text"/>
                    </div>
                    <TextArea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="Comédia"/>
                            <NoteItem $isnew placeholder="Nova categoria"/>
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button title="Excluir filme"/>
                        <Button $newsave title="Salvar alterações"/>
                    </div>
                    
                </Form>
            </main>
        </Container>
    );
}