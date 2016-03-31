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
        // console.log("will mount");
    }

    componentDidMount() {
        console.log($("#a"));
        this.setState({
            sale_title: "sdafadf"
        });
        $('.ui.checkbox').checkbox();
        $('#tbutton').popup({
            popup: $('.custom.popup'),
            on: 'click',
        });
        $('.ui.dropdown').dropdown();
    }

    componentWillReceiveProps(nextProps){
        // console.log("will receive prop");
        // console.log(nextProps);
        // console.log(this.props);
    }

    shouldComponentUpdate(){
        // console.log("should update");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("will update");
    }

    componentDidUpdate(prevProps, prevState){
        // console.log("did update");

    }

    componentWillUnmount(){
        // console.log("did unmount");
    }

    click(){
    }

    render() {
        return (
            <div>
            <table className="am-table am-table-bordered am-table-hover" onClick={this.click}>
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

                <div className="ui toggle checkbox">
                    <input type="checkbox" tabIndex="0" className="hidden"  id="a" />
                    <label>Toggle</label>
                </div>

                <div className="ui button" id="tbutton">Show flowing popup</div>
                    <div className="ui custom flowing popup top left transition hidden">
                        <div className="ui three column divided center aligned grid">
                            <div className="column">
                                <h4 className="ui header">Basic Plan</h4>
                                <p><b>2</b> projects, $10 a month</p>
                                <div className="ui button">Choose</div>
                            </div>
                            <div className="column">
                                <h4 className="ui header">Business Plan</h4>
                                <p><b>5</b> projects, $20 a month</p>
                                <div className="ui button">Choose</div>
                            </div>
                            <div className="column">
                                <h4 className="ui header">Premium Plan</h4>
                                <p><b>8</b> projects, $25 a month</p>
                                <div className="ui button">Choose</div>
                            </div>
                        </div>
                    </div>


<div className="ui dropdown">
    <div className="text">File</div>
    <i className="dropdown icon"></i>
    <div className="menu">
    <div className="item">New</div>
    <div className="item">
    <span className="description">ctrl + o</span>
    Open...
    </div>
    <div className="item">
    <span className="description">ctrl + s</span>
    Save as...
    </div>
    <div className="item">
    <span className="description">ctrl + r</span>
    Rename
    </div>
    <div className="item">Make a copy</div>
    <div className="item">
    <i className="folder icon"></i>
    Move to folder
    </div>
    <div className="item">
    <i className="trash icon"></i>
    Move to trash
    </div>
    <div className="divider"></div>
    <div className="item">Download As...</div>
    <div className="item">
    <i className="dropdown icon"></i>
    Publish To Web
    <div className="menu">
    <div className="item">Google Docs</div>
    <div className="item">Google Drive</div>
    <div className="item">Dropbox</div>
    <div className="item">Adobe Creative Cloud</div>
    <div className="item">Private FTP</div>
    <div className="item">Another Service...</div>
    </div>
    </div>
    <div className="item">E-mail Collaborators</div>
    </div>
</div>

            </div>
        )
    }
}

module.exports = Customer