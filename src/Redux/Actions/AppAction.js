import { type_App_Loading, type_App_Theme } from './actionType'

const setAppLoading = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: type_App_Loading,
        });
    }
}

const setAppTheme = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: type_App_Theme,
        });
    }
}

export { setAppLoading, setAppTheme }