import { put, takeEvery } from 'redux-saga/effects'
import { incrementByAmount } from './counterSlice'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* incrementAsync(action: any) {
  yield delay(1000)
  yield put(incrementByAmount(action.payload))
}

export default function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}