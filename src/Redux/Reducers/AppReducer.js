import { type_App_Loading } from '../Actions/actionType';

const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type_App_Loading:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
}