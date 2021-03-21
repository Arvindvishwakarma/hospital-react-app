import {Container, Row, Col} from 'react-bootstrap'
import Sidebar from '../../components/HospitalComponents/Sidebar'
import NavbarMenu from '../../components/NavbarMenu';
function HospitalDashboard() {
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