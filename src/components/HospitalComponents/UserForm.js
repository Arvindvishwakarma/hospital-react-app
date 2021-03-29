import React, { useEffect, useRef } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

function UserForm() {
    const [validated, setValidated] = React.useState(false);
    const [wardByHosId, setWardByHosId] = React.useState([]);
    const [wardNameSelect, setWardNameSelect] = React.useState('');
    const [BedType, setBedType] = React.useState([]);

    
    

    useEffect(() => {
        fetchWardsByHosId()
    }, [])







    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };








    function fetchWardsByHosId() {

        const requestWard = {
            query: `
               query {
                    getBedsByHosId(hospitalId:"604a52a7d8f0c46d091ba2ad"){
                        _id
                        privateBeds
                        generalBeds
                        wardsName
                    }
                }
                  `
        };




        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestWard),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed');
                }
                return res.json();
            })
            .then(resData => {
                const fetchWards = resData.data.getBedsByHosId;
                setWardByHosId(fetchWards);
                console.log("WardsByHosId", fetchWards)
            })
            .catch(err => {
                console.log(err);
            });

    }

    function fetchBedType(e) {

        const requestBedType = {
            query: `
               query {
                getBedTypeByHosId(hospitalId:"604a52a7d8f0c46d091ba2ad",wardName:"${e}"){
                    _id
                    privateBeds
                    generalBeds
                    wardsName
                  }
                }
                  `
        };




        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBedType),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed');
                }
                return res.json();
            })
            .then(resData => {
                const fetchBedType = resData.data.getBedTypeByHosId;
                setBedType(fetchBedType);
            })
            .catch(err => {
                console.log(err);
            });




    }

    console.log("WardsByHosId", wardByHosId)
    console.log("WardName", wardNameSelect)
    console.log("BedType", BedType)
    return (
        <>
            <Container style={{ marginTop: '30px' }} >
                <Card style={{ borderRadius: '30px 30px 30px 30px' }}>
                    <Card.Header style={{ textAlign: 'center', fontWeight: '700', borderRadius: '5px 5px 0 0px', fontSize: '1.6rem', backgroundColor: '#2980b9', color: 'white', borderRadius: '30px 30px 0px 0px' }}>Fill Patient Details</Card.Header>
                    <Card.Body style={{ marginTop: '-20px', marginBottom: '-20px' }}>
                        <Row>
                            <Col md={5} className="col_img">
                            </Col>
                            <Col md={7} style={{ marginTop: '20px' }}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Patient First Name"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Patient First name.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Patient Last name"

                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Patient Last name
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                                            <Form.Label>Aadhar Number</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Aadhar Number "
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Aadhar Number.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                                            <Form.Label>Contact No.</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Contact number"

                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Correct Contact NO.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Email Id"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Email Id.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom07">
                                            <Form.Label>Date Of Birth</Form.Label>
                                            <Form.Control
                                                required
                                                type="date"


                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Correct Date Of Birth.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"

                                                as="select">
                                                <option>Select Gender</option>

                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Gender.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                                            <Form.Label>Marital Status</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"

                                                as="select">
                                                <option>Select Marital Status</option>

                                                <option>Married</option>
                                                <option>Unmarried</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Marital Status.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom10">
                                            <Form.Label>Patient Disease</Form.Label>
                                            <Form.Control

                                                required
                                                type="text"
                                                placeholder="Enter Patient Disease "

                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please Enter Patient Diseas.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom11">
                                            <Form.Label>Age</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Patient Age"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please Enter Patient Age.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>


                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="12" controlId="validationCustom12">
                                            <Form.Label>Patient Permanent Address:</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                required
                                                type="text"
                                                placeholder="Enter Patient Permanent Address:"

                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please Patient Permanent Address:.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom13">
                                            <Form.Label>State:</Form.Label>
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
                                        <Form.Group as={Col} md="6" controlId="validationCustom14">
                                            <Form.Label>District:</Form.Label>
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
                                        <Form.Group as={Col} md="6" controlId="validationCustom15">
                                            <Form.Label>City:</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter City"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter Correct City.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom16">
                                            <Form.Label>Enter Pincode:</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter Pincode"

                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter Correct Pincode.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                                            <Form.Label>Ward</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                as="select"
                                                onChange={e => {
                                                    setWardNameSelect(e.target.value)
                                                    fetchBedType(e.target.value)
                                                }
                                                }>
                                                <option>Select Any Wards</option>
                                                {
                                                    wardByHosId === null ? null :
                                                        wardByHosId.map(ward =>
                                                            <option key={ward._id}>{ward.wardsName}</option>
                                                        )

                                                }


                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Ward.
                                                </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                                            <Form.Label>Bed Type</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                as="select">
                                                <option>General Beds: {BedType.generalBeds}</option>
                                                <option>Private Beds: {BedType.privateBeds}</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Bed Type.
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

export default UserForm;