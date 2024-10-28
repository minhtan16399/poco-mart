import React, { useState } from 'react';
import { Drawer } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {formatPrice} from "../../shared/helper/function";
import {deleteCartAction} from "../../redux/Reducers/cart-reducer";

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
            <button className={className} onClick={showDrawer} style={{'position': 'relative'}}>
                {label}
                <span className={'bg-red-500 text-white absolute rounded-[50%] size-5 text-xs -right-3 -top-3 flex justify-center items-center'}>{cart.count}</span>
            </button>
            <Drawer title="Cart" onClose={onClose} open={open}>
                {cart.cart.map((item, index) => (
                    <div key={index} className={'grid grid-cols-3 border-b py-3 relative'}>
                        <div className={'col-span-1'}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className={'col-span-2'}>
                            <div className={'font-bold'}>{item.name}</div>
                            <div>{item.version}</div>
                            <div>{item.color}</div>
                            <div>{item.amount}</div>
                            <div>{formatPrice(item.price * item.amount)}</div>
                        </div>
                        <button className={'absolute right-0 bottom-4 px-3 py-1 hover:text-white rounded hover:bg-red-600 border'}
                                onClick={()=> dispatch(deleteCartAction(item))}>x</button>
                    </div>
                ))}
            </Drawer>
        </>
    );
};