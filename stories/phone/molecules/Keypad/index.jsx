import styled from "@emotion/styled";
import KeypadLine from "stories/phone/atoms/KeypadLine";

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Container = styled.div`
  height: 136px;
  ${(props) => (props.styles ? props.styles : null)}
`;

function KeyPad({ onClick, styles = { height: "136px" } }) {
  return (
    <Container onClick={onClick} styles={styles}>
      <KeypadLine items={["1", "2", "3"]} />
      <KeypadLine items={["4", "5", "6"]} />
      <KeypadLine items={["7", "8", "9"]} />
      <KeypadLine items={["*", "0", "#"]} />
    </Container>
  );
}

export default KeyPad;
