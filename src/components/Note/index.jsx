/* eslint-disable react/prop-types */
import { Container } from "./style";
import { Tag } from "../Tags"
import { Stars } from "../Stars";

export function Note({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Stars rating={data.rating}/>
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