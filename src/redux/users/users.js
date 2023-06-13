import axios from 'axios';
import {ALL_USERS_URL, API_TOKEN} from '../../api/API';
const GET_USERS_BEGINS =  'hotelApp/users/GET_USERS_BEGINS';
const GET_USERS_SUCCESS = 'hotelApp/users/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'hotelApp/users/GET_USERS_FAILURE';

const initialUsers = {  
  allUsers: [],
  loading: false,
  error: null, 
};

const usersReducer = (state = initialUsers, action) => {
  switch (action.type) {
    case GET_USERS_BEGINS:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    case GET_USERS_SUCCESS:        
      return {
        ...state,
        loading: false,
        allUsers: action.userData,
      };

      case GET_USERS_FAILURE :
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

export default usersReducer;

export const loadingUsers = () => ({
  type: GET_USERS_BEGINS,  
});

export const fetchUserFailure = (error) => ({
  type: GET_USERS_FAILURE,
  error,
});

export const fetchUsers = (data) => {
  const userData = [];
  data.forEach((user) => {
    const newUser = {
      id: user.id,
      username: user.username, 
      email: user.email,      
      role: user.role,
    };
    userData.push(newUser);
  });

  return {
    type: GET_USERS_SUCCESS,
    userData,
  };
};

export const GetUsers = ()  => async (dispatch)  => {
  dispatch(loadingUsers());
  axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`
  try {
    const allusers = await axios.get(ALL_USERS_URL);
    const { data } = allusers;
    dispatch(fetchUsers(data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
