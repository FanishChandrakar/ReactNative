import { type_App_Loading, type_App_Theme } from '../Actions/actionType';

const initialState = {
    loading: false,
    theme: 'dark' // dark || light
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type_App_Loading:
            return { ...state, loading: !state.loading };
        case type_App_Theme:
            return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
        default:
            return state;
    }
}