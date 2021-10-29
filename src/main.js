import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import Form from "react-bootstrap/Form";
import HornedBeasts from './horned_beasts.js';
import data from './data.json';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            gallary: data
        }
    }
    filter=(event) => {
        const numOfHorns= parseInt(event.target.value);
        let gallary = data;
        if (numOfHorns){
           gallary = data.filter(beast => beast.horns === numOfHorns) 
        }
        this.setState({gallary:gallary});
    }
    render() {
        return (
            <>
                <h2>
                    Nice Horns!
                </h2>
                <Form onChange={this.filter}>
                    <Form.Label>Choose Number of Horns!</Form.Label>
                   <Form.Select>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">One Hundred</option>
                    <option value="">All</option>
                   </Form.Select>
                </Form>
                <Container fluid id="mainContainer">
                    <Row xs={4} sm={5} md={7} lg={9}>
                        {this.state.gallary.map((beast, idx) => (
                            <HornedBeasts updateBeast={this.props.updateBeast} beast={beast} key={idx} />
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}