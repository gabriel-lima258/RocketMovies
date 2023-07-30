import { Container } from "./style";

export function ButtonText({title, link , icon: Icon, ...rest}) {
    return (
        <Container to={link} {...rest}>   
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}