import styled from "styled-components"

export const Button = ({ title, onClick, active }) => (
  <StyledButton
    onClick={onClick}
    active={active}
  >
    {title}
  </StyledButton>
)

const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background: #b2b5be5a;
    color: #FFFF;
    cursor: pointer;
    transition: all .3s;
    ${({ active }) => active && "background: #2962ff;"}
`