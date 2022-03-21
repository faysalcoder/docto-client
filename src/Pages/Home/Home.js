import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../../Shared/Banner/Banner'
import BootstrapDialogTitle from '../Dashboard/Review/Reviewpop';
import Explore from './Explore';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Explore></Explore>
            <BootstrapDialogTitle></BootstrapDialogTitle>
            <h1> This is Home</h1>

        </div>
    );
};

export default Home;