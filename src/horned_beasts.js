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
        this.props.updateBeast(this.props.beast);
    }

    render() {
        return (
            <Card style={{width: '18rem'}} id='beastCard' >
                <Card.Img onClick={this.handleClick} variant="bottom" src={this.props.beast.image_url} alt={this.props.beast.description} />
                <Card.Body>
                    <Card.Title>{this.props.beast.Title}</Card.Title>
                    <Card.Text>
                        {this.props.beast.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleClick}>{'❤️ '}{this.state.likes}</Button>
                </Card.Body>
            </Card>
        )
    }
}