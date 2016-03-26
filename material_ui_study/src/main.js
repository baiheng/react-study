import React, { PropTypes, Component } from 'react'

import Head from './head'
import LeftMenu from './left_menu'


class App extends Component {
    constructor(props) {
        super(props);
        // console.log("parent construct");
    }

    componentWillMount() {
        // console.log("parent will mount");
    }

    componentDidMount() {
        

    }

    componentWillReceiveProps(nextProps){
        // console.log("parent will receive prop");
    }

    shouldComponentUpdate(){
        // console.log("parent should update");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        // console.log("parent will update");
    }

    componentDidUpdate(prevProps, prevState){
        // console.log("parent did update");
    }

    componentWillUnmount(){
        // console.log("parent did unmount");
    }
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
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;