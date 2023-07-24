import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

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
`
export const Content = styled.div`
    max-width: 1100px;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    align-items: start;

    > a {
      color: ${({theme}) => theme.COLORS.PINK};
    }

    > h1 {
        font-size: 36px;
        margin: 24px 0;

        svg {
        color: ${({theme}) => theme.COLORS.PINK};
        margin-left: 10px;
        height: 20px;
        width: 20px;
        }
    }
`

export const Profile = styled.div`
    margin-bottom: 40px;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        span {
        font-size: 14px;
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.COLORS.WHITE};

            svg {
                height: 16px;
                width: 16px;
                color: ${({theme}) => theme.COLORS.PINK}
            }
        }
        img {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
        }
    }
`

export const Description = styled.div`
    p {
        margin-top: 40px;
        text-align: justify;
    }
`