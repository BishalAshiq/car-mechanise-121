import './App.css';

import Home from './Pages/Home/Home/Home'
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route exact path= "/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="*">
          <NotFound></NotFound>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
