// import axios from 'axios';
// import {REGISTRATIONS_URL, API_TOKEN} from '../../api/API';
// const REGISTERATION_BEGINS =  'hotelApp/registrations/REGISTERATION_BEGINS';
// const REGISTERATION_SUCCESS = 'hotelApp/registrations/REGISTERATION_SUCCESS';
// const REGISTERATION_DETAILS = 'hotelApp/registrations/REGISTERATION_DETAILS';
// const REGISTERATION_FAILURE = 'hotelApp/registrations/REGISTERATION_FAILURE';


// const registration = {  
//   users: [],
//   loading: false,
//   error: null, 
// };

// const registrationReducer = (state = registration, action) => {
//   switch (action.type) {
//     case REGISTERATION_BEGINS:
//       return {
//         ...state,
//         loading: true,
//         error: action.error,
//       };
//     case REGISTERATION_SUCCESS:        
//       return {
//         ...state,
//         loading: false,
//         users: action.userData,
//       };

//       case  REGISTERATION_DETAILS:
//         return {
//           ...state,
//           loading: false,
//           cryptoDetail: action.user,
//         };
  
//       case REGISTERATION_FAILURE:
//         // The request failed. It's done. So set loading to "false".
//         // Save the error, so we can display it somewhere.
//         // Since it failed, we don't have items to display anymore, so set `items` empty.
//         return {
//           ...state,
//           loading: false,
//           error: action.error,
//           users: [],
//         };
//     default:
//       return state;
//   }
// };

// export default registrationReducer;

// export const loadingRegistration = () => ({
//   type: REGISTERATION_BEGINS,  
// });

// export const registrationFailure = (error) => ({
//   type:REGISTERATION_FAILURE,
//   error,
// });

// export const fetchUser = (data) => {
//   const userData = [];
//   data.forEach((user) => {
//     const newUser = {
//       id: user.id,
//       username: user.username, 
//       email: user.email,      
//       role: user.role,
//     };
//     userData.push(newUser);
//   });

//   return {
//     type: REGISTERATION_SUCCESS,
//     userData,
//   };
// };

// export const registerUser = ()  => async (dispatch)  => {
//   dispatch(loadingRegistration());
//   axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;
//   //  const  data  = { 
//   //   username, 
//   //   email: email,
//   //   password: password,
//   //   role 
//   // }
  
//     try {
//       const registrations = await axios.get(REGISTRATIONS_URL);
//       const { data } = registrations;
//       console.log(data)      
//       return dispatch(fetchUser(data));
//     } catch (error) {
//       return dispatch(registrationFailure(error.message));      
//     }
//   };  

