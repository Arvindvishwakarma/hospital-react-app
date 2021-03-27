import { React, useEffect, useState } from "react";
import { Card, Container, Row, Col, Modal, Button, Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import NavbarMenu from '../../components/NavbarMenu'
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import haversine from 'haversine-distance'

function MapWork(props) {

  //Model open
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Model close


  
  //Model open
  const [showBook, setShowBook] = useState(false);
  const handleBookClose = () => setShowBook(false);
  const handleBookShow = () => setShowBook(true);

  //Model close

  const [stateHospital, setHospitals] = useState([])
  const [wardsById, setWardsById] = useState([])
  const [tempHospitalId, setTempHospitalId] = useState(null)
  const [tempOtp, setTempOtp] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchWardsById()
  }, [tempHospitalId])

  function fetchData() {
    const requestBody = {
      query: `
        query 
        {
            getHospital
            {
                _id
                hospitalName
                hospitalRegistrationNo
                hospitalType
                government
                address
                state
                district
                pincode
                website
                lognitude
                latitude
                ownerName
                ownerContactNo
                ownerEmail
                password
                status
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
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed');
        }
        return res.json();
      })
      .then(resData => {
        const fetchHospitals = resData.data.getHospital;
        setHospitals(fetchHospitals);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const location = []
  const user = [props.UserLocation.coordinates.lng, props.UserLocation.coordinates.lat]

  let test = stateHospital.map(hos =>
    location.push({
      hospitalId: hos._id,
      hospitalName: hos.hospitalName,
      hospitalType: hos.hospitalType,
      address: hos.address,
      distance: (haversine(user, [hos.lognitude, hos.latitude]) / 1000).toFixed(2),
    })
  )


  const sortLocation = location.sort(function (a, b) {
    return a.distance - b.distance;
  })


  console.log("Sort Locations", sortLocation)


  function fetchWardsById() {
    const requestBodyWards = {
      query: `
        query 
        {
          getWardsById(id:"${tempHospitalId}"){
            _id
            wardsName
            wardNo
          }
        }
        `
    };



    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBodyWards),
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
        const fetchWardsById = resData.data.getWardsById;
        setWardsById(fetchWardsById);
      })
      .catch(err => {
        console.log(err);
      });
  }




  console.log("WardsById", wardsById)



  function bookBed(id) {

    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setTempOtp(OTP);
    const requestBodyBookBed = {
      query: `
        mutation 
        {
          createTempUser(id:"${id}",TempUserInput:{
            UserName:"${props.userDetails.fullName}"
            PatientName:"${props.userDetails.patientName}"
            UserContect:"${props.userDetails.contact}"
            UserAadhar:"${props.userDetails.aadhar}"
            otp:"${OTP}"
          })
          {
            _id
            UserName
            PatientName
            UserContect
            UserAadhar
            otp
          }
        }
        `
    };

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBodyBookBed),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }










  return (
    <>
      <NavbarMenu />
      <Container fluid style={{ marginTop: '50px' }}>
        <Row>
          <Col>
            <div>
              <MapContainer center={[23.838804, 78.737808]} zoom={13}
                scrollWheelZoom={true}
                style={{ width: '100%', height: '600px' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                  stateHospital.map(hos => (
                    <Marker position={[
                      hos.lognitude,
                      hos.latitude
                    ]}>
                      <Popup>
                        <h5>{hos.hospitalName}</h5>
                        <p>{hos.hospitalType}</p>
                      </Popup>
                    </Marker>
                  ))
                }

              </MapContainer>
            </div>
          </Col>
          <Col>
            <Card>
              <Card.Body style={{ 'maxHeight': 'calc(100vh - 132px)', 'overflowY': 'auto' }}>


                {
                  sortLocation.map(sort =>
                    <Card style={{ marginBottom: '10px' }}>
                      <Card.Body>
                        <Card.Title>{sort.hospitalName}</Card.Title>
                        <Card.Text><strong>Distance:</strong> {sort.distance} KM, <strong>Avilable Beds:</strong> 325</Card.Text>
                        <Button variant="warning" size="sm" onClick={(id) => {
                          setTempHospitalId(sort.hospitalId)
                          handleBookShow()
                          bookBed(sort.hospitalId)
                          
                        }}>Book Bed</Button>

                        <Button variant="primary" size="sm" onClick={() => {
                          setTempHospitalId(sort.hospitalId);
                          handleShow()
                        }}  style={{marginLeft:'10px'}}>Show Wards</Button>

                      </Card.Body>
                    </Card>
                  )
                }





              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>




      <Modal
        show={show} onHide={handleClose}
        dialogClassName="my-modal"
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Hospital Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Table bordered hover>
            <tbody>
              <tr>
                <th><strong>Wards Name:</strong></th>
              </tr>
              { wardsById == null ? null :
                  wardsById.map(war =>
                  <tr>
                    <td>{war.wardsName}</td>
                  </tr>
                )
                
              }


            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showBook} onHide={handleBookClose}
        dialogClassName="my-modal"
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Hospital Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <center>
              <h2>Your bed is on hold for <strong>2 Hours</strong></h2>
              <h3>Your OTP is: <strong>{tempOtp}</strong></h3>
              <h5 style={{color:'red'}}>Valid for 2 Hours only</h5>
        </center>
              
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBookClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>







    </>
  )
}

export default MapWork;