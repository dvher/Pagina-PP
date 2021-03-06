import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt';
import State from '../reducers/IsAdmin';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';
 
const reducer = persistReducer(
  {
    key: 'state',
    storage: new CookieStorage(Cookies, {
      expiration: {
        'default': 600 * 3
      }
    }),
    transforms: [
      encryptTransform({
        secretKey: 'my-super-secret-key',
        onError: function (error) {
          // Handle the error.
        },
      }),
    ],
  },
  State
);

const x =  () => {
  let store = createStore(reducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default x;