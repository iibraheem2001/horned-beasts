import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component {

    handleClose = () => {
        this.props.closeModal();
    }
    render() {
        return (
            // <div>
            <Modal center='true' show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.featuredBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Img variant="bottom" src={this.props.featuredBeast.image_url} alt={this.props.featuredBeast.description} />
                        <Card.Text>
                            {this.props.featuredBeast.description}
                        </Card.Text>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            // </div>
        )
    }
}