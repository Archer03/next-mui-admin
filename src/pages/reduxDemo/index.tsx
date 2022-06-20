import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../../redux'
import { decrement, increment } from '../../redux/counter/counterSlice'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Stack direction="row" sx={{alignItems: 'center'}}>
      <Button onClick={() => dispatch(increment())} >
        Increment
      </Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())} >
        Decrement
      </Button>
      <Button variant="contained" onClick={() => dispatch({ type: 'INCREMENT_ASYNC', payload: 10 })} >
        1s Async
      </Button>
    </Stack>
  )
}