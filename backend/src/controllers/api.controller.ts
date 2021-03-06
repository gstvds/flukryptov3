import axios from 'axios';
import { CRYPTO_API } from '../config'
import Logger from '../helpers/logger';
import { Request, Response, Coin} from '../helpers/interfaces';


const index = async (req: Request, res: Response) => {
  const logger = new Logger('/api-controller', 'POST', req.body?.auth?.uid ?? undefined);
  logger.log('Requisição para buscar as criptomoedas', req.body);
  try {
    let coinData: any[];
    const { uid } = req.body.auth;
    const { page } = req.body;

    logger.log(`Requisição para buscar as criptomoedas na página ${page}`);

    const getData = await axios({
      baseURL: CRYPTO_API.baseURL,
      url: `data/top/totaltoptiervolfull?limit=20&tsym=USD&page=${page}`,
      method: 'get',
      headers: {
        authorization: `Apikey ${CRYPTO_API.APIKEY}`
      },
    });

    coinData = getData.data.Data.map((coin: Coin) => {
      return {
        id: `${Math.floor(Math.random() * 1000000)}`,
        fullName: coin.CoinInfo.FullName,
        name: coin.CoinInfo.Name,
        price: coin.DISPLAY.USD.PRICE,
        percentage: coin.DISPLAY.USD.CHANGEPCT24HOUR,
        volume: coin.DISPLAY.USD.TOTALVOLUME24HTO,
      }
    });

    res.status(200).send(coinData);
  } catch (error) {
    let err = error?.response?.data?.error ?? error?.response?.data ?? error?.response ?? error;

    console.log(JSON.stringify(err));
    
    res.status(500).send({ err })
  }
}

module.exports = {
  index,
}