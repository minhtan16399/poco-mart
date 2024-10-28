import React, {useState} from "react";

type TabContentProps = {
  items: {
      label: string,
      content: React.ReactNode | string,
  }[]
};
export const TabContent = ({items}: TabContentProps) => {
    const [content, setContent] = useState<React.ReactNode | string>(items[0].content);
    const [activeButton, setActiveButton] = useState<number>(0);

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-4'}>
            <div className={'col-span-3'}>
                <div>
                    {
                        items.map((item, index) => (
                            <button key={index} className={(activeButton === index ? 'px-5 py-3 text-base font-bold border-r bg-yellow-500 text-white' : 'px-5 py-3 text-base font-bold border-r bg-red-500 text-white')}
                                    onClick={() => {
                                        setContent(item.content);
                                        setActiveButton(index)
                                    }}
                            >{item.label}</button>
                        ))
                    }
                </div>
                <div className={'border p-5'}>
                    {content}
                </div>
            </div>
        </div>
    )
};