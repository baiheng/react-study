import React from 'react'

import Head from './Head'
import LeftMenu from './LeftMenu'
import Home from './Home'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "one",
        }
    }

    componentDidMount() {
        // console.log(this.props.location.pathname);
    }

    clickChangeItem(item){
        if(item == this.state.open){
            this.changeItem("null");
        }else{
            this.changeItem(item);
        }
    }

    changeItem(item){
        this.setState({open: item});
    }

    render() {
        let top = "50px";
        let left = "200px";
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
                    overflowY: "auto",
                    overflowX: "hidden",
                    position: "fixed",
                    top: top,
                    width: left,
                    bottom: "0px",}} className="app-aside hidden-xs bg-dark">
                    <LeftMenu 
                        pathname={this.props.location.pathname} 
                        open={this.state.open} 
                        changeItem={this.clickChangeItem.bind(this)}
                    />
                </div>
                <div style={{
                    position: "absolute",
                    top: top,
                    bottom: '0px',
                    marginLeft: left,
                    Right: '0px',
                }}>
                    {children && React.cloneElement(children, {
                        changeItem: this.changeItem.bind(this)
                      })}
                    
                </div>
            </div>
        )
    }
}

module.exports = App