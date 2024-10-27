import React from 'react';
import { Carousel } from 'antd';
import {NavLink} from "react-router-dom";

const banner = '/assets/image/banner/slider_1.png'

const Banner: React.FC = () => (
    <Carousel className={'rounded-xl overflow-hidden'} autoplay>
        <div>
            <NavLink to={'/'}>
                <img src={banner} alt="banner" className={'w-full rounded-xl overflow-hidden'}/>
            </NavLink>
        </div>
        <div>
            <img src={banner} alt="banner" className={'w-full rounded-xl overflow-hidden'}/>
        </div>
    </Carousel>
);

export default Banner;