import React from 'react'


class Table extends React.Component {
    componentDidMount(){
        $('.ui.radio.checkbox').checkbox();
        $('.ui.checkbox').checkbox();
    }
    render() {
        return (
            <div className="ui grid" style={{margin:"0px",}}>
                <div className="row">
                    <table className="ui compact celled table">
                        <tbody>
                            <tr>
                                <td className="collapsing"><i className="folder icon"></i> node_modules </td>
                                <td>Initial commit</td>
                                <td>10 hours ago</td>
                            </tr>
                            <tr>
                                <td><i className="folder icon"></i> test </td>
                                <td>Initial commit</td>
                                <td>10 hours ago</td>
                            </tr>
                            <tr>
                                <td><i className="folder icon"></i> build </td>
                                <td>Initial commit</td>
                                <td>10 hours ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

module.exports = Table