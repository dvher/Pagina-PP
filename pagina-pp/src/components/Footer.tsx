import styled from "styled-components";
import Grid from "../components/Grid";

const Container = styled.div`
  grid-column: 2/6;
  place-content: center;
`;

function Footer() {
  return (
    <Grid>
      <Container>Footer</Container>
    </Grid>
  );
}

export default Footer;
