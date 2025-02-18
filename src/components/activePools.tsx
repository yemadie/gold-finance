import CardDex from "./carddex"

export default function ActivePools () {
    return (
        <div className="flex items-start h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <CardDex>
                <div className="flex flex-col gap-y-4 sm:p-4 p-2">
                    <CardDex>
                        <div className="flex justify-between up-part-of-gold-box m-3">
                            <div className="flex items-center border border-[#BD9945] rounded-[8px] px-2 text-[#BD9945]">
                                <img src="../public/assets/ftm_no_back.9c71a035.svg" className="w-8 h-11 p-0 m-0"  alt="" />
                                <h4>FTM</h4>
                            </div>
                            <p className="">0.0</p>
                        </div>
                        <div className="border-b border-gray-500 my-3"></div>
                        <div className="flex justify-end items-center gap-x-4 m-3">
                            <p>Balance 0.0000</p>
                            <ul className="flex">
                                <li className="flex items-center border border-[#BD9945] rounded-[8px] px-4 py-1 text-[#BD9945]"> 50%</li>
                                <li className="flex items-center border border-[#BD9945] rounded-[8px] px-4 py-1 text-[#BD9945] ml-4">MAX</li>
                            </ul>
                        </div>
                    </CardDex>
                    <CardDex>
                        <div className="flex justify-between up-part-of-gold-box m-3">
                                <div className="flex items-center border border-[#BD9945] rounded-[8px] px-2 text-[#BD9945]">
                                    <img src="../public/assets/bshare-simple.2f739dbf.svg" className="w-8 h-11 p-0 m-0"  alt="" />
                                    <h4>FTM</h4>
                                </div>
                                <p className="">0.0</p>
                            </div>
                            <div className="border-b border-gray-500 my-3"></div>
                            <div className="flex justify-end items-center gap-x-4 m-3">
                                <p>Balance 0.0000</p>
                                <ul className="flex">
                                    <li className="flex items-center border border-[#BD9945] rounded-[8px] px-4 py-1 text-[#BD9945]"> 50%</li>
                                    <li className="flex items-center border border-[#BD9945] rounded-[8px] px-4 py-1 text-[#BD9945] ml-4">MAX</li>
                                </ul>
                            </div>
                    </CardDex>
                    <button  className="yellow-600-btn">SWAP</button>
                </div>
                
                
            </CardDex>
            <div>
                <CardDex>
                    <div className="m-3">
                        <h5>My Wallet</h5>
                        <div className="flex justify-between">
                            <p>0xEC3bd1..c78540638</p>
                            <button className="yellow-600-btn">FTM SCAN</button>
                        </div>
                    </div>
                    
                </CardDex>
            </div>
            
        </div>
    )
}




