import axios from "axios";


export const getTokenPrice = async (symbol) => await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)