import React, { PropTypes, Component } from 'react'

import Head from './head'
import LeftMenu from './left_menu/left_menu'


class App extends Component {
    render() {
        return (
            <div>
                <div style={{ position: "fixed", width: "100%" }}>
                    <Head />
                </div>
                <div style={{
                    overflow: "auto",
                    position: "fixed",
                    top: "66px",
                    width: "250px",
                    bottom: 0,
                    borderRight: "1px solid #A52A2A",}}>
                    <LeftMenu />
                </div>
            </div>
        )
    }
}

export default App;