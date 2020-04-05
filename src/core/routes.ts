import { api } from '.'

export const getData = async (page: number) => {
  return (await api.get(`data/top/totaltoptiervolfull?limit=20&tsym=USD&page=${page}`));
}
