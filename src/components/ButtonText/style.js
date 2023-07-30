import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
        
        color: ${({theme}) => theme.COLORS.PINK};
        

        display: flex;
        align-items: center;

        font-size: 16px;

        gap: 5px;

`