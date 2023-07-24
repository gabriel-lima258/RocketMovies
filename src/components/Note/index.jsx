import {Container} from "./style";
import {Tag} from "../Tags"

import {RiStarSFill, RiStarSLine} from 'react-icons/ri'

export function Note({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSLine/>
            </div>
            <p>{data.description}</p>
            {
                data.tags && // caso exista tag, cria um footer
                <footer> 
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />) 
                        // usa um map para percorrer todas tags
                        // uso tag name para identificar
                    }
                </footer>
            }
        </Container>
    );
}