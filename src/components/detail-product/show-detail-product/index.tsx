import React, {useState} from "react";
import {MultiImagePreview} from "../../multi-image-preview";
import {TabContent} from "../tab-content";
import {CartItem, ListProductsType} from "../../../shared/types/list-products-type";
import {formatPrice} from "../../../shared/helper/function";
import {DetailProductContent} from "../content";
import {useDispatch} from "react-redux";
import {addCartAction} from "../../../redux/Reducers/cart-reducer";
import {notification} from "antd";

const tabTest = [
    {
        key: '1',
        label: 'Chi tiết',
        content: <DetailProductContent/>
    },
    {
        key: '2',
        label: 'Hướng dẫn',
        content: 'Chưa có dữ liệu'
    },
    {
        key: '3',
        label: 'Đánh giá',
        content: 'Chưa có dữ liệu'
    }
];

type ShowDetailProductProps = {
    product: ListProductsType
};

export const ShowDetailProduct = ({product}:ShowDetailProductProps) => {
    const [state, setState] = useState({
        count: 1,
        color: product.image[0].name,
        version: product.price[0].version,
        price: product.price[0].price,
        oldPrice: product.price[0].oldPrice,
        image: product.image[0].url,
    });

    const dispatch = useDispatch();
    const [api, contextHolder] = notification.useNotification();

    const addCartSuccessNotification = () => {
        api['success']({
            duration: 1.5,
            message: 'Thêm vào giỏ hàng thành công',
        });
    };

    const productItem: CartItem = {
        id: product.id,
        name: product.name,
        price: state.price,
        amount: state.count,
        color: state.color,
        version: state.version,
        image: state.image
    };

    const setCountHandler = (method:'minus' | 'plus') => {
        if (method === 'minus') {
            if (state.count === 1) {
                return;
            }
            return setState(prev => ({...prev, count: state.count - 1}));
        }
        if (method === 'plus') {
            return setState(prev => ({...prev, count: state.count + 1}));
        }
    };

    return (
        <div className={'flex flex-col gap-5'}>
            {contextHolder}
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5'}>
                <div className={'pt-5 col-span-1 md:col-span-1 lg:col-span-1'}>
                    <div className={'w-full h-auto text-nowrap overflow-hidden'}>
                        <MultiImagePreview listImage={product.image}/>
                    </div>
                </div>
                <div className={'pt-5 md:pt-0 col-span-1 md:col-span-1 lg:col-span-2'}>
                    <div>
                        <div className={'flex flex-col gap-2 md:gap-4'}>
                            <h2 className={'font-bold text-lg'}>{product.name}</h2>
                            <div className={'flex flex-col gap-3'}>
                                <div className={'flex items-center gap-5'}>
                                    <span>Thương hiệu: <span className={'font-medium'}>apple</span></span>
                                    <span>Mã sản phẩm: <span className={'font-medium'}>{product.id}</span></span>
                                </div>
                                <div className={'flex items-center gap-5'}>
                                    <span
                                        className={'font-bold text-2xl text-red-600'}>{formatPrice(state.price)}</span>
                                    {state.oldPrice ? <span>Giá niêm yết: <span
                                        className={'text-neutral-600 line-through'}>{formatPrice(state.oldPrice)}</span></span> : ''}
                                </div>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <span>Bộ nhớ: <span className={'text-red-600 font-bold'}>{state.version}</span></span>
                                <div className={'flex items-center gap-1'}>
                                    {product.price.map((item, index) => (
                                        <button
                                            key={index}
                                            className={state.version === item.version ? 'border border-red-600 rounded-md p-2' : 'border border-neutral-300 hover:border-red-600 rounded-md p-2'}
                                            onClick={() => setState(prev => ({...prev, version: item.version, price: item.price, oldPrice: item.oldPrice}))}>
                                            {item.version}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <span>Màu sắc: <span className={'text-red-600 font-bold'}>{state.color}</span></span>
                                <div className={'flex items-center gap-1'}>
                                    {product.image.map((item, index) => (
                                        <button
                                            key={index}
                                            className={state.color === item.name ? 'w-10 border border-red-600 rounded-md p-1' : 'w-10 border border-neutral-300 hover:border-red-600 rounded-md p-1'}
                                            onClick={() => setState(prev=>({...prev, color: item.name, image: item.url}))}>
                                            <img src={item.url} alt={item.name}/>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className={'py-2'}>
                                <div className={'flex items-center border border-neutral-300 w-fit'}>
                                    <button
                                        className={'text-red-600 hover:bg-red-600 h-full hover:text-white text-xl py-1.5 px-4'}
                                        onClick={() => setCountHandler('minus')}>-
                                    </button>
                                    <span
                                        className={'border-x border-neutral-300 p-1 w-20 text-center text-2xl font-bold'}>{state.count}</span>
                                    <button
                                        className={'text-red-600 hover:bg-red-600 hover:text-white text-xl py-1.5 px-4'}
                                        onClick={() => setCountHandler('plus')}>+
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className={'gap-2 lg:gap-5 grid grid-cols-1 lg:grid-cols-8'}>
                                    <button
                                        onClick={()=>{dispatch(addCartAction(productItem)); addCartSuccessNotification()}}
                                        className={'text-nowrap col-span-1 lg:col-span-3 font-medium flex flex-col justify-center items-center border text-white bg-red-500 p-3 rounded-md hover:bg-white hover:text-red-600 border-red-500'}>
                                        <span className={'uppercase'}>Thêm vào giỏ</span><span>Cam kết chính hãng / đổi trả 24h</span>
                                    </button>
                                    <button
                                        className={'col-span-1 lg:col-span-2 font-medium text-nowrap flex flex-col justify-center items-center border text-white bg-[#0fa80f] p-3 rounded-md hover:bg-white hover:border-yellow-500 hover:text-yellow-500 border-[#0fa80f]'}>
                                        <span className={'uppercase'}>Mua ngay</span><span>Thanh toán nhanh chóng</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'py-5'}>
                <TabContent items={tabTest}/>
            </div>
        </div>
    )
}