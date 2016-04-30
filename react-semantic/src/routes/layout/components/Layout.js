import React from 'react'


class Layout extends React.Component {
    componentDidMount(){
        this.props.changeItem("two");
    }
    render() {
        return (
            <div className="hbox hbox-auto-xs bg-light ">

                <div className="col w lter b-r" ng-controller="CustomTabController">
                    <div className="vbox">
                        <div className="wrapper b-b">
                            <div className="font-thin h4">Header</div>
                        </div>
                        <div className="nav-tabs-alt">
                        <ul className="nav nav-tabs nav-justified">
                            <li className='active'>
                                <a>Day</a>
                            </li>
                            <li>
                                <a>Month</a>
                            </li>
                            <li>
                                <a>Year</a>
                            </li>
                            </ul>
                        </div>
                        <div className="row-row">
                            <div className="cell scrollable hover">
                                <div className="cell-inner">
                                    <div className="tab-content">
                                        <div className="tab-pane active">
                                            <div className="wrapper-sm">
                                                This is the scrollable content, hover to show the scrollbar
                                                <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                                </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                                You got the bottom
                                            </div>
                                        </div>
                                        <div className="tab-pane">
                                            <div className="wrapper-sm">
                                                Month report
                                            </div>
                                        </div>
                                        <div className="tab-pane">
                                            <div className="wrapper-sm">
                                                Year report
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="vbox">
                        <div className="row-row">
                            <div className="cell">
                                <div className="cell-inner">
                                    <div className="wrapper-md">
                                        This is the scrollable content
                                        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                        </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;
                                        </p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                                        You got the bottom
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col w-md lter b-l">
                    <div className="vbox">
                        <div className="wrapper b-b b-light">
                            <div className="font-thin h4">Header</div>
                            <small className="text-muted">with fluid height</small>
                        </div>
                        <div className="row-row">
                            <div className="cell">
                                <div className="cell-inner">
                                    <div className="wrapper-md">
                                        This is the scrollable content
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        <p>&nbsp;</p><p>&nbsp;</p>
                                        You got the bottom
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="padder b-t b-light text-center">
                            <div className="m-xs">Footer with fluid height</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = Layout