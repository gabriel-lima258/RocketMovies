import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background: ${({theme}) => theme.COLORS.BACKGROUND_NOTE};

        display: flex;
        align-items: center;

        padding: 0 144px;
        
        svg, a {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 16px;
            display: flex;
            align-items: center;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: -100px auto 0;

    > div:nth-child(4){
        margin-top: 24px; // estou chamando a div da senha atual
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 64px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute; // uso a posição de referência absoluta
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none; // esconde o input
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};
        }
    }

`