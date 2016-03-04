import React, { PropTypes, Component } from 'react'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Paper from 'material-ui/lib/paper';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

function wrapState(ComposedComponent) {
    class StateWrapper extends Component{
        constructor(props, context) {
            super(props, context);
            this.state = {selectedIndex: 1};
        }

        handleUpdateSelectedIndex(e, index) {
            this.setState({
                selectedIndex: index,
            });
        }

        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    {...this.state}
                    valueLink={{
                        value: this.state.selectedIndex,
                        requestChange: this.handleUpdateSelectedIndex.bind(this)
                    }}
                />
            );
        }
    }
    return StateWrapper;
}

SelectableList = wrapState(SelectableList);

class LeftMenu extends Component {
    render() {
        return (
            <Paper zDepth={2} rounded={false}>
                <SelectableList subheader="Nested List Items">
                    <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} value={1} />
                    <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} value={2} />
                    <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}  value={3}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={4}
                                primaryText="Starred"
                                leftIcon={<ActionGrade />}
                            />,
                            <ListItem
                                key={2}
                                value={5}
                                primaryText="Sent Mail"
                                leftIcon={<ContentSend />}
                                disabled={false}
                                nestedItems={[
                                    <ListItem 
                                        key={1} 
                                        primaryText="Drafts"
                                        leftIcon={<ContentDrafts />}
                                        value={6}
                                    />,
                                ]}
                            />,
                        ]}
                    />
                </SelectableList>
            </Paper>
        )
    }
}

export default LeftMenu;