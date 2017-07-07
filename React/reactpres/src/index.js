import React from 'react'
import { render } from 'react-dom'
import { About } from './components/About'
import { PresentationContainer } from './components/PresentationContainer'
import {
  HashRouter as Router,
  Route,
  Link,
	hashHistory
} from 'react-router-dom'
import './stylesheets/index.scss'

window.React = React

render(
	<Router>
     <div className="container">
       <Route exact path="/" component={PresentationContainer}/>
       <Route path="/about" component={About}/>
     </div>
   </Router>,
	document.getElementById('react-container')
)
