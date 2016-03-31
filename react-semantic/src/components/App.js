import React from 'react'

import Head from './Head'
import LeftMenu from './LeftMenu'


class App extends React.Component {
    componentDidMount() {
        // console.log(this.props.location.pathname);
    }
    render() {
        let top = "65px";
        let left = "250px";
        return (
    		<div>
                <div style={{
                    position: "fixed", 
                    width: "100%",
                    height: top,
                    backgroundColor: "#5F9EA0",
                    zIndex: "100",}}>
                    <Head />
                </div>
                <div style={{
                    overflow: "auto",
                    position: "fixed",
                    top: top,
                    width: left,
                    bottom: "0",}} className="left_menu">
                    <LeftMenu pathname={this.props.location.pathname} />
                </div>
                <div style={{
                    position: "relative",
                    top: top,
                    marginLeft: left,
                    padding: "20px"}}>
                    {this.props.children || "black"}
                </div>
            </div>
        )
    }
}

module.exports = App