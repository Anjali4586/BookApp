import { FaLocationDot } from "react-icons/fa6";


function Carousel(props){
    let event = props.event;
    let urlSplit = event.imgUrl.split('/');
    let id = urlSplit[5];

    return (
        <div className="flex flex-wrap w-[32%] border border-[#B0BABF] rounded-lg justify-between pt-1">

            <div className="">
                <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} alt="logo" />
            </div>

            <div className="w-full px-4 text-start pb-4">
                <div className="text-lg font-bold text-[#1E2022]">
                    After note nearly
                </div>
                <div className="flex items-center justify-between text-[#989090] font-semibold">
                    <div className="flex items-center">
                        <div>
                            <FaLocationDot />
                        </div>
                        <p>North America</p>
                    </div>
                    <div>
                        Snowy, 26°C | 32Km
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Carousel;