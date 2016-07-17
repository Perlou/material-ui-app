/**
 * @author Perlou
 * @app.js
 */

'use strict';

import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Toolbar from './components/ToolBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from ''


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

injectTapEventPlugin();

// const style = {
//   margin: 12,
// };




let App = React.createClass({
  render() {
    return (
    	<MuiThemeProvider>
    		<div>
			    <Toolbar />
		        <Drawer open={true}>
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </Drawer>   	
	        </div>
		</MuiThemeProvider>
    );
  }
});
        // <LeftNav />
        // <MainPan />
render(
	<App/>,
	document.getElementById('app')
);

