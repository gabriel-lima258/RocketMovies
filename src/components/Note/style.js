import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NOTE};

    border: none;
    border-radius: 10px;

    padding: 32px;
    margin-bottom: 16px;

    > h1 {
        flex: 1; // ocupa o máximo de espaço
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }


    > div {
    display: flex;
 
        svg {
        padding-top: 8px;
        font-size: 28px;
      
        color: ${({theme}) => theme.COLORS.PINK};
    }
    }
    

    > P {
        font-size: 16px;
        margin: 16px 0;
        text-align: justify;
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }

`;