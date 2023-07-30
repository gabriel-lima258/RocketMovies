import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: hidden;
`
export const Content = styled.main`
    width: 100%;
    height: 550px;
    padding: 40px 120px;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    &::-webkit-scrollbar{
            width: 8px;    
            border: 1px solid black;
    }
    &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.PINK};
            border-radius: 10px;
    }

    > p {
        text-align: justify;
        word-wrap: break-word;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    .Buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Title{
        display: flex;
        align-items: baseline;
        gap: 19px;

        font-size: 20px;

        h1 {
            font-size: 20px;
        }
    }

    .Info {
        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 16px;

        img{
            width: 16px;
            height: 16px;
            border-radius: 16px;
            border: ${({theme})=> theme.COLORS.BLACK};
        }

        svg{
            color: ${({theme})=> theme.COLORS.PINK};
        }
    }
     
    
`

export const Description = styled.div`
    p {
        margin-top: 40px;
        text-align: justify;
    }
`