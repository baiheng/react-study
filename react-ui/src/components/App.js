import React from 'react'

import Head from './Head'
import LeftMenu from './LeftMenu'


class App extends React.Component {
  render() {
    return (
		<div>
            <div style={{ position: "fixed", width: "100%", zIndex: 100 }}>
                <Head />
            </div>
            <div style={{
                overflow: "auto",
                position: "fixed",
                top: "66px",
                width: "250px",
                bottom: 0,
            }}>
            	<LeftMenu />
            </div>
            <div 
                style={{ 
                    position: "relative",
                    top: "66px",
                    marginLeft: "260px", 
                    padding: "20px",
            }}>
                {this.props.children || 
                    <div>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hellohello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hellohello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    hello<br/>
                    </div>
                }
            </div>
        </div>
    )
  }
}

module.exports = App