// import { useState } from "react";
import ActivePools from "../components/activePools";
import Liquidity from "../components/liquidity";
// import EaseButton from "../components/easebutton";

const TAB = {
    POOL: "pool",
    LIQUIDITY: "liquidity"
}

export default function BasedDex() {
//   const [activeTab, setActiveTab] = useState<any>("ACTIVE POOLS");
  
//   const handleTabClick = (tab: string) => {
//     setActiveTab(tab);
//   };
const activeTab = TAB.POOL;

  return (
    <div>
      <div className="w-full max-w-[1280px] fixed top-40">
        {/* <nav className="w-full px-4">
          <div className="flex text-white">
            <EaseButton onClick={() => handleTabClick(activePools)}>{activePools}</EaseButton>
            <EaseButton onClick={() => handleTabClick(liquidity)}>{liquidity}</EaseButton>
          </div>
        </nav> */}
        <div className="border-b border-yellow-500"></div>
      </div>

      <div className="mt-16 p-4">
        {activeTab === TAB.POOL ? <ActivePools /> : <Liquidity />}
      </div>
    </div>
  );
}


{/* <button
                            className={`dex-inner-btn ${
                                activeTab === "ACTIVE POOLS"
                                    ? "border-b-2 border-yellow-500"
                                    : "border-transparent hover:border-yellow-500 rounded-tl-lg rounded-tr-lg"
                            }`}
                            onClick={() => setActiveTab("ACTIVE POOLS")}
                        >
                            <span className="absolute inset-0 bg-yellow-300 transition-all duration-300 ease-in-out transform scale-0 hover:scale-100"></span>
                            ACTIVE POOLS
                        </button>
                        <button
                            className={`dex-inner-btn ${
                                activeTab === "LIQUIDITY"
                                    ? "border-b-2 border-yellow-500"
                                    : "border-transparent hover:border-yellow-500 rounded-tl-lg rounded-tr-lg"
                            }`}
                            onClick={() => setActiveTab("LIQUIDITY")}
                        >
                            <span className="absolute inset-0 bg-yellow-300 transition-all duration-300 ease-in-out transform scale-0 hover:scale-100"></span>
                            LIQUIDITY
                        </button> */}