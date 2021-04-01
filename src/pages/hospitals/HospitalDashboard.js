import {Container, Row, Col} from 'react-bootstrap'
import Sidebar from '../../components/HospitalComponents/Sidebar'
import NavbarMenu from '../../components/NavbarMenu';
import { Redirect,useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken'

function HospitalDashboard() {

    const history = useHistory()
    const HosToken = localStorage.getItem('hosToken')

    if(!HosToken){
        return <Redirect to = "/hospital_login" />
    }

    jwt.verify(HosToken, 'hospitalSecretKey', function(err, decoded) {
        if (err) {
            history.push("/hospitalLogout")    
        }
      });
      
      var decoded = jwt.verify(HosToken, 'hospitalSecretKey');
      if(decoded){
        localStorage.setItem('hospitalIdByToken',decoded.hosUserId)
      }
      //const HosTokenById = localStorage.getItem('hospitalIdByToken')
    return (
        <>
        <NavbarMenu />
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center',marginTop:'30px'}}>Hospital Dashboard</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Sidebar />
            </Container>
        </>
    )
}


export default HospitalDashboard;