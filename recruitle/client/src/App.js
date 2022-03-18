import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import SignUpPage from './components/Auth/SignUpPage';
import NavBar from './components/NavBar';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://localhost:3000/graphql',
  cache: new InMemoryCache()
});

export default function BasicExample() { 
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
