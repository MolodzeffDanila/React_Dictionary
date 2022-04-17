import { createStore } from 'redux';

const initialState = {
    favourites: [],
    current: {}
};

const reducer = (state ,action) => {
    switch(action.type){
        case "ADD":
            let current = {
                word: action.word,
                phonetic: action.phonetic,
                part_of_the_speech: action.part_of_the_speech,
                definition: action.definition
            }

            return {
                favourites: state.favourites.concat([current]),
                current: current
            }
            /*return {
            word: action.word,
            phonetic: action.phonetic,
            part_of_the_speech: action.part_of_the_speech,
            definition: action.definition
        }*/
        default: return state;
    }
}

const saveToLocalStorage = (state) => {
    try {
        sessionStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = sessionStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage() ?? initialState;
const store = createStore(reducer, persistedStore);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;