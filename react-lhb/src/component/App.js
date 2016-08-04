import React from 'react'

import Head from './Head'
import Home from './Home'


class App extends React.Component {
    render() {
        let top = "50px";
        let children = this.props.children || <Home />;
        return (
    		<div>
                <div style={{
                    position: "fixed", 
                    width: "100%",
                    height: top,
                    zIndex: "100",}}  className="app-header navbar">
                    <Head />
                </div>
                <div style={{
                    position: "absolute",
                    top: top,
                    bottom: '0px',
                    left: '0px',
                    right: '0px',
                }}>
                    {children}
                </div>
            </div>
        )
    }
}

module.exports = App