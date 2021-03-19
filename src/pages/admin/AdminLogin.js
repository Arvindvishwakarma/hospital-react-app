import {React, useRef, useState} from 'react';
import { Card, Container, Row , Col ,Form, Button} from 'react-bootstrap';
import AuthContext from '../../context/auth-context';

function AdminLogin(){
     let adminId = useRef(null)
     let password = useRef(null)

    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const AdminId = adminId.current.value;
        const Password = password.current.value;

        if(AdminId.trim().length === 0 || Password.trim().length === 0){
            return;
        }

        console.log(AdminId, password);

        // const requestBody = {
        //     query: `
        //         mutation{
        //             createAdmin(AdminInput:{
        //                 adminId:"${AdminId}"
        //                 password:"${Password}"
        //                 role:"super"
        //               })
        //               {
        //                 _id
        //                 adminId
        //                 password
        //                 role
        //               }
        //         }

        //     `
        // };

        const requestBody = {
            query: `
                query{
                    adminLogin(loginId:"${AdminId}",password:"${Password}")
                    {
                        adminId
                        token
                        tokenExpiration
                    }
                }

            `
        };

        
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed')
            }
            return res.json()
        })
        .then(resData => {
            console.log(resData)
            if(resData.data.adminLogin.token) {
                AuthContext.login(
                    resData.data.adminLogin.adminId,
                    resData.data.adminLogin.token,
                    resData.data.adminLogin.tokenExpiration
                    )
            }
        })
        .catch(err => {
            console.log(err)
        })
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
                
                <Form  onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12">
                                                <Form.Label>Admin Login Id</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Login Id"
                                                    ref={adminId}
                                                    
                                                />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} md="12">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    ref={password}
                                                />
                                            </Form.Group>
                                            </Form.Row>         
                                        <Button type="submit">Log In</Button>
                                    </Form>
                                    <center>Don't have an account? Register here</center>
                                    
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