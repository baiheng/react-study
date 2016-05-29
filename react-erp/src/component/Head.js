import React from 'react'
import { Link } from 'react-router'
import {Dropdown, MenuItem} from 'react-bootstrap'

class Head extends React.Component {
  render() {
    return (
        <div>
			<div className="navbar-header bg-primary">
				<button className="pull-right visible-xs dk" data-target=".navbar-collapse">
					<i className="glyphicon glyphicon-cog"></i>
				</button>
				<button className="pull-right visible-xs" data-target=".app-aside">
					<i className="glyphicon glyphicon-align-justify"></i>
				</button>
				<Link to="/" className="navbar-brand text-lt">
					<i className="fa fa-btc"></i>
					<img src="img/logo.png" alt="." className="hide" />
					<span className="hidden-folded m-l-xs">name</span>
				</Link>
			</div>

			<div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown hidden-sm">
						<a className="dropdown-toggle" data-toggle="dropdown">
							selectLang <b className="caret"></b>
					      	<span className="badge badge-sm up bg-danger pull-right-xs">2</span>
						</a>
					    <div className="dropdown-menu w-xl animated fadeInUp">
					      	<div className="panel bg-white">
					        	<div className="panel-heading b-light bg-light">
					          		<strong>You have <span>2</span> notifications</strong>
					        	</div>
						        <div className="list-group">
						          	<a className="media list-group-item">
						            	<span className="pull-left thumb-sm">
						            	</span>
						            	<span className="media-body block m-b-none">
						              		Use awesome animate.css<br/>
						              		<small className="text-muted">10 minutes ago</small>
						            	</span>
						          	</a>
						          	<a className="media list-group-item">
						            	<span className="media-body block m-b-none">
						              		1.0 initial released<br/>
						              		<small className="text-muted">1 hour ago</small>
						            	</span>
						          	</a>
						        </div>
						        <div className="panel-footer text-sm">
						          	<a className="pull-right"><i className="fa fa-cog"></i></a>
						          	<a data-toggle="className:show animated fadeInRight">See all the notifications</a>
						        </div>
					      	</div>
					    </div>
					</li>
				  	<li className="dropdown" aria-haspopup="true" aria-expanded="false">
					    <a className="dropdown-toggle" data-toggle="dropdown">
					    	&nbsp;<i className="fa fa-bell-o"></i>
					    	<span className="badge badge-sm up bg-danger pull-right-xs">2</span>
					    </a>
					    <div className="dropdown-menu w-xl animated fadeInUp">
					      	<div className="panel bg-white">
					        	<div className="panel-heading b-light bg-light">
					          		<strong>You have <span>2</span> notifications</strong>
					        	</div>
						        <div className="list-group">
						          	<a className="media list-group-item">
						            	<span className="pull-left thumb-sm">
						            	</span>
						            	<span className="media-body block m-b-none">
						              		Use awesome animate.css<br/>
						              		<small className="text-muted">10 minutes ago</small>
						            	</span>
						          	</a>
						          	<a className="media list-group-item">
						            	<span className="media-body block m-b-none">
						              		1.0 initial released<br/>
						              		<small className="text-muted">1 hour ago</small>
						            	</span>
						          	</a>
						        </div>
						        <div className="panel-footer text-sm">
						          	<a className="pull-right"><i className="fa fa-cog"></i></a>
						          	<a data-toggle="className:show animated fadeInRight">See all the notifications</a>
						        </div>
					      	</div>
					    </div>
				  	</li>
				  	<li className="dropdown">
					    <a className="dropdown-toggle clear" data-toggle="dropdown">
					      	<span className="hidden-sm hidden-md">John.Smith</span> <b className="caret"></b>
					    </a>
					    <ul className="dropdown-menu animated fadeInRight w">
					      	<li className="wrapper b-b m-b-sm bg-light m-t-n-xs">
					        	<div>
					          		<p>300mb of 500mb used</p>
					        	</div>
					      	</li>
					      	<li>
					        	<a>
					          		<span className="badge bg-danger pull-right">30%</span>
					          		<span>Settings</span>
					        	</a>
					      	</li>
					      	<li>
					        	<a>Profile</a>
					      	</li>
					      	<li>
					        	<a>
					          	<span className="label bg-info pull-right">new</span>
					          	Help
					        	</a>
					      	</li>
					      	<li className="divider"></li>
					      	<li>
					        	<a>Logout</a>
					      	</li>
					    </ul>
				  	</li>
				</ul>
			</div>
        </div>
    )
  }
}

module.exports = Head