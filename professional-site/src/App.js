import "./App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { findByLabelText } from "@testing-library/react";

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
  profileImage: {
    width: "15rem",
    height: "15rem",
    objectFit: "cover",
  },
  portfolioDiv: {
    padding: "3rem",
    columnCount: "2",
  },
};

function App() {
  return (
    <Container fluid="lg" style={styles.app} id="app">
      <Row>
        <Col>
          <Container style={styles.profileContainer}>
            <h1>Your Name</h1>
            <Image src="./profile.png" style={styles.profileImage} />
            <p>A little about yourself</p>
          </Container>
        </Col>
        <Col>
          <div style={styles.portfolioDiv} className="text-center">
            <Image src="./profile.png" style={styles.profileImage} />
            <Image src="./profile.png" style={styles.profileImage} />
            <Image src="./profile.png" style={styles.profileImage} />
            <Image src="./profile.png" style={styles.profileImage} />
            <Image src="./profile.png" style={styles.profileImage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
