import Card from "../components/card";

export default function Boardroom () {
    return(
        <div>
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
            <div className="grid grid-cols-2 gap-16">
                <Card>
                    <div className="logo"></div>
                    <h3>0.0000</h3>
                    <p>≈ $0.00</p>
                    <p>GoldCoin Earned</p>
                    <button className="yellow-600-btn">CLAIM REWARD</button>
                </Card>
                <Card>
                    <div className="logo"></div>
                    <h3>0.0000</h3>
                    <p>≈ $0.00</p>
                    <p>GoldCoin Earned</p>
                    <ul>
                        <button>-</button>
                        <button>+</button>
                    </ul>
                </Card>
            </div>
        </div>
    )
}

