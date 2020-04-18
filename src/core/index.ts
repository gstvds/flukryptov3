import { App } from './pulse';
import * as routes from './routes';
import { CoinCollection, Subscribe } from './collections';
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
  coins: {
    collections: {
      CoinCollection,
    },
    state: {
      subscribe: App.State({}).type(Object)
    },
    routes: {
      Subscribe,
    }
  },
  themed: App.State(false).type(Boolean),
  user: {
    state: {
      isLogged: App.State(false).type(Boolean),
      credentials: App.State<{ uid: any, idToken: any}>({ uid: null , idToken: null }).type(Object),
      currentUser: App.State({ status: 'noUser', isAnonymous: true }),
    },
  },
  loading: App.State(false).type(Boolean)
};