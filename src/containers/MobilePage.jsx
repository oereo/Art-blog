import React from 'react';
import MainContentMobile from "../components/MainContentBobile";
import SubContentMobile from "../components/SubContentMobile";
import MenuMobile from "../components/NavbarMobile";

function MobilePage() {
    return (
        <div>
            <MenuMobile/>
            <MainContentMobile/>
            <SubContentMobile/>
        </div>
    );
}

export default MobilePage;