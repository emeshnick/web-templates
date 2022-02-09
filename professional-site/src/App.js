import "./App.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const styles = {
  app: {
    backgroundColor: "#fcc397",
    position: "absolute",
    minHeight: "100%",
    minWidth: "100%",
  },
  profileContainer: {
    padding: "5rem",
  },
  profileImage: {},
};

function App() {
  return (
    <Container fluid="lg" style={styles.app} id="app">
      <Row>
        <Col>
          <Container style={styles.profileContainer}>
            <h1>Your Name</h1>
          </Container>
          <Image src="./profile.png" />
        </Col>
        <Col>
          <Container>
            <p>heres some text</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
