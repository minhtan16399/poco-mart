import React from "react";

export type ListProductsType = {
    id: string;
    name: string;
    description: DetailsProductType[];
    price: PriceProductType[];
    image: ListImageType[];
    url: string;
}

export type ListImageType = {
    name: string;
    url: string;
};

export type DetailsProductType = {
    label: string;
    content: string | React.ReactNode;
};

export type PriceProductType = {
    version: string;
    price: number;
    oldPrice: number;
}