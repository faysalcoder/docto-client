import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../../Shared/Banner/Banner'
import BootstrapDialogTitle from '../Dashboard/Review/Reviewpop';
import Explore from './Explore';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import autoprefixer from 'autoprefixer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Explore></Explore>
            <div style={{ margin: '0 auto', display: 'flex', justifyContent: "center" }}>
                <BootstrapDialogTitle></BootstrapDialogTitle>
            </div>

            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;