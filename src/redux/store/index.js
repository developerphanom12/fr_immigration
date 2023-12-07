// import { createStore } from "redux";
// import rootReducer from "../reducers";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import { persistStore } from "redux-persist";


// const persistConfig = {
//     key : "root",
//     storage,
// }
// const presistedReducer = persistReducer(persistConfig, rootReducer)
// export const store = createStore(presistedReducer);

// export const persistor = persistStore(store)

import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import rootSaga from "../rootSaga";
import rootReducer from "../reducers";

//Application Files
// import rootSaga from "./rootSaga";
// import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['persistReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);