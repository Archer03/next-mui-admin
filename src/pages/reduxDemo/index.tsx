import Button from '@mui/material/Button'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux'
import { decrement, increment } from '../../redux/counter/counterSlice'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span>{count}</span>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  )
}