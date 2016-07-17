import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerSimple extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={300}
          open={this.props.leftNavOpen}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}