
import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Products from './Products.jsx';
import Store from './Store.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import { Route, withRouter } from 'react-router-dom';

class App extends React.Component{


render(){
return(
<div>
<Navbar />
<Route exact path='/' component = {Home} />
<Route exact path='/home' component = {Home} />
<Route exact path='/about' component = {About} />
<Route exact path='/products' component = {Products} />
<Route exact path='/store' component = {Store} />
<Route exact path='/login' component = {Login} />
<Footer />
</div>
)
}
}

export default withRouter(App);