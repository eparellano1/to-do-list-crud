import styled from 'styled-components'

export const KeyContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.8rem;
    list-style-type: square;
    border-radius: 8px;
    padding: 5px;
    border: 1px solid #ef7360;
    @media (max-width: 420px) {
        flex-direction: column;
    }
`;

export const BulletPoint = styled.li`
    &:last-child {
        color: red;
    }
    @media (max-width: 420px){
        padding: 5px 0;
    }
`;

