// import React from 'react'

// function Home() {
//     return (
//         <div>Home</div>
//     )
// }

// export default Home


import React from 'react';
// import Header from '../components/Header/Header';
// import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
// import Footer from '../components/Footer/Footer';
import KhakiSection from '../components/Khaki/KhakiSection';
import AcademySection from '../components/AcademySection/AcademySection';
import Hero from '../components/Hero/Hero';

function Home() {
    return (
        <div >
            <main>
                <Hero />
                <KhakiSection />
                <Features />
                <AcademySection />
            </main>
        </div>
    );
}

export default Home;