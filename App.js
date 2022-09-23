import React from "react";
import thunk from "redux-thunk";
import codePush from "react-native-code-push";
import { configureStore } from "@reduxjs/toolkit";
import {comicReducer} from './src/features/comic'
import { Route } from './src/navigators/main'
import { Provider } from 'react-redux'
// import { applyMiddleware, legacy_createStore as createStore} from 'redux';

const store = configureStore({
  reducer: {
    comic: comicReducer
  }
})
// const store = createStore(rootReducer, applyMiddleware(thunk))
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => (
  <Provider store={store} >
      <Route />
  </Provider>
)

export default codePush(codePushOptions)(App);