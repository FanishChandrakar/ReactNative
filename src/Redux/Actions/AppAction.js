import { type_App_Loading } from './actionType'

const setAppLoading = () => {
    return async (dispatch , getState) => {
            dispatch({
                type: type_App_Loading,
            });
    }
}

export { setAppLoading }