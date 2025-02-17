import Card from "../components/card";

export default function Farm () {
    return(
        <div>
            <div className="text-center mx-auto mt-4">
                <h3>Gold Farming pools</h3>
                <p>Earn Gold Share in Hybrid w NFT staking</p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
                <Card>
                    <div className="flex justify-between">
                        <div>
                            <h4>GoldNFT</h4>
                            <h5>Earn Gold Share</h5>
                            <p className="pt-">APR:22.63%</p>
                        </div>
                        
                        <div>
                            <img src="" alt="" />
                            <button>view</button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <h4>GoldCoin-FTM-LP</h4>
                    <h5>Earn GoldShare</h5>
                    <p>APR:117.55%</p>
                    <div>
                        <img src="" alt="" />
                        <button>view</button>
                    </div>
                </Card>
                <Card>
                    <h4>GoldCoin-FTM-LP</h4>
                    <h5>Earn GoldShare</h5>
                    <p>APR:117.55%</p>
                    <div>
                        <img src="" alt="" />
                        <button>view</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}