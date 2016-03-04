import React, { PropTypes, Component } from 'react'

import Head from './head'
import LeftMenu from './left_menu'
import Body from './main_content' 


class App extends Component {
    render() {
        return (
            <div>
                <div style={{ position: "fixed", width: "100%", zIndex: 100 }}>
                    <Head />
                </div>
                <LeftMenu />
                <div 
                    style={{ 
                        position: "relative",
                        top: "66px",
                        marginLeft: "260px", 
                        padding: "20px",
                }}>
                    <Body />
                </div>
            </div>
        )
    }
}

export default App;