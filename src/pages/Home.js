import { React, useState } from 'react';
import { Col, Container, Row, Card, Button, Form, InputGroup, validated, handleSubmit } from 'react-bootstrap';
import NavbarMenu from '../components/NavbarMenu';
function Home() {


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <div className="header-wraper">
        <NavbarMenu />  
            <div className="main-info">
                <Container>
                    <Row>
                        <Col style={{ marginTop: '100px' }}>
                            <Card style={{borderRadius:'30px'}}>
                            <Card.Header style={{textAlign:'center',fontWeight:'700',borderRadius:'30px 30px 0 0px',fontSize:'1.6rem', backgroundColor:'#2980b9',color:'white'}}>Book Your Bed</Card.Header>
                                <Card.Body>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Full Name"
                                                    //defaultValue="Mark"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide name.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                <Form.Label>Patient Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Patient Name"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide patient name.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                <Form.Label>Contact No</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Contact No"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide correct contact number.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                                <Form.Label>Aadhar No</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Aadhar No"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide correct aadhar number.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationCustom05">
                                                <Form.Label>Current Location</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Your Current Location"
                                          
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide correct location.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <center>
                                        <Button type="submit">Submit form</Button>
                                        </center>
 
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}


export default Home;