import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './components/MovieCard'
import MovieForm from './components/MovieForm'

class App extends Component {
  state = {
    selectedMovieTitle: 'Doctor Strange',
  }

  changeSelectedMovieTitle = (newMovieTitle) => {
    this.setState({
      selectedMovieTitle: newMovieTitle,
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6}>
              <h1>Movie Info App!</h1>
              <MovieForm
                selectedMovieTitle={this.state.selectedMovieTitle} // READS THE VALUE
                changeSelectedMovieTitle={this.changeSelectedMovieTitle} // CHANGES THE VALUE
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6} className="text-dark">
              {/* MovieCard goes here! */}
              <MovieCard selectedMovieTitle={this.state.selectedMovieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
