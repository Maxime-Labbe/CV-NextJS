export const initialState = {
    data: [],
    isLoading: true,
    isError: false,
}

export const RANK_FETCH_INIT = 'RANK_FETCH_INIT';
export const RANK_FETCH_SUCCESS = 'RANK_FETCH_SUCCESS';
export const RANK_FETCH_FAILURE = 'RANK_FETCH_FAILURE';

export function rankReducer(state : any, action : any) {
    switch (action.type) {
        case RANK_FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case RANK_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
            }
        case RANK_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            throw new Error();
    }
}