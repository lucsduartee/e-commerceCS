import Header from '../components/Header';
import MaleSection from '../components/MaleSection';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import carouselmasc1 from '../img/carouselmasc1.jpg';
import carouselmasc2 from '../img/carouselmasc2.jpg';
import carouselmasc3 from '../img/carouselmasc3.jpg';
import carouselgeral from '../img/carouselgeral.jpg';


function MalePage() {
    return(
        <>
            <Header /> 
            <Carousel image1={carouselmasc1} image2={carouselmasc3} image3={carouselmasc2} image4={carouselmasc1} />
            <MaleSection />
            <Footer />
        </>
    );
};

export default MalePage;