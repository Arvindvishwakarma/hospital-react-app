import React, {  useState} from 'react';
import {Form, Button} from 'react-bootstrap';


function HospitalDetails(){

const [fields, setFields] = useState([{ value: null }]);
const [docfields, docsetFields] = useState([{ value: null }]);

function handleChange(i, event) {
  const values = [...fields];
  values[i].value = event.target.value;
  setFields(values);
}

function handleAdd() {
  const values = [...fields];
  values.push({ value: null });
  setFields(values);
}

function handleRemove(i) {
  const values = [...fields];
  values.splice(i, 1);
  setFields(values);
}



function handleDocChange(j, events) {
  const Doc_values = [...docfields];
  Doc_values[j].value = events.target.value;
  docsetFields(Doc_values);
}

function handleDocAdd() {
    const Doc_values = [...docfields];
    Doc_values.push({ value: null });
    docsetFields(Doc_values);
  }

  function handleDocRemove(j) {
    const Doc_values = [...docfields];
    Doc_values.splice(j, 1);
    docsetFields(Doc_values);
  }
console.log('Warde', fields)
console.log('Doctors', docfields)
    return(
        
      <div className="App">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Wards: </Form.Label>
          <Button type="button" onClick={() => handleAdd()} variant="primary">
            +
          </Button>
          {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
          <Form.Control 
          type="text" 
          placeholder="Enter Wards"
          onChange={e => handleChange(idx, e)}
           />
            <Button type="button" onClick={() => handleRemove(idx)} variant="danger">
              X
            </Button>
          </div>
        );
      })}
        </Form.Group>

      <hr></hr>

      <Form.Group controlId="formBasicEmail">
          <Form.Label>Doctors: </Form.Label>
          <Button type="button" onClick={() => handleDocAdd()} variant="primary">
            +
          </Button>
          {docfields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
          <Form.Control 
          type="text" 
          placeholder="Enter Wards"
          onChange={e => handleDocChange(idx, e)}
           />

          <Form.Control 
          type="text" 
          placeholder="Enter Wards"
          onChange={e => handleDocChange(idx, e)}
           />

          <Form.Control 
          type="text" 
          placeholder="Enter Wards"
          onChange={e => handleDocChange(idx, e)}
           />
            <Button type="button" onClick={() => handleDocRemove(idx)} variant="danger">
              X
            </Button>



         
            
          </div>
          
        );
      })}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Beds: </Form.Label>
          <br></br>
          <Form.Label>Private Beds: </Form.Label>
          <Form.Control type="text" placeholder="Enter Private Beds" />
          <Form.Label>General Beds: </Form.Label>
          <Form.Control type="text" placeholder="Enter General Beds" />
          </Form.Group>



        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
    


}
export default HospitalDetails;