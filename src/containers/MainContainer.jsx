import React from 'react';
import MainContent from "../components/MainContent";
import Menu from "../components/Navbar";
import SubContent from "../components/SubContent";

function MainContainer() {
    return (
        <div>
            <Menu/>
            <MainContent/>
            <SubContent/>
        </div>
    );
}

export default MainContainer;