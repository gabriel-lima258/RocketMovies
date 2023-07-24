import styled from 'styled-components';

export const Container = styled.section`
    margin: 40px auto;
    overflow-y: auto;

    > h2 {
        margin-bottom: 24px;

        color: ${({theme}) => theme.COLORS.GRAY_400};
        font-size: 20px;
        font-weight: 400;
    }
`;