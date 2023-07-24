import {FiPlus, FiX} from 'react-icons/fi';
import {Container} from './style';

export function NoteItem({ $isnew, value, onClick, ...rest}){
    return(
        <Container $isnew={$isnew}>
            <input 
            type="text" 
            value={value}
            readOnly={!$isnew} // será somente leitura se a propriedade !isnew for verdadeira
            {...rest}
            />

            <button // se for new recebe o icone fiplus se não recebe fix
            type='button'
            onClick={onClick}
            className={$isnew ? 'button-add' : 'button-delete'}
            > 
                {$isnew ? <FiPlus/> : <FiX/>}  
            </button>
        </Container>
    );
}