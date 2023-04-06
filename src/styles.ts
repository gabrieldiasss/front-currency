import styled from "styled-components";
import Masky from './assets/mask.png'

export const AppWrapper = styled.div`
    max-width: 1100px;
    margin: 3rem auto;

    main {
        margin-top: 4rem;

        img {
            position: absolute;
            top: 0;
            right: 0;
            height: 100vh;
        }
    }
`