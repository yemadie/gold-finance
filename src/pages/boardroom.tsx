import Card from "../components/card";

export default function Boardroom () {
    return(
        <div className="text-center">
            <div className="grid grid-cols-4 gap-10">
                <Card>
                    <h3>Next Epoch</h3>
                    <p className="text-[17px] font-semibold">17:22:41</p>
                </Card>
                <Card>
                    <h3>Current Epoch</h3>
                    <p className="text-[17px] font-semibold">159</p>

                </Card>
                <Card>
                    <h3>APR<span className="px-1">|</span>Daily</h3>
                    <ul>
                        <li className="text-[17px] font-semibold">150.49%<span className="px-1">|</span>0.41%</li>
                        <li className="text-[17px] font-semibold">GoldCoin per</li>
                        <li className="text-[17px] font-semibold">GoldShare---0.2</li>
                    </ul>
                </Card>
                <Card>
                    <h3>GoldShare</h3>
                    <h3>Staked</h3>
                    <p className="text-[17px] font-semibold">10,381</p>

                </Card>
            </div>
            <button className="yellow-600-btn mx-auto">Kick Infinite Printer When Timer Exprires</button>
            <div className="flex justify-center items-center gap-x-8">
                <div className="w-1/4 pl-8 pr-4">
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
                <div className="w-1/4 pl-4 pr-8">
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

