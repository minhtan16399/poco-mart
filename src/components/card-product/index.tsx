import {NavLink} from "react-router-dom";
import {ThumbnailSale} from "../thumbnail-sale";
import querystring from 'query-string';
import {ListProductsType} from "../../shared/types/list-products-type";
import {formatPrice} from "../../shared/helper/function";

type CardProductProps = {
    product: ListProductsType
};

export const CardProduct = ({product}:CardProductProps) => {
    const params = {id:product.id, name:product.name};
    const queryString = querystring.stringify(params);

    const saleOff = product.price[0].oldPrice ? Math.round((product.price[0].oldPrice - product.price[0].price)/product.price[0].oldPrice*100) : 0;
    const oldPriceText = product.price[0].oldPrice ? formatPrice(product.price[0].oldPrice) : '';
    const salePop = (saleOff > 0) ? <ThumbnailSale discount={saleOff}/> : null;

    return (
        <div>
            <div className={''}>
                {salePop}
                <img className={'scale-95 hover:scale-100 transition-all duration-300 min-h-[200px]'} src={product.image[0].url}
                     alt={product.name}/>
            </div>
            <div className={'flex flex-col gap-3'}>
                <div className={'h-9 overflow-ellipsis'}>
                    <NavLink to={`/detail-product/${queryString}`}
                             className={'text-base font-bold text-neutral-700 hover:text-yellow-600'}>{product.name}</NavLink>
                </div>
                <div className={'flex flex-col'}>
                        <span
                            className={'text-base text-red-600 font-bold'}>{formatPrice(product.price[0].price)}</span>
                    <span className={'text-neutral-400 line-through text-sm'}>{oldPriceText}</span>
                </div>
            </div>
        </div>
    )
}