import { Form } from 'react-bootstrap'

const MovieForm = ({ selectedMovieTitle, changeSelectedMovieTitle }) => (
  <Form>
    <Form.Group>
      <Form.Label>Choose your movie here</Form.Label>
      <Form.Control
        as="select"
        value={selectedMovieTitle}
        onChange={(e) => changeSelectedMovieTitle(e.target.value)}
      >
        <option>Doctor Strange</option>
        <option>Ironman</option>
        <option>Black Widow</option>
        <option>The Avengers</option>
        <option>The Hulk</option>
      </Form.Control>
    </Form.Group>
  </Form>
)

export default MovieForm
