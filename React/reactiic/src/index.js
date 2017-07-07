import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { About } from './components/About'
import { Reader } from './components/Reader'
import { Writer } from './components/Writer'
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
         <ul className="nav">
             <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
    				 <li className="nav-item"><Link to="/reader">Reader</Link></li>
             <li className="nav-item"><Link to="/writer">Writer</Link></li>
             <li className="nav-item"><Link to="/about">About</Link></li>
         </ul>

       <Route exact path="/" component={App}/>
				<Route path="/reader" component={App}/>
        <Route path="/writer" component={App}/>
       <Route path="/about" component={App}/>
     </div>
   </Router>,
	document.getElementById('react-container')
)
