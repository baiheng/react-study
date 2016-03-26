import React from 'react'


class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sale_title: "abcd"
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.setState({
            sale_title: "sdafadf"
        });
        // $('.ui.checkbox').checkbox();
    }

    componentWillReceiveProps(nextProps){
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(nextProps, nextState){
    }

    componentDidUpdate(prevProps, prevState){
    }

    componentWillUnmount(){
    }

  render() {

    return (
		<div>
            <div className="ui grid" id="a">
                <div className="row">
                    <form className="ui form">
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name" />
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>  
                </div>
            </div>
        </div>
    )
  }
}

module.exports = First