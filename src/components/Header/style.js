import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};

    display: flex;
    justify-content: space-between;

    padding: 24px 120px;
`

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 64px;
`
 
export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 9px;

        strong {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        }

        a {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    
`