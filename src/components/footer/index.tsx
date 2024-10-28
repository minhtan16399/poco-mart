import React from "react";
import {NavLink} from "react-router-dom";
import {FacebookIcon} from "../../shared/icon/social-media/facebook-icon";
import {TwitterIcon} from "../../shared/icon/social-media/twitter-icon";
import {GoogleIcon} from "../../shared/icon/social-media/google-icon";
import {YoutubeIcon} from "../../shared/icon/social-media/youtube-icon";

const locationData = [
    {
        key:'location',
        name: 'Văn phòng giao dịch',
        details: [
            {
                key: 'location1',
                name: 'Trang chủ'
            },
            {
                key: 'location2',
                name: 'Giới thiệu'
            },
            {
                key: 'location3',
                name: 'Sản phẩm'
            },
            {
                key: 'location4',
                name: 'Tin mới nhất'
            },
            {
                key: 'location5',
                name: 'Câu hỏi thường gặp'
            },
            {
                key: 'location6',
                name: 'Tuyển dụng'
            },
            {
                key: 'location7',
                name: 'Liên hệ'
            }
        ]
    },
    {
        key:'aboutUs',
        name: 'Về chúng tôi',
        details: [
            {
                key: 'aboutUs1',
                name: 'Trang chủ'
            },
            {
                key: 'aboutUs2',
                name: 'Giới thiệu'
            },
            {
                key: 'aboutUs3',
                name: 'Sản phẩm'
            },
            {
                key: 'aboutUs4',
                name: 'Tin mới nhất'
            },
            {
                key: 'aboutUs5',
                name: 'Câu hỏi thường gặp'
            },
            {
                key: 'aboutUs6',
                name: 'Tuyển dụng'
            },
            {
                key: 'aboutUs7',
                name: 'Liên hệ'
            }
        ]
    },
    {
        key:'policy',
        name: 'Chính sách bán hàng',
        details: [
            {
                key: 'policy1',
                name: 'Trang chủ'
            },
            {
                key: 'policy2',
                name: 'Giới thiệu'
            },
            {
                key: 'policy3',
                name: 'Sản phẩm'
            },
            {
                key: 'policy4',
                name: 'Tin mới nhất'
            },
            {
                key: 'policy5',
                name: 'Câu hỏi thường gặp'
            },
            {
                key: 'policy6',
                name: 'Tuyển dụng'
            },
            {
                key: 'policy7',
                name: 'Liên hệ'
            }
        ]
    },
    {
        key:'followUs',
        name: 'Theo dõi chúng tôi',
        details: [
            {
                key: 'followUs1',
                name: 'Trang chủ'
            },
            {
                key: 'followUs2',
                name: 'Giới thiệu'
            },
            {
                key: 'followUs3',
                name: 'Sản phẩm'
            },
            {
                key: 'followUs4',
                name: 'Tin mới nhất'
            },
            {
                key: 'followUs5',
                name: 'Câu hỏi thường gặp'
            },
            {
                key: 'followUs6',
                name: 'Tuyển dụng'
            },
            {
                key: 'followUs7',
                name: 'Liên hệ'
            }
        ]
    }
];

const Footer: React.FC = () => {
    return (
        <footer id={'footer'} className={'bg-[#24272e] pt-12 pb-5'}>
            <div className={'container mx-auto px-2 md:px-10 lg:px-0'}>
                <div id={'footer-top'}>
                    <div className={'w-full grid lg:grid-cols-4 grid-cols-1 gap-5 lg:gap-0 md:grid-cols-2'}>
                        {locationData.map((items)=> (
                            <div key={items.key} className={'flex flex-col gap-6'}>
                                <div className={'text-white font-bold uppercase'}>{items.name}</div>
                                <div>
                                    <ul>
                                        {items.details.map(detail => (
                                            <li key={detail.key} >
                                                <NavLink to={`/`} className={'text-[#8b8e96] leading-6 hover:text-[#ffb416]'}>
                                                    {detail.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className={'my-8 border-[#373a43]'}/>
                <div id={'footer-bot'}>
                    <div className={'grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2'}>
                        <div className={'flex flex-col gap-6'}>
                            <div className={'text-white font-bold uppercase'}>Thiên đường mua sắm Poco Mart</div>
                            <ul className={'text-[#8b8e96] leading-6'}>
                                <li>Copyright@ 2021 Công ty cổ phần thương mại Poco Mart</li>
                                <li>Chứng nhận ĐKKD số: 0388282938 do sở KH & ĐT TP.Hà Nội cấp</li>
                                <li>Địa chỉ: Tòa nhà Ladeco 266 Đội Cấn, Ba Đình, Hà Nội</li>
                                <li>Điện thoại:
                                    <NavLink className={'hover:text-[#ffb416]'} to={'tel:19006750'}> 19006750 </NavLink>
                                    - Email:
                                    <NavLink className={'hover:text-[#ffb416]'} to={'mailto:support@sapo.vn'}> support@sapo.vn</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={'flex flex-col gap-6'}>
                            <div className={'text-white font-bold uppercase'}>Nhận tin khuyến mãi</div>
                            <div>
                                <form className={'flex items-center gap-1 bg-white'}>
                                    <input className={'w-full mx-5 outline-none bg-transparent'} placeholder={'Nhập email của bạn'}/>
                                    <button className={'py-3 px-5 bg-red-600 text-nowrap text-white hover:bg-red-400'}>
                                        Đăng ký
                                    </button>
                                </form>
                            </div>
                            <div className={'flex gap-2'}>
                                <NavLink to={'/'} className={'social-button relative before:bg-[#3B5998] overflow-hidden bg-white size-10 flex justify-center items-center'}>
                                    <div className={'w-2.5 text-[#3B5998]'}>
                                        <FacebookIcon/>
                                    </div>
                                </NavLink>
                                <NavLink to={'/'} className={'social-button relative before:bg-[#3CF] overflow-hidden bg-white size-10 flex justify-center items-center'}>
                                    <div className={'w-4 text-[#3CF]'}>
                                        <TwitterIcon/>
                                    </div>
                                </NavLink>
                                <NavLink to={'/'} className={'social-button relative before:bg-[#DC4A38] overflow-hidden bg-white size-10 flex justify-center items-center'}>
                                    <div className={'w-4 text-[#DC4A38]'}>
                                        <GoogleIcon/>
                                    </div>
                                </NavLink>
                                <NavLink to={'/'} className={'social-button relative before:bg-[#f44336] overflow-hidden bg-white size-10 flex justify-center items-center'}>
                                    <div className={'w-5 text-[#f44336]'}>
                                        <YoutubeIcon/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;