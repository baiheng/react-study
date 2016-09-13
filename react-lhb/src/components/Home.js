import React from 'react'


class Home extends React.Component {
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <div style={{
                height: this.props.height,
            }}>
                Home
            </div>
        )
    }
}

Home.defaultProps = {
    height: "50px"
}

module.exports = Home
