import axios from 'axios'
import { getFetch } from './../../utils/fetch'
import { TRANSASCTION_API, UIT_PAYMENT_API } from './../../config'

export const fetchTransactions = () => {
  // console.log(TRANSASCTION_API, '==TRANSASCTION_API==')
  return getFetch(TRANSASCTION_API)
}

export const fetchBalance = async (userId) => {
  const url = `${UIT_PAYMENT_API}/balance/${userId}`
  const result = await getFetch(url)
  return result.balance || ''
}