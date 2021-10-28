import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import description from '../src/data.json'
import HornedBeasts from './horned_beasts.js'

export default class Main extends Component {
    render() {
        return(
            <>
            <h2>
                Nice Horns!
            </h2>
            <Container id="mainContainer">
                <Row xs={1} sm={2} md={3} lg={4}>
                    {description.map(beast => (
                        <HornedBeasts beast={beast} />
                    ))}
                </Row>
            </Container>
            </>
        )
    }
}