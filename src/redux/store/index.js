import { createStore } from "redux";
import rootReducer from "../reducers";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";


const persistConfig = {
    key : "root",
    storage,
}
const presistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(presistedReducer);

export const persistor = persistStore(store)