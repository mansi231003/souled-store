export default function Button({children,className}){
    return(
        <>
                <button className={`${className} text-[#58595b] h-[35px] border border-[#ddd] pt-[8px] pr-[14px] pl-[14px] pb-[8px] rounded-[15px] text-[14px] flex justify-center items-center whitespace-nowrap}`}>{children}</button>

        </>
    )
}