import { createStore } from "redux";
import rotateReducer from "../reducers/rotateReducer";

function configureStore(state = { id: 0, stamina: 0, coin: 0 }) {
    return createStore(rotateReducer, state);
}

export default configureStore;