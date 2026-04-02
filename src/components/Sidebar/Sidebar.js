import { useState } from "react"
import "./Sidebar.css"
import { Link} from "react-router-dom";
export default function Sidebar({ children, isOpen,closeSidebar }) {

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = "auto";

    }

    return (
        <>

            <div className={`${isOpen ? "w-full h-full fixed flex overflow-hidden top-0 z-[999]" : "hidden"}`}>
                <div onClick={closeSidebar} className="fixed w-full top-0 h-full bg-[rgba(0,0,0,0.4)]"></div>
                <div className="w-[500px] bg-white z-[9999] overflow-y-auto sidebar">

                    <div className="flex gap-8 pt-[17px] pl-[14px] pb-[13px]">
                        <div className="img-container w-[80px] flex items-center"><img className="img" src="souledimg.webp" /></div>
                        <div className="border border-[#158b8d] rounded-[6px] w-[200px] flex justify-center items-center pt-[13px] pb-[13px] pl-[11px] pr-[11px]">Log In/Register</div>
                    </div>
                    <div className="bg-[#148c8d] text-white flex justify-center items-center pt-[9px] pb-[10px] pl-[31px] pr-[29px] rounded-br-[16px] rounded-bl-[16px] gap-3">
                        <span className="text-[16px]">Earn 10% Cashback on Every App Order</span>
                        <div className="w-[24px] h-[24px] rounded-[5px] border-[#18a7a8] border shadow-[0px_1px_2px_0px_#0b0b0b]"><img src="play-strore.png" /></div>
                        <div className="w-[24px] h-[24px] rounded-[5px] border-[#18a7a8] border shadow-[0px_1px_2px_0px_#0b0b0b]"><img src="appstore.png" /></div>

                    </div>
                    <div className="flex justify-between p-4 shadow-[0px_4px_4px_0px_#dce9ea]">
                        <div className="w-full font-[700] text-[17px] text-[#148c8d] flex justify-center items-center">MEN</div>
                        <div className="w-full font-[400] text-[17px] text-[#8a8a8a] flex justify-center items-center">WOMEN</div>
                        <div className="w-full font-[400] text-[17px] text-[#8a8a8a] flex justify-center items-center">SNEAKERS</div>
                    </div>

                    <div className="p-[16px] pb-0 slider ">{children[0]}</div>

                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border-t border-dashed">Shop All<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    <div className="flex justify-between p-5 pt-0">Categories <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    <div className="category-section">
                        {children[1]}
                    </div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Top Wear<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Bottom Wear<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">All Accessories</div>
                    <div className="slider p-[16px] pb-0">{children[2]}</div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Official Merch<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    <div className="flex gap-[3px] text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Sneakers<span className="text-red-500 text-[10px]">New Drops</span></div>
                    <div className="flex gap-[3px] text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">TSS Plus Size<span className="text-[10px]">XL,XXL&XXXL</span></div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Juniors<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Markdowns</div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 text-[rgba(0,120,122)] border-t-[#e5e5e5] border border-dashed">MY MEMBERSHIP</div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Stores Near Me</div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">Track My Order?</div>
                    <div className="flex justify-between text-[17px] font-[700] p-4 border-t-[#e5e5e5] border border-dashed">More<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>


                </div>
            </div>
        </>
    )
}
