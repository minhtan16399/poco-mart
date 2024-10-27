export const ThumbnailSale = ({discount}:{discount: number}) => (
    <div className={'relative z-[3]'}>
        <div className={'w-11 h-[60px] absolute overflow-hidden'}>
            <div className={'bg-yellow-400 absolute size-12 -left-6 top-1 rotate-45'}></div>
            <div className={'bg-yellow-400 absolute size-12 left-6 top-1 -rotate-[40deg]'}></div>
            <div className={'bg-yellow-400 absolute size-11 left-[1px] pt-1 text-center font-bold text-sm text-wrap'}>
                Giảm {discount}%
            </div>
        </div>
    </div>
)