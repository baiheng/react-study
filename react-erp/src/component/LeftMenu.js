import React from 'react'
import { Link } from 'react-router'


class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
    }

    shouldComponentUpdate(){
        // console.log("parent should update");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        // console.log("parent will update");
    }

    componentDidUpdate(prevProps, prevState){
    }

    componentWillUnmount(){
        // console.log("parent did unmount");
    }

    render(){
        return (
                <nav className="navi">
                    <ul className="nav">
                        <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span translate="aside.nav.HEADER">Navigation</span>
                        </li>
                        <li className={this.props.open == "one"? "active" : ""}>
                            <a className="auto" onClick={this.props.changeItem.bind(this, 'one')}>      
                                <span className="pull-right text-muted">
                                    <i className="fa fa-fw fa-angle-right text"></i>
                                    <i className="fa fa-fw fa-angle-down text-active"></i>
                                </span>
                                <i className="glyphicon glyphicon-stats icon text-primary-dker"></i>
                                <span className="font-bold" translate="aside.nav.DASHBOARD">Dashboard</span>
                            </a>
                            <ul className="nav nav-sub dk">
                                <li className="nav-sub-header">
                                    <a>
                                        <span translate="aside.nav.DASHBOARD">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/">
                                        首页
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/form">
                                        form
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/table">
                                        <b className="label bg-info pull-right">N</b>
                                        table
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={this.props.open == "two"? "active" : ""}>
                            <a className="auto" onClick={this.props.changeItem.bind(this, 'two')}>      
                                <span className="pull-right text-muted">
                                    <i className="fa fa-fw fa-angle-right text"></i>
                                    <i className="fa fa-fw fa-angle-down text-active"></i>
                                </span>
                                <i className="glyphicon glyphicon-stats icon text-primary-dker"></i>
                                <span className="font-bold" translate="aside.nav.DASHBOARD">Dashboard</span>
                            </a>
                            <ul className="nav nav-sub dk">
                                <li className="nav-sub-header">
                                    <a>
                                        <span translate="aside.nav.DASHBOARD">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/modal">
                                        modal
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/calendar">
                                        calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/layout">
                                        <b className="label bg-info pull-right">N</b>
                                        Layout
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/timeline">
                                        timeline
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
        )
    }
}
LeftMenu.defaultProps = {
    open: "one"
}
module.exports = LeftMenu