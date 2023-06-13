import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetUsers } from '../../redux/users/users';
import DisplayUsers from './DisplayUsers';
import ErrorSpinner from '../errorspinner/ErrorSpinner';
const Users = () => {
  const {
    allUsers, loading, error,
  } = useSelector((state) => state.users);

  console.log(allUsers, "redux users")

  const dispatch = useDispatch();

  useEffect(() => {   
      dispatch(GetUsers());   
  }, [dispatch]);
  
if(error || loading) 
return (ErrorSpinner(error, loading))
  
  return (
    <div>      
        {allUsers.map((user) => (
          <DisplayUsers
            id={user.id}
            username={user.username}
            email={user.email}
            role={user.role}
            key={user.id}
          />
        ))}    
    </div>
  );   
};
export default Users;