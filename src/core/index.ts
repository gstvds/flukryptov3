import { App } from './pulse';
import * as routes from './routes';
// @ts-ignore
import { APIKEY, baseURL } from 'react-native-dotenv';

export const API = App.API({
  baseURL: baseURL,
  timeout: 10000,
  options: {
    headers: { authorization: `Apikey ${APIKEY}`},
  },
});


export default {
  API,
  routes: { ...routes },
};