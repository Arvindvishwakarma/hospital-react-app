import React from 'react';
import { Card, Container, Row , Col ,Form, Button,handleSubmit,validated} from 'react-bootstrap';

function AdminLogin(){
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
    <Card.Header style={{textAlign:'center',fontWeight:'700',borderRadius:'5px 5px 0 0px',fontSize:'1.6rem', backgroundColor:'#2980b9',color:'white',borderRadius:'30px 30px 0px 0px'}}>Admin Login </Card.Header>
        <Card.Body style={{marginTop:'-20px',marginBottom: '-20px'}}>
            <Row>
                <Col md={5} className="log_img">
                </Col>
                <Col md={7} style={{marginLeft:'5px', padding:'112px',borderRadius:'10px'}}>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationCustom01" >
                                                <Form.Label>Login Id</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Login Id"
                                                    
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                   Enter Login Id
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="password"
                                                    placeholder="Enter Password"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                Enter Password
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            </Form.Row>         
                                        <Button id="login-btn">Log In</Button>
                                    </Form>
                                    <center>Don't have an account? <a href="#" ids="register_here">Register here</a></center>
                                    
                </Col>
            </Row>
        </Card.Body>
    </Card>
     </Container>
<br></br>
        </>
    )
}

export default AdminLogin;