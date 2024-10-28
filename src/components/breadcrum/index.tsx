import React from 'react';
import {Breadcrumb, ConfigProvider} from 'antd';
import {NavLink} from "react-router-dom";

const Breadcrumbs = ({title}:{title:string}) => (
    <ConfigProvider theme={{
        components: {
            Breadcrumb: {
                lastItemColor: '#ffb416',
                linkHoverColor: '#ffb416',
            }
        }
    }}>
        <Breadcrumb
            items={[
                {
                    title: <NavLink to={'/'}>Trang chủ</NavLink>,
                },
                {
                    title: `${title}`,
                }
            ]}
        />
    </ConfigProvider>
);

export default Breadcrumbs;