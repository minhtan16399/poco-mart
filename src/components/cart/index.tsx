import React, { useState } from 'react';
import { Drawer } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {formatPrice} from "../../shared/helper/function";
import {decreaseAmountProduct, deleteCartAction, increaseAmountProduct} from "../../redux/Reducers/cart-reducer";

type CartProps = {
    label: React.ReactNode | '',
    className?: string,
};
export const Cart = ({label, className}: CartProps) => {
    const cart = useSelector((state:RootState)=> state.cart);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className={`${className}`} onClick={showDrawer} style={{'position': 'relative'}}>
                {label}
                <span className={'bg-red-500 text-white absolute rounded-[50%] size-5 text-xs -right-1.5 -top-2.5 flex justify-center items-center'}>{cart.count}</span>
            </button>
            <Drawer title="Cart" onClose={onClose} open={open} className={'relative'}>
                {cart.cart.map((item, index) => (
                    <div key={index} className={'grid grid-cols-3 border-b py-3 relative'}>
                        <div className={'col-span-1'}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className={'col-span-2'}>
                            <div className={'font-bold'}>{item.name}</div>
                            <div>Phiên bản: {item.version}</div>
                            <div>Màu sắc: {item.color}</div>
                            <div className={'flex gap-3 items-center'}>
                                <span>Số lượng: </span>
                                <button className={'hover:scale-150'} onClick={() => dispatch(decreaseAmountProduct(item))}>-</button>
                                <span>{item.amount}</span>
                                <button className={'hover:scale-150'} onClick={() => dispatch(increaseAmountProduct(item))}>+</button>
                            </div>
                            <div>Tổng giá: {formatPrice(item.price * item.amount)}</div>
                        </div>
                        <button className={'absolute right-0 bottom-4 px-3 py-1 hover:text-white rounded hover:bg-red-600 border'}
                                onClick={()=> dispatch(deleteCartAction(item))}>x</button>
                    </div>
                ))}
                <div className={'fixed bottom-0 w-[330px] bg-white py-2 flex justify-between items-center'}>
                    <span className={'font-semibold'}>Tổng cộng: <span className={'text-red-500'}>{formatPrice(cart.total)}</span></span>
                    <button className={'px-4 py-3 rounded bg-amber-500 font-semibold text-white hover:bg-green-500'}>Thanh toán</button>
                </div>
            </Drawer>
        </>
    );
};