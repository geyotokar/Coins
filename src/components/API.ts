import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/`
})

export type GetPriceDataType = {
    bitcoin?: {
        btc?: number
        eth?: number
        usd?: number
    }
    ethereum?: {
        btc?: number
        eth?: number
        usd?: number
    }
    dollar?: {
        btc?: number
        eth?: number
        usd?: number
    }
}

export const API = {
    getPrice(id: string, idVs: string) {
        return instance.get<GetPriceDataType>(`simple/price?ids=${id}&vs_currencies=${idVs}`)
            .then(res => res.data as GetPriceDataType)
    },
    getBTCHistory(date: string){
        return instance.get<HistoryDataType>(`coins/bitcoin/history?date=${date}&localization=false`)
            .then(res => res.data as HistoryDataType)
    },
    getETHHistory(date: string){
        return instance.get<HistoryDataType>(`coins/ethereum/history?date=${date}&localization=false`)
            .then(res => res.data as HistoryDataType)
    }
}

export type HistoryDataType = {
    id: string
    symbol: string,
    name: string,
    image: {
        thumb: string,
        small: string
    },
    market_data: {
        current_price: CurrentPriceType
    }
}
type CurrentPriceType = any