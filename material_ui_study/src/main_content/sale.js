import React, { PropTypes, Component } from 'react'


class Customer extends Component {
    constructor(props) {
        super(props);
        console.log("construct");
        this.state = {
            sale_title: "abcd"
        }
    }

    componentWillMount() {
        console.log("will mount");
    }

    componentDidMount() {
        console.log("did mount");
        this.setState({
            sale_title: "sdafadf"
        });
    }

    componentWillReceiveProps(nextProps){
        console.log("will receive prop");
        console.log(nextProps);
        console.log(this.props);
    }

    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("will update");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("did update");
    }

    componentWillUnmount(){
        console.log("did unmount");
    }

    render() {
        return (
            <table className="am-table am-table-bordered am-table-hover">
                <thead>
                    <tr>
                        <th>abd</th>
                        <th>网址</th>
                        <th>创建时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>Unemployed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Stephanie Sanders</td>
                        <td>Employed</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Steve Brown</td>
                        <td>Employed</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

module.exports = Customer