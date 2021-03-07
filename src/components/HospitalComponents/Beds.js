import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';


function Beds() {

  let privateBeds = useRef(null)
  let generalBeds = useRef(null)

  const handleSubmit = (event) => {

    event.preventDefault();
    const PrivateBeds = privateBeds.current.value;
    const GeneralBeds = generalBeds.current.value;
    
    
    console.log(
      PrivateBeds,
      GeneralBeds
    )

    if(PrivateBeds !== '' && GeneralBeds !== ''){
      const requestBody = {
        query: `
                mutation {
                  createBeds(id:"60411d16cae7d553dd4199ff",BedInput:{
                    privateBeds:${PrivateBeds}
                    generalBeds:${GeneralBeds}
                  })
                  {
                    _id
                    privateBeds
                    generalBeds
                  }
                }
                `
      };
  
  
  
      fetch('http://localhost:4000/graphql',{
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-Type' : 'application/json'
          }
      });
  
      alert("Beds Entered Successfully.")
      event.target.reset();
    }
    else{
      alert("Enter Somthing.")
      event.target.reset();
    }
    


};

  return (

    <>
    <h1>Beds</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Private Beds:</Form.Label>
          <Form.Control type="text" placeholder="Enter Private Beds No" ref = {privateBeds}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>General Beds:</Form.Label>
          <Form.Control type="text" placeholder="Enter General Beds No"  ref = {generalBeds}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
    </>

  );

}
export default Beds;


