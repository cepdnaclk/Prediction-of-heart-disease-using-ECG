import { useNavigate } from 'react-router-dom';

import NavBar1 from '../components/NavBar1';
import RegistrationForm from '../components/RegistrationForm';
import Layout from '../components/layout/Layout';

function RegistrationPage(){

    const navigate = useNavigate();

    async function registerHandler(registerData) {
        const response = await fetch(
            'https://react-6sp-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(registerData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        /*replace this later and develop the function for else part*/
        /*
        const data = await response.json();
        if(data.status==="SignedUp"){
            navigate('/');
        }
        */
        navigate('/upload');
        
    }

    return (
        <>
        <NavBar1 link1="" link1_name="Features" link2="" link2_name="Pricing" link3="" link3_name="Contact" link4="/" link4_name="Back to Homepage" link5="/login" link5_name="Login" />
        <Layout>
            <RegistrationForm onRegister={registerHandler}/>
        </Layout>
        </>
    );
}

export default RegistrationPage;