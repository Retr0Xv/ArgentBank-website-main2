export const SET_TOKEN = "SET_TOKEN";

export const SET_USER = "SET_USER";

export const RESET_USER = "RESET_USER";


export const setToken = (token) => (dispatch) => {
    dispatch({
        type: SET_TOKEN,
        payload: token
    });
};

export const setUser = (user) => (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: user
    });
};

export const resetUser = () => (dispatch) => {
    dispatch({
        type: RESET_USER,
    })
}