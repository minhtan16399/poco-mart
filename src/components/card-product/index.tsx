import {NavLink} from "react-router-dom";
import {ThumbnailSale} from "../thumbnail-sale";

type CardProductProps = {
    title: string;
    description?: string;
    image: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    url: string;
};

export const CardProduct = ({...Props}:CardProductProps) => {
    const formatPrice = (price: number) => (
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price)
    );
    const oldPriceText = Props.oldPrice ? formatPrice(Props.oldPrice) : '';
    const salePop = (Props.discount && Props.discount > 0) ? <ThumbnailSale discount={Props.discount}/> : null;

    return (
        <div>
            <div className={''}>
                {salePop}
                <img className={'scale-95 hover:scale-100 transition-all duration-300'} src={Props.image}
                     alt={Props.title}/>
            </div>
            <div className={'flex flex-col gap-3'}>
                <div className={'h-9 overflow-ellipsis'}>
                    <NavLink to={Props.url}
                             className={'text-base font-bold text-neutral-700 hover:text-yellow-600'}>{Props.title}</NavLink>
                </div>
                <div className={'flex flex-col'}>
                    <span className={'text-base text-red-600 font-bold'}>{formatPrice(Props.price)}</span>
                    <span className={'text-neutral-400 line-through text-sm'}>{oldPriceText}</span>
                </div>
            </div>
        </div>
    )
}