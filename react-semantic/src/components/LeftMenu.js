import React from 'react'
import { Link } from 'react-router'


class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent construct");
    }

    componentWillMount() {
        // console.log("parent will mount");
    }

    componentDidMount() {
        $('.ui.accordion').accordion({'exclusive': false});
        this.openAccordion();
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
        this.openAccordion();
    }

    componentWillUnmount(){
        // console.log("parent did unmount");
    }

    openAccordion(){
        if(["/", "/form", "/table"].includes(this.props.pathname)){
            $('.ui.accordion').accordion('open', 0);
        }else{
            $('.ui.accordion').accordion('open', 1);
        }
    }

    render() {
        return (
            <div className="ui styled fluid accordion" style={{borderRadius:0}}>
                <div className="title left_menu_title">
                    <i className="dropdown icon"></i> What is a dog?
                </div>
                <div className="content left_menu"  style={{padding:0}}>
                    <div className="ui large relaxed  list">
                        <Link to="/" className="item left_menu_item">
                            home
                        </Link>
                        <Link to="/form" className="item left_menu_item">
                            form
                        </Link>
                        <Link to="/table" className="item left_menu_item">
                            table
                        </Link>
                    </div>
                </div>
                <div className="title left_menu_title">
                    <i className="dropdown icon"></i> What kinds of dogs are there? 
                </div>
                <div className="content left_menu" style={{padding:0}}>
                    <div className="ui large relaxed selection list">
                        <Link to="/modal" className="item left_menu_item">
                            modal
                        </Link>
                        <a className="item left_menu_item">
                            Settings
                        </a>
                        <a className="item left_menu_item">
                            Settings
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = LeftMenu