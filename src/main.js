import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
// import description from '../src/data.json'
import HornedBeasts from './horned_beasts.js'

export default class Main extends Component {
    render() {
        return(
            <>
            {/* <div>
                {this.props.beasts.map(beast => <HornedBeasts updateBeast={this.props.updateBeast} beast={beast}/>)}
            </div> */}
            <h2>
                Nice Horns!
            </h2>
            <Container fluid id="mainContainer">
                <Row xs={4} sm={5} md={7} lg={9}>
                    {this.props.beasts.map(beast => (
                        <HornedBeasts updateBeast={this.props.updateBeast} beast={beast} />
                    ))}
                </Row>
            </Container>
            </>
        )
    }
}