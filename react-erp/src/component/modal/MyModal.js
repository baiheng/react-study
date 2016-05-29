import React from 'react'
import {Modal, OverlayTrigger, Tooltip} from 'react-bootstrap'


class MyModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        }
    }

    componentWillMount(){
        this.props.changeItem("two");
    }
    showModal() {
        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false});
    }

    componentDidMount(){
    }

    render() {
        return (
            <div className="container-fluid" style={{margin:"0px",}}>
                <div className="row">
                    <button className="btn m-b-xs w-xs btn-default" onClick={this.showModal.bind(this)}>Follow </button>
                </div>
                <div className="row">
                <OverlayTrigger placement="top" 
                overlay={<Tooltip id="overlay">Holy guacamole!Check this info.</Tooltip>}>
                    <i className="fa fa-circle-thin" 
                    data-content="Hello. This is an inverted popup" 
                    data-variation="inverted"></i>
                </OverlayTrigger>    
                </div>
                <Modal
                    show={this.state.show}
                    onHide={this.hideModal.bind(this)}
                    backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Wrapped Text</h4>
                        <p>Ipsum molestiae natus adipisciPossimuAsperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
                         similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={this.hideModal.bind(this)}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

module.exports = MyModal