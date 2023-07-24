import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
  

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 0 120px;

        &::-webkit-scrollbar{
            width: 8px;    
            border: 1px solid black;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.PINK};
            border-radius: 10px;
        }
        
    }

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MAIN};
`;

export const Content = styled.div`
    grid-area: content;
    margin: 40px auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > h1 {
      font-size: 32px;
      font-weight: 400;
    }
`

export const NewMovie = styled.button` // estou linkando a uma pagina com react router
    height: 48px;
    padding: 16px 32px;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`;



