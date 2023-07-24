import styled from 'styled-components';
import CinemaBackground from '../../assets/CinemaLogin.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    
    > h1 {
        font-family: 48px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > h2 {
        margin: 48px 0;
        font-size: 24px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.PINK};
        display: flex;

        justify-content: center;
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${CinemaBackground}) no-repeat center center;
    background-size: cover;
`;