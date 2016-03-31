import React from 'react'


class Form extends React.Component {
    componentDidMount(){
        $('.ui.radio.checkbox').checkbox();
        $('.ui.checkbox').checkbox();
    }
    render() {
        return (
            <div className="ui grid" style={{margin:"0px",}}>
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
                        <div className="inline field">
                            <div className="ui slider checkbox">
                                <input type="checkbox" tabIndex="1" className="hidden" id="a" />
                                <label>Slider</label>
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui toggle checkbox">
                                <input type="checkbox" tabIndex="2" className="hidden" />
                                <label>Toggle</label>
                            </div>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
  }
}

module.exports = Form