import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/registration/registration';

const DisplayUser = (props) => {
  const {username, email, password, role } = props;

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
 
  // const viewDetail = () => {
  //   navigate('/first-layer', { replace: true });
  //   dispatch(getDetailPage(id, name, symbol));
  // };

 
  return (
    <>
    <h1>Hotel</h1>      
    </>
  );
};



DisplayUser.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,  
};

export default DisplayUser;