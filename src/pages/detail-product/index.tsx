import React, {useEffect, useState} from "react";
import Breadcrumbs from "../../components/breadcrum";
import {ShowDetailProduct} from "../../components/detail-product/show-detail-product";
import {useParams} from "react-router-dom";
import querystring from "query-string";
import {ListProductsType} from "../../shared/types/list-products-type";
import {getApi} from "../../shared/helper/function";

const DetailProduct: React.FC = () => {
    const params = useParams();
    const [data, setData] = useState<ListProductsType[]>([]);
    useEffect(()=>{
        getApi<ListProductsType[]>('/data/list-products.json')
            .then(data => setData(data))
            .catch(err => console.log(err));
    },[]);
    const queryStringParams = querystring.parse(params.id??"");
    const idProduct = queryStringParams["id"];
    // eslint-disable-next-line eqeqeq
    const productItem = data.find((item)=> item.id == `${idProduct}`);

    return (
        <div className={'pb-5'}>
            <div className={'container mx-auto'}>
                <div className={'py-4'}>
                    <Breadcrumbs />
                </div>
                <div>
                    {productItem ? <ShowDetailProduct product={productItem} /> : null}
                </div>
            </div>
        </div>
    )
};

export default DetailProduct;