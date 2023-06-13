
https://hotel-backend.fly.dev/api/v1/users
const RegisterUser = async (name, email, location, phone_number)  => {
  try {
    const registrations = await axios.post(REGISTRATIONS_URL,
      {       
      headers: { 'Authorization': `Bearer ${API_TOKEN}` },      
      
      hotel: {
        name: name,
        location: location,
        email: email,
        phone_number: phone_number
      }
    });
      console.log(registrations.data)
    // const { data } = registrations;
    // return dispatch(fetchMission(data));
  } catch (error) {
    return new Error(error);
  }
};

import axios in your React component:
import axios from 'axios'

// Next, create a function that will handle the JWT API call using axios. In this example, we'll call it fetchJWT():

Copy code
function fetchJWT() {
  axios.post('/api/authenticate', {
    username: 'your_username',
    password: 'your_password'
  })
  .then(response => {
    // handle the response here
    console.log(response.data.token)
  })
  .catch(error => {
    // handle the error here
    console.log(error)
  })
}
Now, you can call the fetchJWT() function when you need to fetch the JWT. For example, you can call it in the componentDidMount() lifecycle method:
Copy code
class MyComponent extends React.Component {
  componentDidMount() {
    fetchJWT()
  }
  // ... the rest of your component code
}
Finally, make sure to store the JWT token in a secure way and use it for future API calls. It is recommended to use a library like js-cookie to store the JWT token in a secure way.
Copy code
import Cookies from 'js-cookie'

function fetchJWT() {
  axios.post('/api/authenticate', {
    username: 'your_username',
    password: 'your_password'
  })
  .then(response => {
    // store the JWT token in a cookie
    Cookies.set('jwt', response.data.token)
  })
  .catch(error => {
    console.log(error)
  })
}
Note: This is just a basic example, and you should make sure to handle errors and validation in a more robust way in your actual implementation. Also, make sure to use appropriate endpoints and authentication methods in your API.




stephennnabuike@gmail.com
register a new user on jwt api with react rudux hooks
First, import the necessary packages in your React component:
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

Next, create a function that will handle the registration of a new user using axios. In this example, we'll call it registerUser():

Copy code
function registerUser(username, email, password) {
  axios.post('/api/register', {
    username: username,
    email: email,
    password: password
  })
  .then(response => {
    // handle the response here
    console.log(response.data)
    //dispatch an action to update the store with the new user
    dispatch(registerSuccess(response.data))
  })
  .catch(error => {
    // handle the error here
    console.log(error)
    //dispatch an action to update the store with the error
    dispatch(registerError(error))
  })
}
Use the useDispatch hook from react-redux to create a dispatch variable
Copy code
const dispatch = useDispatch()
Create a state variable that will hold the new user information
Copy code
const [newUser, setNewUser] = useState({
  username: '',
  email: '',
  password: ''
})
Create a function that will update the newUser state variable with the input values
Copy code
function handleChange(event) {
  setNewUser({
    ...newUser,
    [event.target.name]: event.target.value
  })
}
Create a form that will allow the user to input their information and call the registerUser function when the form is submitted
Copy code
return (
  <form onSubmit={() => registerUser(newUser.username, newUser.email, newUser.password)}>
    <input type="text" name="username" value={newUser.username} onChange={handleChange} placeholder="Username" />
    <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
    <input type="password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
    <button type="submit">Register</button>
  </form>
)
Create the actions that will be dispatched for a successful registration or an error
Copy code
function registerSuccess(user) {
  return {
    type: 'REGISTER_SUCCESS',
    user
  }
}

function registerError(error) {
  return {
    type: 'REGISTER_ERROR',
    error
  }
}
Finally, create the appropriate reducers to update the store with the new user or the error
Note: This is just a basic example, and you should make sure to handle errors and validation in a more robust way in your actual implementation. Also, make sure to use appropriate endpoints and authentication methods in your API.



Regenerate response

const username = 'your_username';
const password = 'your_password';
const encoded = btoa(`${username}:${password}`);

axios.get('https://example.com', {
  headers: {
    'Authorization': `Basic ${encoded}`,
    'Content-Type': 'application/json;charset=UTF-8',
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
This will properly encode the header value and allow you to set it without encountering the "String contains non ISO-8859-1 code point" error.





