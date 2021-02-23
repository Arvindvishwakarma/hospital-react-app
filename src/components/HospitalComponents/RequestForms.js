import React from 'react';
import { Card, Container, Row , Col ,Form, Button,handleSubmit,validated} from 'react-bootstrap';

function RequestForms(){
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <>
     <Container style={{ marginTop: '30px' }} >
    <Card style={{borderRadius:'30px 30px 30px 30px'}}>
    <Card.Header style={{textAlign:'center',fontWeight:'700',borderRadius:'5px 5px 0 0px',fontSize:'1.6rem', backgroundColor:'#2980b9',color:'white',borderRadius:'30px 30px 0px 0px'}}>Register Your Hospital </Card.Header>
        <Card.Body style={{marginTop:'-20px',marginBottom: '-20px'}}>
            <Row>
                <Col md={5} className="col_img">
                </Col>
                <Col md={7}  style={{marginTop:'20px'}}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                <Form.Label>Hospital Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Hospital Name"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Hospital name.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                <Form.Label>Owner Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Owner  Name"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Owner name.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                <Form.Label>Owner Contact No.</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Owner Contact number"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Correct Owner Contact NO.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                                <Form.Label>Owner Email Address</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Owner Email Id"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Owner Email Id.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                                <Form.Label>Hospital Registration Number</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Hospital Registration Number "
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Correct Registration Number.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom06">
                                                <Form.Label>Hospital Type</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    
                                                    as="select">
                                                    <option>Select Hospital Type</option>
                                                    <option>PHC</option>
                                                    <option>CHC</option>
                                                    <option>District Hospital</option>
                                                    <option>Specialised Hospital</option>
                                                    <option>Super Speciality</option>
                                                    <option>General Hospital</option>
                                                    <option>Civil Hospital</option>
                                                    <option>Medical College</option>
                                                    </Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Hospital Type.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom07">
                                                <Form.Label>Government</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    
                                                    as="select">
                                                    <option>Select Category of Hospital </option>
                                                    <option>Central</option>
                                                    <option>State</option>
                                                    <option>Autonomus</option>
                                                    <option>Society</option>
                                                    <option>Cooperative</option>
                                                    </Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide Hospital Category.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            
                                        </Form.Row>
                                        
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationCustom08">
                                                <Form.Label>Hospital Address</Form.Label>
                                                <Form.Control 
                                                    as="textarea"
                                                    required
                                                    type="text"
                                                    placeholder="Enter Your Hospital Address "
                                          
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide correct Address.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom09">
                                                <Form.Label>State in which hospital Located</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter State"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter Correct State.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom10">
                                                <Form.Label>District in which hospital Located</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter District"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter Correct District.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationCustom11">
                                                <Form.Label>Hospital Website:</Form.Label>
                                                <Form.Control 
                                                    as="textarea"
                                                    required
                                                    type="text"
                                                    placeholder="Enter Your Hospital Website "
                                          
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide correct Website.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom12">
                                                <Form.Label> Please Enter Hospital Longitude</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Longitude"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter Correct Longitude.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom13">
                                                <Form.Label>Enter Hospital Latitude</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Latitude"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter Correct Latitude.
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <center>
                                        <Button type="submit">Submit form</Button>
                                        </center>
 
                                    </Form>
                </Col>
            </Row>
        </Card.Body>
    </Card>
     </Container>
<br></br>
        </>
    )
}

export default RequestForms;