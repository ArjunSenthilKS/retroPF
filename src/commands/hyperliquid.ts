//import command from '../../config.json' assert {type: 'json'};
import axios from 'axios';

interface Leverage {
    type: string;
    value: number;
}

interface CumFunding {
    allTime: string;
    sinceOpen: string;
    sinceChange: string;
}

interface Positions {
    coin: string;
    szi: string;
    leverage: Leverage;
    entryPx: string;
    positionValue: string;
    unrealizedPnl: string;
    returnOnEquity: string;
    liquidationPx: string;
    marginUsed: string;
    maxLeverage: number;
    cumFunding: CumFunding;
}

interface AssetPosition {
  type: string;
  position: Positions;
}

const assetPositions: AssetPosition[] = [];

async function getPositions() {
  try {
    const response = await axios.post('https://hyper-vercel.vercel.app/get-hyper', assetPositions, {headers: {'Content-Type': 'application/json'}});
    return(response.data);
  } catch (error) {
    console.error('Error calling Python API', error);
  }
}

const createProject = () : string[] => {
  const SPACE = "&nbsp;";
  const pos : string[] = [];
  getPositions().then( (result) => {
    result.forEach((i: AssetPosition) => {
      pos.push("<br>")
      if(parseInt(i.position.unrealizedPnl)>0) {
        pos.push("<span class='positive'>"+i.position.coin+'</span> '+i.position.leverage.type+' '+i.position.leverage.value+'x');
      }else {
        pos.push("<span class='negative'>"+i.position.coin+'</span> '+i.position.leverage.type+' '+i.position.leverage.value+'x');
      }
      
      pos.push(i.position.unrealizedPnl+SPACE.repeat(17 - i.position.unrealizedPnl.length)+String(parseFloat(i.position.returnOnEquity)*100));
      pos.push(i.position.positionValue+SPACE.repeat(17 - i.position.positionValue.length)+i.position.marginUsed);
      pos.push(i.position.entryPx+SPACE.repeat(17 - i.position.entryPx.length)+i.position.liquidationPx);
    });
    pos.push("<br>");
  });

  return pos
}

export const HYPERLIQUID = createProject()

