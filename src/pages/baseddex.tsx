import { useState } from "react";
import ActivePools from "../components/activePools";
import Liquidity from "../components/liquidity";

export default function BasedDex () {
    const [activeTab, setActiveTab] = useState("ACTIVE POOLS");

    return(
        <div>
            <div className="flex flex-col items-start">
                <nav className='w-full px-4'>
                    <div className='text-white flex border-b border-yellow-500'>
                        <button
                            className={`dex-inner-btn px-6 py-2 mr-4 ${
                                activeTab === "ACTIVE POOLS"
                                    ? "border-b-2 border-yellow-500"
                                    : "border-b-2 border-transparent hover:border-yellow-500 rounded-tl-lg "
                            }`}
                            onClick={() => setActiveTab("ACTIVE POOLS")}
                        >
                           <span className="absolute inset-0 bg-yellow-300 transition-all duration-300 ease-in-out transform scale-0 hover:scale-100"></span>
                            ACTIVE POOLS
                        </button>
                        <button
                            className={`dex-inner-btn  px-6 py-2 ${
                                activeTab === "LIQUIDITY"
                                    ? "border-b-2 border-yellow-500"
                                    : "border-b-2 border-transparent hover:border-yellow-500 rounded-tl-lg"
                            }`}
                            onClick={() => setActiveTab("LIQUIDITY")}
                        >
                            <span className="absolute inset-0 bg-yellow-300 transition-all duration-300 ease-in-out transform scale-0 hover:scale-100"></span>
                            LIQUIDITY
                        </button>
                    </div>
                </nav>
                <div className="border-b border-yellow-500 mx-4 w-full"></div>
            </div>
            
            <div className="p-4">
                {activeTab === "ACTIVE POOLS" ? <ActivePools/> : <Liquidity/>}
            </div>
        </div>
    )
}


