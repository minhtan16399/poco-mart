import React from "react";
import Banner from "../../components/home/banner";
import {ListProduct} from "../../components/home/list-product";

const Home: React.FC = () => {
    return (
        <div className={''}>
            <div className={'container mx-auto'}>
                <div id={'banner'} className={'py-2.5'}>
                    <Banner />
                </div>
                <div id={'list-product'} className={'pt-10 pb-5'}>
                    <ListProduct/>
                </div>
            </div>
        </div>
    )
};

export default Home;