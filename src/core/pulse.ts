import Pulse from "~/../pulse/dist";

const App = new Pulse();

const api = App.API({
  options: {
    headers: {
      authorization: 'Apikey 1b77159fd738954a7062f9ac985943cc43c326c63b70cec8613ebb96d36b3468'
    },
  },
  baseURL: 'https://min-api.cryptocompare.com',
})

export default async function Request() {
  return (await api.get('data/top/totaltoptiervolfull?limit=10&tsym=USD'));
}