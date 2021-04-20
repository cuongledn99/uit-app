import axios from 'axios'
import { getFetch } from './../../utils/fetch'
import { TRANSASCTION_API } from './../../config'

export const fetchTransactions = () => {
  console.log(TRANSASCTION_API, '==TRANSASCTION_API==')
  return getFetch(TRANSASCTION_API)
}