import { createStore } from "react-redux";

const initialState = {
    counter: 0
}

export default createStore(reducers, initialState);