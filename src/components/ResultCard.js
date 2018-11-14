import React from "react";
import styled from 'styled-components'

const StyledLis = styled.li`
  list-style-type: none;
`

const ResultCard = props => {
  const topStr = `#${props.data.number}: ${props.data.title}`;

  return (
    <StyledLis>
      <a href={props.data.url}>{topStr}</a>
    </StyledLis>
  );
};

export default ResultCard;
