import Card from "../components/card";

export default function Dashboard () {
  return (
    <>
      <div>
        <div>
          <Card>
              <h3>Total Value Locked</h3>
              <p>$643,004</p>
            </Card>
            <Card>
              <div className="logo"></div>
              <div>
                <h3>GoldShare</h3>
                <h4>SELL TAX</h4>
                <p>10%</p>
                <div>
                  <h5>Current Price</h5>
                  <h2>$ 0.21</h2>
                  <ul>
                    <li>Market Cap:$37,806</li>
                    <li>Circulating Supply: 180,030</li>
                    <li>Total Supply: 5,600,000</li>
                  </ul>
                </div>
              </div>
            </Card>
        </div>
        <div>
          <Card>
              <div className="logo"></div>
              <div>
                <h3>GoldShare</h3>
                <h4>SELL TAX</h4>
                <p>10%</p>
                <div>
                  <h5>Current Price</h5>
                  <h2>$ 0.21</h2>
                  <ul>
                    <li>Market Cap:$37,806</li>
                    <li>Circulating Supply: 180,030</li>
                    <li>Total Supply: 1,825,000</li>
                  </ul>
              </div>
              </div>
            </Card>
            <Card>
              <div className="logo"></div>
              <div>
                <h3>GoldShare-FTM LP</h3>
                <h4>SELL TAX</h4>
                <ul>
                  <li>1.07 OBOL/0.93 FTM</li>
                  <li>$0.45</li>
                  <li>Liquidity:$51,250</li>
                  <li>Total supply:1,825,000</li>
                </ul>
              </div>
              <button>ADD LP</button>  
            </Card>
        </div>
          
      </div>
      <div>
        <Card>
        <div className="logo"></div>
        <div>
          <h3>GoldShare-FTM LP</h3>
          <h4>SELL TAX</h4>
          <ul>
            <li>1.07 OBOL/0.93 FTM</li>
            <li>$0.45</li>
            <li>Liquidity:$51,250</li>
            <li>Total supply:1,825,000</li>
          </ul>
        </div>
        <button>ADD LP</button>  
        </Card>
      </div>
    </>
  );
};
