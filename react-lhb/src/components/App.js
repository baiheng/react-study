import React from 'react'


class App extends React.Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                top: '0px',
                bottom: '0px',
                left: '0px',
                right: '0px',
            }}>
                {this.props.children}
            </div>
        )
    }
}

module.exports = App