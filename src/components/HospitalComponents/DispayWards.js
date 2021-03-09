import { Button, Table} from 'react-bootstrap';
import {useEffect, React, useState}  from 'react';


function DisplayWards() {


    const [stateWards, setWards] = useState([])


    
  useEffect(() => {
    fetchWardsData()
  },[])


    
    function fetchWardsData(){
        const requestBody = {
            query: `
            query 
            {
                getWards{
                    _id
                    wardsName
                    wardNo
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
        })
        .then(res=> {
            if(res.status !==200 && res.status !== 201) {
                throw new Error ('Failed');
            }
            return res.json();
        })
        .then(resData => {
            //console.log(resData);
            const fetchWards = resData.data.getWards;
            setWards(fetchWards);
            console.log(fetchWards)
        })
        .catch(err => {
            console.log(err);
        });
    }



    return (

        <div>
        <center><h2><u>All Wards in Hospital</u></h2></center>
        <hr></hr>
                        <Table bordered hover>
                          <thead>
                            <tr>
                              <th>Ward Name</th>
                              <th>Ward No</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                                  {
                                    stateWards.map(war => 
                                        <tr key={war._id}>

                                             <td>{war.wardsName}</td>
                                             <td>{war.wardNo}</td>
                                             <td><Button variant="warning" size="sm">Edit</Button></td>
                                             <td><Button variant="danger" size="sm">Delete</Button></td>
                                         </tr>  
                                     )
                                 }
                          </tbody>
                        </Table>

                </div> 
        


  
    )
}

export default DisplayWards;