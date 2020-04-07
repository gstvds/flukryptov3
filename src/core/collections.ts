import { App } from './pulse';
import * as core from './index';

export const CoinCollection = App.Collection({
  groups: ['all', 'subscribes'],
  model: {
    id: String,
    name: String,
    fullName: String,
    value: String,
    volume: String,
    dayChange: String,
  },
});

export const Subscribe = (id: string, data: Array<object>) => {
  if (CoinCollection.getGroup('subscribes').has(id)) {
    CoinCollection.removeFromGroups(id, 'subscribes');
  } else {
    CoinCollection.collect(data, 'subscribes');
  }
}