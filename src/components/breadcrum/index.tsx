import React from 'react';
import {Breadcrumb, ConfigProvider} from 'antd';
import {NavLink} from "react-router-dom";

const Breadcrumbs: React.FC = () => (
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
                    title: <NavLink to={'/'}>Tất cả sản phẩm</NavLink>,
                },
                {
                    title: 'An Application',
                },
            ]}
        />
    </ConfigProvider>
);

export default Breadcrumbs;