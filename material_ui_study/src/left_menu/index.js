import React, { PropTypes, Component } from 'react'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Paper from 'material-ui/lib/paper';

import { Router, Route, Link, browserHistory } from 'react-router'


class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1
        }
    }
    onClick(index){
        this.setState({currentIndex: index});
        console.log(this.props.location);
    }

    render() {
        var index = this.state.currentIndex;
        var action = {
            backgroundColor: "rgba(0,0,0,0.2)",
        }
        console.log(this.props.location);
        return (
            <Paper zDepth={2} rounded={false} 
            style={{
                overflow: "auto",
                position: "fixed",
                top: "66px",
                width: "250px",
                bottom: 0,
            }}>
                <List subheader="Nested List Items">
                    <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} 
                    onClick={this.onClick.bind(this, 1)} 
                    style={index == 1 ? action : {}} key={1}
                    />
                    <Link to="/sale">
                        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} 
                            onClick={this.onClick.bind(this, 2)} 
                            style={index == 2 ? action : {}} key={2}
                        />
                    </Link>
                    <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}  key={3}
                        onClick={this.onClick.bind(this, 3)} 
                        style={index == 3 ? action : {}}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />}  key={4}
                                onClick={this.onClick.bind(this, 4)} 
                                style={index == 4 ? action : {}}
                            />,
                            <ListItem
                                primaryText="Sent Mail"
                                leftIcon={<ContentSend />}
                                primaryTogglesNestedList={true}
                                key={5}
                                onClick={this.onClick.bind(this, 5)} 
                                style={index == 5 ? action : {}}
                                nestedItems={[
                                    <ListItem 
                                        primaryText="Drafts"
                                        leftIcon={<ContentDrafts />}
                                        onClick={this.onClick.bind(this, 6)} 
                                        style={index == 6 ? action : {}}
                                        key={6}
                                    />,
                                ]}
                            />,
                        ]}
                    />
                </List>
            </Paper>
        )
    }
}

export default LeftMenu;