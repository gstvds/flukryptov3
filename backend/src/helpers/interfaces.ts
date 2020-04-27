export interface Request {
  query: {
    page: string;
  };
}

export interface Response {
  status: (status: number) => { send: any }
}

export interface Coin {
  CoinInfo: {
    FullName: string;
    Name: string;
  };
  DISPLAY: {
    USD: {
      PRICE: string;
      CHANGEPCT24HOUR: string;
      TOTALVOLUME24HTO: string;
    };
  };
}