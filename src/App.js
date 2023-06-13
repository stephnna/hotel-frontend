import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Users from './components/users/Users';


const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Users />} />      
    </Routes>
  </BrowserRouter>
);

export default App;