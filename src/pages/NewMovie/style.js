import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;

        &::-webkit-scrollbar{
            width: 8px;    
            border: 1px solid black;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.PINK};
            border-radius: 10px;
        }
    }

    .tags {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap; // quando não caber mais pula para próxima linha
        padding: 16px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};
        border-radius: 8px;
    }
`

export const Form = styled.form`
    max-width: 1120px;
    margin: 40px auto;

    > header {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        
        h1 {
            margin: 24px 0 40px;
        }

        a {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    .title {
        display: flex;
        gap: 40px;
    }

    .buttons {
        display: flex;
        gap: 40px;
    }

`
