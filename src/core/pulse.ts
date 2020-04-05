import Pulse from "~/../pulse/dist";
// @ts-ignore
import { APIKEY } from 'react-native-dotenv';

const App = new Pulse();

const api = App.API({
  options: {
    headers: {
      authorization: `Apikey ${APIKEY}`
    },
  },
  baseURL: 'https://min-api.cryptocompare.com',
})

export default async function Request() {
  return (await api.get('data/top/totaltoptiervolfull?limit=10&tsym=USD'));
}