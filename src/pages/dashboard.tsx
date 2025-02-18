import Card from "../components/card";

export default function Dashboard() {
  return (
    <>
      <div className="space-y-">
        <div className="grid grid-cols-2 gap-10 mb-0">
          <div className="mb-10">
            <Card>
              <h3 className="text-[#C09028] pt-4">Total Value Locked</h3>
              <p className="text-[20px] pb-4">$643,004</p>
            </Card>
          </div>
          <Card>
            <div className="logo"></div>
            <div>
              <h3 className="pt-4">GoldShare</h3>
              <div className="flex pt-4">
                <img src="../public/assets/obol.698d2518.svg" alt="" className="w-24 h-24 rounded-lg" />
                <div className="pl-12 pt-8">
                  <h3 className="mb-0 pb-0">SELL TAX</h3>
                  <h3 className="pb-8">10%</h3>
                </div>
              </div>
              <div>
                <h5>Current Price</h5>
                <h2>$ 0.21</h2>
                <ul className="mb-4 font-600">
                  <li>Market Cap:$37,806</li>
                  <li>Circulating Supply: 180,030</li>
                  <li>Total Supply: 5,600,000</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-10 mb-0">
          <Card>
          <div className="logo"></div>
            <div>
              <h3 className="pt-4">GoldCoin</h3>
              <div className="flex pt-4">
                <img src="../public/assets/smelt.4d7573dc.svg" alt="" className="w-24 h-24 rounded-lg" />
                <div className="pl-12 pt-8">
                  <h3 className="mb-0 pb-0">SELL TAX</h3>
                  <h3 className="pb-8">10%</h3>
                </div>
              </div>
              <div>
                <h5>Current Price</h5>
                <h2>$ 0.21</h2>
                <ul className="mb-8">
                  <li>Market Cap:$37,806</li>
                  <li>Circulating Supply: 180,030</li>
                  <li>Total Supply: 1,825,00</li>
                </ul>
              </div>
            </div>
          </Card>
          <div>
            <Card>
              <div className="logo"></div>
              <div>
                <h3  className="pt-4 pb-6">GoldShare-FTM LP</h3>
                <div className="flex justify-between">
                  <img src="../public/assets/obol-ftm-lp.f61a46a0.svg" alt="" className="w-24 h-24 rounded-lg" />
                  <ul className="mb-8">
                    <li>1.07 OBOL/0.93 FTM</li>
                    <li>$0.45</li>
                    <li>Liquidity:$51,250</li>
                    <li>Total supply:5,600,000</li>
                  </ul>
                  <button className="golden-btn">ADD LP</button>
                </div>
              </div>
            </Card>
          </div>
          
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Card>
            <div className="logo"></div>
            <div>
              <h3  className="pt-4 pb-6">GoldCoin-FTM LP</h3>
              <div className="flex justify-between">
                <img src="../public/assets/obol-ftm-lp.f61a46a0.svg" alt="" className="w-24 h-24 rounded-lg" />
                <ul className="mb-8">
                  <li>1.07 OBOL/0.93 FTM</li>
                  <li>$0.45</li>
                  <li>Liquidity:$51,250</li>
                  <li>Total supply:1,825,000</li>
                </ul>
                <button className="golden-btn">ADD LP</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
