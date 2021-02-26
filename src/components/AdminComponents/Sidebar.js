import { Nav, Tab, Row, Col } from 'react-bootstrap';


function Sidebar() {

    return (
        <>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} style={{backgroundColor:'#34495e'}}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" style={{color:'white', fontSize:'20px',padding:'10px'}}>Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" style={{color:'white', fontSize:'20px',padding:'10px'}}>Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" style={{color:'white', fontSize:'20px',padding:'10px'}}>Request</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" style={{color:'white', fontSize:'20px',padding:'10px'}}>All Hospitals</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" style={{color:'white', fontSize:'20px',padding:'10px'}}>Edit Hospital</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10} style={{border:'2px solid black'}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" >
                                <Dashboard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Details />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Request />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <All />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <Edit />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}


function Dashboard() {
    return (
        <h1>Dashboard</h1>
    )
}

function Details() {
    return (
        <h1>Details</h1>
    )
}

function Request() {
    return (
        <h1>Request</h1>
    )
}

function All() {
    return (
        <h1>All</h1>
    )
}

function Edit() {
    return (
        <h1>Edit</h1>
    )
}


export default Sidebar;