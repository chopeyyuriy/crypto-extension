import styled from "styled-components"
import { Button } from "../Button"

export const Options = ({ options, activeToken, onSelectToken }) => (
  <StyledOptions>
    <div className="btns">
      {
        options.map((opt, i) => (
          <Button
            key={i}
            title={opt}
            onClick={() => onSelectToken(opt)}
            active={activeToken === opt}
          />
        ))
      }
    </div>
  </StyledOptions>
)

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  margin-bottom: 10px;
  .btns {
    width: 100%;
  }
`