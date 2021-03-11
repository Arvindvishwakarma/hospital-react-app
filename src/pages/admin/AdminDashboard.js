import {Container, Row, Col} from 'react-bootstrap'
import Sidebar from '../../components/AdminComponents/Sidebar'
function AdminDashboard() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center',marginTop:'30px'}}>Admin Dashboard</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid>

                <Sidebar />
                    {/* <Col xs={2} id="sidebar-wrapper">      
                      
                    </Col> */}
                    {/* <Col  xs={10} id="page-content-wrapper">
                    </Col>  */}

            </Container>
        </>
    )
}


export default AdminDashboard;