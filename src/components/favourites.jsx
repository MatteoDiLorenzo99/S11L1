import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { removeFromFavourites } from '../Redux/favouritesSlice';

const Favourites = () => {
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Your Favourites</h1>
        </Col>
        {favourites.length > 0 ? (
          favourites.map((company, index) => (
            <Col xs={10} className="mx-auto" key={index}>
              <Row className="p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
                <Col xs={8}>
                  <Link to={`/${company}`}>{company}</Link>
                </Col>
                <Col xs={4}>
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(removeFromFavourites(company))}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Col>
          ))
        ) : (
          <Col xs={10} className="mx-auto">
            <p>No favourites yet!</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Favourites;
