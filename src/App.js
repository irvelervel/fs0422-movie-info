import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

class App extends Component {
  state = {
    selectedMovieTitle: 'Doctor Strange',
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6}>
              <h1>Movie Info App!</h1>
              <Form>
                <Form.Group>
                  <Form.Label>Choose your movie here</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.selectedMovieTitle}
                    onChange={(e) =>
                      this.setState({
                        selectedMovieTitle: e.target.value,
                      })
                    }
                  >
                    <option>Doctor Strange</option>
                    <option>Ironman</option>
                    <option>Black Widow</option>
                    <option>The Avengers</option>
                    <option>The Hulk</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
