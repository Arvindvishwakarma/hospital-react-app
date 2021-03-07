import Wards from '../../components/HospitalComponents/Wards';
import Beds from '../../components/HospitalComponents/Beds';
import Doctors from '../../components/HospitalComponents/Doctors';

function HospitalDetailsPage(){
    return(
        <>
        <Wards />
        <Doctors />
        <Beds />
        </>
    )
}

export default HospitalDetailsPage;

