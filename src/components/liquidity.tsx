import CardDex from "./carddex"

export default function Liquidity () {
    return (
        <div className="flex items-start h-screen w-[80%] mb-4 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            <div>
                <div>
                    <div className="flex justify-between mb-4">
                        <h3 className="font-semibold">Your Liquidity</h3>
                        <ul>
                            <button className="ml-4 border border-yellow-600 rounded-[8px] px-4 py-1">Import pool</button>
                            <button className="ml-4 border border-yellow-600 rounded-[8px] px-4 py-1">Add liquidity</button>
                        </ul>
                    </div>
                </div>
                <CardDex>
                        <p className="mt-8 mb-12">Connect to a wallet to view yor liquidity</p>
                        <p className="mb-8">Don't see a pair you joined? Import a pool above</p>           
                </CardDex>
            </div>
            
        </div>
    )
}




