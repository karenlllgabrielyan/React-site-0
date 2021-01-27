import React, {Component} from 'react';
import {Container, Form, FormCheck, FormGroup, FormLabel, Button} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container className="mt-5" style={{width: '500px'}}>
                <h1>Contact Us</h1>
                <Form >
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email Address</FormLabel>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>We'll never share you're email!</Form.Text>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                        <FormLabel>Example text area</FormLabel>
                        <Form.Control as="textarea" rows="3"/>
                    </FormGroup>

                    <FormGroup controlId="formBasicCheckbox">
                        <FormCheck type="checkbox" label="Check me out"/>
                    </FormGroup>
                    <Button variant="primary">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;