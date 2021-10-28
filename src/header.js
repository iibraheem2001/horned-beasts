import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';




export default class header extends Component {
    render() {
        return(
            <Navbar expand="lg" bg="dark" variant="dark" id="navBarHeader">
                <Navbar.Brand>Horned Beasts</Navbar.Brand>   
            </Navbar>
        )
    }
}

