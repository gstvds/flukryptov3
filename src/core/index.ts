import { App } from './pulse';
import * as routes from './routes';
// @ts-ignore
import { APIKEY, baseURL } from 'react-native-dotenv';

export const api = App.API({
  baseURL: baseURL,
  options: {
    headers: {
      authorization: `Apikey ${APIKEY}`
    },
    method: 'get',
  },
});


export default {
  api,
  routes: { ...routes },
};