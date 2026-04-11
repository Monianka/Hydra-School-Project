import React from 'react';
import Header from '../components/Header';
import Courses from './Courses';
import About from './About';
import './Home.css';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

const Home=()=>{
    return (
        <div className="home-container">
            <Header />
            <main>
                <section id="hero" className='animate-slide-in-left'>
                    <HeroSection />
                </section> 
                <section id="courses" className='animate-slide-in-left'>
                    <Courses />
                </section>
                <section id="about" className='animate-slide-in-left'>
                    <About showSectionHeader />
                </section>
                <section id="blog" className='animate-slide-in-left'>
                    <BlogSection />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home;