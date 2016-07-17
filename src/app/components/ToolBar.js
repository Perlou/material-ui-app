/**
 * @author Perlou
 * @ToolBar.js
 * @export ToolbarSimple
 */

'use strict';

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

const styles = {
	main: {
		width: '100%'
	}
}

export default class ToolbarSimple extends React.Component {

	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle (){
		this.props.handleToggleNav();
	}

	render() {
		return (
			<Toolbar style={styles.main}>
				<ToolbarGroup firstChild={true} float="left">
					<IconButton>
						<MoreVertIcon
							onTouchTap={this.handleToggle} />
					</IconButton>
				<ToolbarTitle text="Perlou" />
				</ToolbarGroup>
				<ToolbarGroup float="right">
					<IconMenu
				      iconButtonElement={
				      	<IconButton>
				      		<ContentAdd />	
				      	</IconButton>		      	
				      }
				      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				      targetOrigin={{horizontal: 'left', vertical: 'top'}}
				    >
				      <MenuItem primaryText="Refresh" />
				      <MenuItem primaryText="Send feedback" />
				      <MenuItem primaryText="Settings" />
				      <MenuItem primaryText="Help" />
				      <MenuItem primaryText="Sign out" />
				    </IconMenu>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

        // <ToolbarGroup float="right">
        //   <ToolbarTitle text="Options" />
        //   <FontIcon className="muidocs-icon-custom-sort" />
        //   <IconMenu
        //     iconButtonElement={
        //       <IconButton touch={true}>
        //         <NavigationExpandMoreIcon />
        //       </IconButton>
        //     }
        //   >
        //     <MenuItem primaryText="Download" />
        //     <MenuItem primaryText="More Info" />
        //   </IconMenu>
        //   <ToolbarSeparator />
        //   <RaisedButton label="Create Broadcast" primary={true} />
        // </ToolbarGroup>
