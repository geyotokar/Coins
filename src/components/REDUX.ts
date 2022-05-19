import {API, GetPriceDataType, HistoryDataType} from './API'
import {Action, applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

let initialState = {
    amount1: 1 as number,
    amount2: 1 as number,
    value: {} as GetPriceDataType,
    historyBTCValues: [] as Array<number>,
    historyETHValues: [] as Array<number>,
    newHistoryValues: [] as Array<number>,
    usd: 1 as number
}

export type InitialStateType = typeof initialState

const REDUX = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    const insert = (arr: Array<number>, index: number, newItem: number) => [
        ...arr.slice(0, index), newItem, ...arr.slice(index)
    ]
    switch (action.type) {
        case 'COINS/SET_PRICE':
            return {
                ...state,
                value: action.data
            }
        case "COINS/SET_AMOUNT1":
            return {
                ...state,
                amount1: action.amount
            }
        case "COINS/SET_AMOUNT2":
            return {
                ...state,
                amount2: action.amount
            }
        case "COINS/SET_BTC_HISTORY":
            state.usd = action.data.market_data.current_price.valuesOf(action.data.market_data.current_price.usd) as number
            state.newHistoryValues = insert(state.historyBTCValues, action.id, state.usd)
            return {
                ...state,
                ...action.data,
                historyBTCValues: state.newHistoryValues
            }
        case "COINS/SET_ETH_HISTORY":
            state.usd = action.data.market_data.current_price.valuesOf(action.data.market_data.current_price.usd) as number
            state.newHistoryValues = insert(state.historyETHValues, action.id, state.usd)
            return {
                ...state,
                ...action.data,
                historyETHValues: state.newHistoryValues
            }
        default:
            return state;
    }
}

//ACTION
type ActionsType = InferActionsType<typeof actions>

export const actions = {
    setPrice: (data: GetPriceDataType) => ({type: 'COINS/SET_PRICE', data} as const),
    setAmount1: (amount: number) => ({type: 'COINS/SET_AMOUNT1', amount} as const),
    setAmount2: (amount: number) => ({type: 'COINS/SET_AMOUNT2', amount} as const),
    setBTCHistory: (data: HistoryDataType, id: number) => ({type: 'COINS/SET_BTC_HISTORY', data, id} as const),
    setETHHistory: (data: HistoryDataType, id: number) => ({type: 'COINS/SET_ETH_HISTORY', data, id} as const)
}
//THUNK
export const getPrice = (id: string, idVs: string): BaseThunkType<ActionsType> =>
    async (dispatch) => {
        let data = await API.getPrice(id, idVs);
        dispatch(actions.setPrice(data));
    }
export const getBTCHistory = (date: string, id: number): BaseThunkType<ActionsType> =>
    async (dispatch) => {
        let data = await API.getBTCHistory(date);
        dispatch(actions.setBTCHistory(data, id));
    }
export const getETHHistory = (date: string, id: number): BaseThunkType<ActionsType> =>
    async (dispatch) => {
        let data = await API.getETHHistory(date);
        dispatch(actions.setETHHistory(data, id));
    }

//STORE
type RootReducerType = typeof REDUX;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
const store = createStore(REDUX, compose(applyMiddleware(thunkMiddleware)))

export default store