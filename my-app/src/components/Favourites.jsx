import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap'

import { StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch, setPreferences } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Favourites = () => {
  const preferences = useSelector((state) => state.search.preferences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedPreferences = localStorage.getItem('preferences');
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
  }, [setPreferences, localStorage.getItem('preferences')]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favoriti</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {preferences.map((pref, i) => (
              <ListGroupItem key={i}>
                <StarFill
                  className="mr-2"
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_FAVORITE',
                      payload: pref,
                    })
                  }
                />
                <Link to={`/${pref}`} className="px-2">{pref}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  preferences: state.search.preferences,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourite: (pref) => dispatch({ type: 'REMOVE_FROM_FAVOURITE', payload: pref })
});


export default Favourites
