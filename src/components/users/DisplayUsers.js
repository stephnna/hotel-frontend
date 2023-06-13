import PropTypes from 'prop-types';

const DisplayUsers = (props) => {
  const { username, email, role } = props;

 
  return (
    <>
    <div>{username}</div>
    <div>{email}</div>
    <div>{role}</div>
    <br />
    </>    
  );
};


DisplayUsers.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, 
  role: PropTypes.string.isRequired,  
};

export default DisplayUsers;