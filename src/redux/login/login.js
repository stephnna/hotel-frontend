import axios from 'axios';
import {REGISTRATIONS_URL} from '../../api/API';
const LOGIN_BEGINS =  'hotelApp/login/LOGIN_BEGINS';
const LOGIN_SUCCESS = 'hotelApp/login/LOGIN_SUCCESS';
const LOGIN_DETAILS = 'hotelApp/login/LOGIN_DETAILS';
const LOGIN_FAILURE = 'hotelApp/login/LOGIN_FAILURE';


const login = {
  users: [],
  loading: false,
  error: null,
  userDetails: [],
};

const registrationReducer = (state = registration, action) => {
  switch (action.type) {
    case REGISTERATION_BEGINS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTERATION_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        users: action.data,
      };
      case  REGISTERATION_DETAILS:
        return {
          ...state,
          loading: false,
          // cryptoDetail: action.organizedUsersDetail,
        };
  
      case REGISTERATION_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        return {
          ...state,
          loading: false,
          error: action.error,
          users: [],
        };
    default:
      return state;
  }
};

export default registrationReducer;

export const loadingRegistration = () => ({
  type: REGISTERATION_BEGINS,
});

export const registrationFailure = (error) => ({
  type:REGISTERATION_FAILURE,
  error,
});

export const registerUser = (username, email, password, role) = async (dispatch)  => {
  dispatch(loadingRegistration());
  // axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;
   const  data  = { 
    username, 
    email: email,
    password: password,
    role 
  }
    try {
      const registrations = await axios.get(REGISTRATIONS_URL, data);
      console.log(registrations.data)      
      return dispatch(registrations.data);
    } catch (error) {
      dispatch(registrationFailure(error.message));      
    }
  };  

RegisterUser('steve', 'myemail@gmail.com', '1234', 'admin')
