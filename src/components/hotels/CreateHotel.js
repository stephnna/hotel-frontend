import PropTypes from 'prop-types';

const createHotel = (props) => {
  const { name, location, email, phone_number } = props;

   
return (
  <form onSubmit={() => registerUser(newUser.username, newUser.email, newUser.password)}>
    <input type="text" name="name" value={newUser.username} onChange={handleChange} placeholder="Username" />
    <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
    <input type="password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
    <button type="submit">Register</button>
  </form>
  );
};


createHotel.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, 
  phone_number: PropTypes.string.isRequired,  
};

export default createHotel;

