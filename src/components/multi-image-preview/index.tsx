import React, {useState} from 'react';
import { Image } from 'antd';

type MultiImagePreviewProps = {
    listImage: {
            name: string;
            url: string;
        }[]
};
export const MultiImagePreview = ({listImage}: MultiImagePreviewProps) => {
    const [activeImage, setActiveImage] = useState<number>(0);
    return (
        <div className={'relative'}>
            <div className={'w-full h-auto text-nowrap overflow-hidden relative'}>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    {listImage.map((item, index) => (
                        <Image key={index} className={activeImage === index ? 'w-full transition-all opacity-100 duration-500' : 'duration-500 absolute transition-all opacity-0'} src={item.url} alt={item.name}/>
                    ))}
                </Image.PreviewGroup>
            </div>
            <div className={'pt-5'}>
                <div className={'flex gap-2 overscroll-x-auto'}>
                    {listImage.map((item, index) => (
                        <button key={index} className={activeImage === index ? 'w-16 border border-red-600 hover:border-red-600 rounded-md p-1' : 'w-16 border border-neutral-300 hover:border-red-600 rounded-md p-1'}
                                onClick={()=>{
                                    setActiveImage(index);
                                }}
                        >
                            <img src={item.url} alt={item.name}/>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}