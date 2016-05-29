import React from 'react'


class Table extends React.Component {
    componentWillMount(){
    }
    componentDidMount(){
        this.props.changeItem("one");
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <table className="table table-hover table-bordered table-condensed bg-white">
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