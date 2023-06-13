import axios from 'axios';
import {HOTELS_URL, API_TOKEN} from '../../api/API';
const GET_HOTELS_BEGINS =  'hotelApp/hotels/GET_HOTELS_BEGINS';
const CREATE_HOTEL_SUCCESS = 'hotelApp/hotel/CREATE_HOTEL_SUCCESS';
const GET_HOTELS_FAILURE = 'hotelApp/hotels/GET_HOTELS_FAILURE';


const hotel = {  
  hotels: [],
  loading: false,
  error: null, 
};

const hotelReducer = (state = hotel, action) => {
  switch (action.type) {
    case GET_HOTELS_BEGINS:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    case CREATE_HOTEL_SUCCESS:        
      return {
        ...state,
        loading: false,
        hotels: action.hotelData,
      };
      
      case GET_HOTELS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        return {
          ...state,
          loading: false,
          error: action.error,
          hotels: [],
        };
    default:
      return state;
  }
};

export default hotelReducer

export const loadingHotel = () => ({
  type: GET_HOTELS_BEGINS,  
});

export const createHotelFailure = (error) => ({
  type: GET_HOTELS_FAILURE,
  error,
});

export const addNewHotel = (data) => {
  const hotelData = [];
  data.forEach((user) => {
    const newUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      location: userlocation,
      phone_number: user.phone_number,      
    };
    hotelData.push(newUser);
  });

  return {
    type: CREATE_HOTEL_SUCCESS,
    hotelData,
  };
};

export const createHotel = (name, location, email, phone_number)  => async (dispatch)  => {  
  axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;
   const  data  = { 
    name: name, 
    email: email,
    location: location,
    phone_number: phone_number 
  }
  
    try {
      const hotels = await axios.post(HOTELS_URL, data);
      const { data } = hotels;
      console.log(data)      
      return dispatch(addNewHotel(data));
    } catch (error) {
      return dispatch(createHotelFailure(error.message));      
    }
  };  

