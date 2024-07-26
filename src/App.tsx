import { createStore } from 'redux'

const initialState = { count: 0 }
const reducer = (oldState: any, action: any) => {
  switch (action.type) {
    case 'add':
      return { ...oldState, count: oldState.count + 1 }
    default:
      return oldState
  }
}
const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log('count is: ' + store.getState().count)
})

store.dispatch({ type: 'add' })
// >> count is: 1

export default function App() {
  return (
    <>
      <button
        onClick={() => {
          store.dispatch({ type: 'add' })
        }}
      >
        add
      </button>
    </>
  )
}
