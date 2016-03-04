import React, { PropTypes, Component } from 'react'
import FlatButton from 'material-ui/lib/flat-button'
import AppBar from 'material-ui/lib/app-bar'


class Head extends Component {
    render() {
        return (
            <AppBar title="React material ui study" showMenuIconButton={false}/>
        )
    }
}

export default Head;