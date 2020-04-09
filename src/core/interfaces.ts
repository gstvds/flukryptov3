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

export interface HeaderProps {
  children?: React.ReactNode;
  main?: boolean;
  title?: string;
  logout?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  color?: string;
}

export interface CryptoProps {
  iconName: string;
  children?: React.ReactNode;
  onPress: () => void;
  cryptoName: string;
  coinValue: string;
  coinVolume: string;
  coinDayChange: string;
  down?: boolean;
  onPressCard: () => void;
}

export interface ButtonProps {
  children?: React.ReactNode,
  onPress: any,
  color?: string;
  fontColor?: string;
  title: string;
  outline?: boolean;
  status: boolean;
  disabled: boolean;
}
