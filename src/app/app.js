/**
 * @author Perlou
 * @app.js
 */

'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Toolbar from './components/ToolBar';
import LeftNav from './components/LeftNav';
import MainPan from './components/MainPan';

injectTapEventPlugin();

class App extends Component {

	constructor (props){
		super(props);
		this.state = {
			leftNavOpen: false
		};
		this.handleToggleNav = this.handleToggleNav.bind(this);
	}

	handleToggleNav (){
		this.setState({
			leftNavOpen: !this.state.leftNavOpen
		})
	}

	render (){
	    return (
	    	<MuiThemeProvider>
	    		<div>
				    <Toolbar 
				    	handleToggleNav={this.handleToggleNav} />
				    <LeftNav
				    	leftNavOpen={this.state.leftNavOpen} />
				    <MainPan />	 	
		        </div>
			</MuiThemeProvider>
	    );		
	}
}

// let App = React.createClass({
//   render() {
//     return (
//     	<MuiThemeProvider>
//     		<div>
// 			    <Toolbar />
// 			    <LeftNav open={this.state.leftNavOpen}/> 	
// 	        </div>
// 		</MuiThemeProvider>
//     );
//   }
// });

render(
	<App/>,
	document.getElementById('app')
);

