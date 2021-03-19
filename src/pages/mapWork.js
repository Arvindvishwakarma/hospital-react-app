import { React, useEffect, useState } from "react";
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import * as parkData from "./data/skateboard-parks.json";
import * as HosData from "./data/hospitalsData.json";
import { Table } from 'react-bootstrap';
import haversine from 'haversine-distance'
import HaversineGeolocation from 'haversine-geolocation';

function MapWork() {

  const [stateHospital, setHospitals] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  
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
        //console.log(resData);
        const fetchHospitals = resData.data.getHospital;
        setHospitals(fetchHospitals);
        //console.log(fetchHospitals)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const location = []

  const user = [23.816315950465352, 78.75132087497823]
  
  let test = stateHospital.map(hos => 
      location.push({
        hospitalName: hos.hospitalName,
        distance:(haversine(user, [hos.lognitude,hos.latitude ])/1000).toFixed(2),
      }) 
  )
  console.log("Locations",location)


  return (
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


      <div>
        {/* <Table bordered hover>
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Lognitude</th>
              <th>Latitude</th>
            </tr>
          </thead>
          <tbody>
            {
              stateHospital.map(hos =>
                <tr key={hos._id}>
                  <td>{hos.hospitalName}</td>
                  <td>{hos.lognitude}</td>
                  <td>{hos.latitude}</td>
                </tr>
              )
            }
          </tbody>
        </Table> */}
        <br></br>

          
      </div>
    </div>

  )
}








// function MapWork(){
//     return(
//         <div>
//       <h1>LeafLet Map</h1>
//       <MapContainer 
//         center={[23.8160755, 78.7503016]} 
//         zoom={13} 
//         scrollWheelZoom={true} 
//         style={{ width: '50%', height: '600px' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[23.8160755, 78.7503016]}>
//           <Popup>
//             Hospital
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//     )
// }

export default MapWork;