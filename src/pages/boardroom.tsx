import Card from "../components/card";

export default function Boardroom () {
    return(
        <div className="text-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-3 p-4">
                <Card>
                    <div className="boardroom-above-card">
                        <h3>Next Epoch</h3>
                        <p className="text-[17px] font-semibold">17:22:41</p>
                    </div>
                </Card>
            
                <Card>
                    <div className="boardroom-above-card">
                        <h3>Current Epoch</h3>
                        <p className="text-[17px] font-semibold">159</p>
                    </div>
                </Card>
            
                <Card>
                    <div className="boardroom-above-card">
                        <h3>APR<span className="px-1">|</span>Daily</h3>
                        <ul>
                            <li className="text-[17px] font-semibold">150.49%<span className="px-1">|</span>0.41%</li>
                            <li className="text-[17px] font-semibold">GoldCoin per</li>
                            <li className="text-[17px] font-semibold">GoldShare---0.2</li>
                        </ul>
                    </div>
                </Card>
            
            
                <Card>
                    <div className="boardroom-above-card">
                        <h3>GoldShare</h3>
                        <h3>Staked</h3>
                        <p className="text-[17px] font-semibold">10,381</p>
                    </div>
                </Card>
            </div>
            <button className="yellow-600-btn mx-auto my-6">Kick Infinite Printer When Timer Exprires</button>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-4 lg:gap-16">
                <div className="sm: w-1/2 md: w-1/4 lg: 1/4">
                    <Card>
                        <div className="flex flex-col items-center justify-center text-center mb-8">
                            <img src="../public/assets/obol.698d2518.svg" alt="" className="w-24 h-24 rounded-lg mb-8 mt-6" />
                            <h2 className="text-3x1 font-bold">0.0000</h2>
                            <p>≈ $0.00</p>
                            <p className="mb-8">GoldCoin Earned</p>
                            <button className="yellow-600-btn">CLAIM REWARD</button>
                        </div>
                    </Card>
                </div>
                <div className="sm: w-1/2 md: w-1/4 lg: 1/4">
                    <Card>
                        <div className="flex flex-col items-center justify-center text-center mb-8">
                            <img src="../public/assets/obol.698d2518.svg" alt="" className="w-24 h-24 rounded-lg mb-8 mt-6" />
                            <h2 className="text-3x1 font-bold">0.0000</h2>
                            <p>≈ $0.00</p>
                            <p className="mb-8">GoldCoin Earned</p>
                            <ul className="flex justify-center gap-4">
                                <button className="yellow-600-btn-rounded">-</button>
                                <button className="yellow-600-btn-rounded">+</button>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}


