import React from "react";
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
  font-size: 6rem;
  color: #0078D7;
`;

const Page = props => {
  return (
    <Center>
      <StyledHeader>Contributr</StyledHeader>
      {props.children}
    </Center>
  );
};

export default Page;
