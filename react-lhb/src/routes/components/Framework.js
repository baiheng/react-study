import React from 'react'

import Head from './Head'


class Framework extends React.Component {
    render() {
        let top = "50px";
        return (
    		<div>
                <div style={{
                    position: "fixed", 
                    width: "100%",
                    height: top,
                    zIndex: "100",
                }}>
                    <Head height={top} />
                </div>
                <div style={{
                    position: "fixed",
                    top: top,
                    bottom: '0px',
                    left: '0px',
                    right: '0px',
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = Framework