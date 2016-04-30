import React from 'react'


class Home extends React.Component {
    componentWillMount(){
        this.props.changeItem("one");
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <table className="table table-hover table-bordered table-condensed bg-white">
                                    <thead>
                                        <tr>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                        </tr>
                                    </thead>
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
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Home