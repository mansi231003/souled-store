import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Registration() {
    return (
        <>
            <Navbar />
            <div className="bg-[#e6e7e8] w-full flex justify-center items-center pt-10 pb-10">

                <div className="bg-white w-[450px] flex flex-col justify-center items-center p-8">

                    <div className="text-[#58595b] text-[15px] font-[700]">Login with The Souled Store</div>
                    <div className="p-3 w-full mb-3 flex ">
                        <div className="bg-[#117a7a] w-full  justify-center flex p-3 pl-9 pr-9 text-[15px] text-white border border-[#117a7a]">LOGIN</div>
                        <div className="text-[#58595b] w-full justify-center flex p-3 pl-7 pr-7 text-[15px] border border-[#c5c5c5] ">REGISTER</div>
                    </div>

                    <div className="bg-[#f1f1f2] p-8 w-[94%] border-[#9c9b9b] border">
                        <div className="flex gap-6">
                            <div className="bg-white border border-[#ccc] flex rounded-[10px]  pl-[8px] pr-[10px]">
                                <div className="flex justify-center p-[8px] pl-0 items-center w-[35px]"><img className="w-[80%]" src="facebook.png" /></div>
                                <span className="border-l p-[8px] flex justify-center items-center text-[#58595b] font-[700] text-[14.5px]">Facebook</span>
                            </div>
                             <div className="bg-white  border border-[#ccc] flex rounded-[10px] pl-[8px] pr-[10px]">
                                <div className="flex justify-center p-[8px] pl-0 items-center w-[35px]"><img className="w-[80%]" src="google.png" /></div>
                                <span className="border-l p-[8px] pr-[12px] pl-[11px] flex justify-center items-center text-[#58595b] font-[700] text-[14.5px]">Google</span>
                            </div>
                        </div>

                        <div className="text-[#58595b] font-[700] text-[14px] flex justify-center pt-5 pb-5">- OR -</div>
                        <input className="h-[30px] w-[286px] text-[14px] border border-[#ccc] pl-[15px] p-[18px] rounded-[10px]" placeholder="Enter Phone Number"/>
                        <div className="h-[30px] w-[286px] flex justify-center items-center mt-[20px] font-[700] text-[14px] pl-[15px] p-[18px] rounded-[10px] bg-[#ee5456] text-white">PROCEED</div>
                        <div className="flex justify-center pt-[25px] text-[#58595b] text-[14px] gap-1">New User ?<u className="text-[#ed2e30]">Create Account</u></div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}