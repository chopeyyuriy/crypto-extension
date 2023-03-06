import styled from "styled-components"

export const Price = ({ price }) => (
  <StyledPrice>{price ? `${price}$` : ""}</StyledPrice>
)

const StyledPrice = styled.div`
  color: #FFFF;
  margin-bottom: 10px;
  font-size: 25px;
`