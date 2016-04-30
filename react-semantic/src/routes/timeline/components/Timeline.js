import React from 'react'


class Timeline extends React.Component {
    componentDidMount(){
        this.props.changeItem("two");
    }
    render() {
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col w-lg bg-light dk b-r bg-auto">
                    <div className="wrapper bg b-b">
                        <button className="btn btn-sm btn-success pull-right" ui-toggle-className="timeline-center">
                            Center
                        </button>
                        <h3 className="m-n font-thin">Timeline</h3>
                    </div>
                    <div className="wrapper">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Event name" className="input-sm form-control" />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" placeholder="Event name" className="input-sm form-control" />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="text" placeholder="eg. 3:00 pm" className="input-sm form-control" />
                            </div>
                            <div className="form-group">
                                <label>Type</label>
                                <div>
                                    <div className="btn-group dropdown">
                                        <button data-toggle="dropdown" className="btn btn-sm btn-default dropdown-toggle">
                                            <span className="dropdown-label">Choose a type</span> 
                                            <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a>Travel</a></li>
                                            <li><a>Phone</a></li>
                                            <li><a>Meeting</a></li>
                                            <li><a>Appointment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="m-t-md m-b-md"><button className="btn btn-sm btn-primary">Add an event</button></div>
                        </form>
                    </div>
                </div>

                <div className="col">
                    <div className="wrapper">
                        <ul className="timeline timeline-center">
                            <li className="tl-header">
                                <div className="btn btn-info">Now</div>
                            </li>
                            <li className="tl-item">
                                <div className="tl-wrap b-info">
                                    <span className="tl-date">5s ago</span>
                                    <div className="tl-content">
                                        Just a title
                                    </div>
                                </div>
                            </li>
                            <li className="tl-item">
                                <div className="tl-wrap">
                                    <span className="tl-date">2h ago</span>
                                    <div className="tl-content panel padder b-a">
                                        <span className="arrow left pull-up"></span>
                                        <div>Content in a panel</div>
                                    </div>
                                </div>
                            </li>
                            <li className="tl-item tl-left">
                                <div className="tl-wrap b-success">
                                    <span className="tl-date">7:30 am</span>
                                    <div className="tl-content panel bg-success padder">
                                        <span className="arrow arrow-success left pull-up hidden-left"></span>
                                        <span className="arrow arrow-success right pull-up visible-left"></span>
                                        <div className="text-lt">Oh! Colorful</div>
                                    </div>
                                </div>
                            </li>
                            <li className="tl-item">
                                <div className="tl-wrap b-primary">
                                <span className="tl-date">04.2014</span>
                                    <div className="tl-content panel padder b-a w-md w-auto-xs">
                                        <span className="arrow left pull-up"></span>
                                        <div className="text-lt m-b-sm">With Title</div>
                                        <div className="panel-body pull-in b-t b-light">
                                            <a className="thumb pull-right m-l m-t-xs avatar">
                                                <img src="img/a4.jpg" alt="..." />
                                                <i className="on md b-white bottom"></i>
                                            </a>
                                            <div className="clear">
                                                <a className="text-primary block m-b-xs">@Mike Mcalidek <i className="icon-twitter"></i></a>
                                                <a className="btn btn-addon btn-sm btn-primary m-t-xs"><i className="fa fa-eye"></i> Follow</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="tl-item tl-left">
                                <div className="tl-wrap b-primary">
                                    <span className="tl-date">04.2014</span>
                                    <div className="tl-content panel padder b-a block">
                                        <span className="arrow left pull-up hidden-left"></span>
                                        <span className="arrow right pull-up visible-left"></span>
                                        <div className="text-lt m-b-sm">Block</div>
                                        <div className="panel-body pull-in b-t b-light">
                                            <p>I'm working on a realy amazing application, It will be available soon. here is a little tease. </p>
                                            <div className="m-b m-t">                  
                                                <a className="avatar thumb-xs m-r-xs">
                                                    <img src="img/a7.jpg" alt="..." />
                                                    <i className="on b-white left"></i>
                                                </a>
                                                <a className="avatar thumb-xs m-r-xs">
                                                    <img src="img/a8.jpg" alt="..." />
                                                    <i className="busy b-white left"></i>
                                                </a>
                                                <a className="avatar thumb-xs m-r-xs">
                                                    <img src="img/a9.jpg" alt="..." />
                                                    <i className="away b-white left"></i>
                                                </a>
                                                <a className="avatar thumb-xs m-r-xs">
                                                    <img src="img/a10.jpg" alt="..." />
                                                    <i className="on b-white left"></i>
                                                </a>
                                                <a href className="btn btn-success btn-rounded font-bold"> +152 </a>
                                                <span className="h5 m-l-sm">Liked</span>              
                                            </div>
                                            <div className="panel panel-default m-t-md m-b-n-sm pos-rlt">
                                                <span className="arrow top pull-left"></span>
                                                <form>
                                                    <textarea className="form-control no-border" rows="3" placeholder="Your comment..."></textarea>
                                                </form>
                                                <div className="panel-footer bg-light lter">
                                                    <button className="btn btn-info pull-right btn-sm">Comment</button>
                                                    <ul className="nav nav-pills nav-sm">
                                                        <li><a><i className="fa fa-camera text-muted"></i></a></li>
                                                        <li><a><i className="fa fa-video-camera text-muted"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>             
                                    </div>
                                </div>
                            </li>
                            <li className="tl-header">
                                <div className="btn btn-sm btn-default btn-rounded">2014</div>
                            </li>
                            <li className="tl-item">
                                <div className="tl-wrap">
                                    <span className="tl-date">10.08.2013</span>
                                    <div className="tl-content panel padder b-a">
                                        <span className="arrow left pull-up hidden-left"></span>
                                        <span className="arrow right pull-up visible-left"></span>
                                        <div className="text-lt">A good story to hear.</div>
                                    </div>
                                </div>
                            </li>
                            <li className="tl-header">
                                <div className="btn btn-icon btn-rounded btn-default"><i className="fa fa-twitter"></i></div>
                            </li>
                            <li className="tl-item tl-left">
                                <div className="tl-wrap b-white">
                                    <span className="tl-date">5.07.2013</span>
                                    <div className="tl-content panel padder b-a">
                                        <span className="arrow left pull-up hidden-left"></span>
                                        <span className="arrow right pull-up visible-left"></span>
                                        <div className="text-lt">Yesterday is History</div>
                                    </div>
                                </div>
                            </li>
                            <li className="tl-header">
                                <div className="btn btn-sm btn-default btn-rounded">more</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = Timeline