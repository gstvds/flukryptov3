import { API } from '.'

export const getData = async () => {
  return (await API.get('data/top/totaltoptiervolfull?limit=10&tsym=USD')).data;
}