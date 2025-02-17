import Card from "../components/card";

export default function Farm () {
    return(
        <div>
            <div className="text-center">
                <h3 className="text-2xl font-bold">Gold Farming Pools</h3>
                <p className="text-white">Earn Gold Share in Hybrid w NFT staking</p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
                <Card>
                    <div className="flex justify-between">
                        <div className="text-left">
                            <h4 className="">GoldNFT</h4>
                            <h5 className="">Earn Gold Share</h5>
                            <p className="mt-18 px-9 font-bold">APR:22.63%</p>
                        </div>
                        <div>
                            <img src="/src/assets/preview.79b1e7a9.gif" alt="" className="w-18 h-24 mb-4" />
                            <button className="yellow-600-btn">VIEW</button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex justify-between">
                        <div className="text-left">
                            <h4 className="">GoldCoin-FTM-LP</h4>
                            <h5 className="">Earn GoldShare</h5>
                            <p className="mt-18 px-9 font-bold">APR:117.55%</p>
                        </div>
                        <div>
                            <img src="" alt="" className="mb-28"/>
                            <button className="yellow-600-btn">VIEW</button>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex justify-between">
                        <div className="text-left">
                            <h4 className="">GoldCoin-FTM-LP</h4>
                            <h5 className="">Earn Gold Share</h5>
                            <p className="mt-18 px-9 font-bold">APR:117.55%</p>
                        </div>
                        <div>
                            <img src="" alt="" className="mb-28"/>
                            <button className="yellow-600-btn">VIEW</button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}