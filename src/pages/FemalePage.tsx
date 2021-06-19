import Header from '../components/Header';
import Carousel from '../components/Carousel';
import FemaleSection from '../components/FemaleSection';
import Footer from '../components/Footer';
import carouselfem1 from '../img/carouselfem1.jpg';
import carouselfem2 from '../img/carouselfem2.jpg';
import carouselfem3 from '../img/carouselfem3.jpg';


function FemalePage() {
    return(
        <>
            <Header /> 
            <Carousel image1={carouselfem1} image2={carouselfem2} image3={carouselfem3} image4={carouselfem1} />
            <FemaleSection />
            <Footer />
        </>
    );
}

export default FemalePage;