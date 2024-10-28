import React, {useState} from "react";
import {ChevronDownIcon} from "../../../shared/icon/chevron-down-icon";

export const DetailProductContent = () => {
    const [expanded, setExpanded] = useState<boolean>(true);
    return (
        <div className={'w-full relative'}>
            <div className={expanded ? 'h-[300px] overflow-hidden' : 'h-max pb-20'}>
                <p>Tất cả iPhone chính hãng VN/A được phân phối tại Poco Mart đều được nhập trực tiếp từ Công ty TNHH
                    Apple
                    Việt Nam. Poco Mart là nhà bán lẻ ủy quyền chính thức của Apple tại Việt Nam.</p>
                <br/>
                <img
                    src={'/assets/image/content/apple--dien-thoai-di-dong-apple-iphone-12-mini-64gb-chinh-hang-vn-a-1.jpeg'}
                    alt={'tem chinh hang'}/>
                <br/>
                <p>Tem ICT có trên các sản phẩm iPhone chính hãng VN/A</p>
                <br/>
                <p>Mua iPhone 12 giá rẻ chính hãng tại Poco Mart</p>
                <br/>
                <p>Vào ngày 13/10 vừa qua, Apple đã chính thức cho ra mắt thế hệ iPhone 12 mới với 4 phiên bản, và trong
                    đó
                    mẫu iPhone 12 tiêu chuẩn, với nhiều cải tiến về cả bên ngoài lẫn bên trong, hứa hẹn sẽ lại tiếp tục
                    nối
                    tiếp sự thành công từ chiếc iPhone 11 tiền nhiệm.</p>
                <br/>
                <p>Thiết kế được làm mới lại hoàn toàn</p>
                <br/>
                <p>Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết
                    kế
                    vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một
                    ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền
                    nhiệm trước đây với cạnh được vát phẳng, vuông thành sắc cạnh, mang tới một cảm giác cực kì bền bỉ
                    và
                    chắc chắn. Thiết kế này khiến cho người dùng có thể dễ dàng liên tưởng tới những mẫu iPhone huyền
                    thoại
                    trước đây đã làm nên tên tuổi của Apple như iPhone 4 hoặc iPhone 5.</p>
            </div>
            <div
                className={'absolute left-0 bottom-0 w-full pt-20 bg-gradient-to-t from-white to-transparent'}>
                <div className={'bg-white w-full flex justify-center items-center'}>
                    <button
                        className={'transition-all duration-300 bg-white hover:border-red-500 hover:text-red-500 flex items-center justify-center py-2 w-28 gap-1 border border-neutral-800 rounded'}
                        onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Xem thêm ' : 'Thu gọn '}
                        <p className={expanded ? 'w-4 transition-transform duration-300' : 'w-4 rotate-180 transition-transform duration-300'}>
                            <ChevronDownIcon/></p>
                    </button>
                </div>
            </div>
        </div>
    )
}