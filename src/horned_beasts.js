import { Component } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        return (
            <Card id='beastCard' >
                <Card.Img variant="bottom" src={this.props.beast.image_url} alt={this.props.beast.description} />
                <Card.Body>
                    <Card.Title>{this.props.beast.Title}</Card.Title>
                    <Card.Text>
                        {this.props.beast.description}
                    </Card.Text>
                    <button variant="primary" onClick={this.handleClick}>{'LIKE'}{this.state.likes}</button>
                </Card.Body>
            </Card>
        )
    }
}