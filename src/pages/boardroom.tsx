import Card from "../components/card";

export default function Boardroom () {
    return(
        <div>
            <div className="grid grid-cols-4 gap-4">
                <Card>
                    <h3>Next Epoch</h3>
                    <p>17:22:41</p>
                </Card>
                <Card>
                    <h3>Current Epoch</h3>
                    <p>159</p>

                </Card>
                <Card>
                    <h3>APR|Daily</h3>
                    <ul>
                        <li>150.49%|0.41%</li>
                        <li>GoldCoin per</li>
                        <li>GoldShare---0.2</li>
                    </ul>
                </Card>
                <Card>
                    <h3>GoldShare</h3>
                    <h3>Staked</h3>
                    <p>10,381</p>

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

