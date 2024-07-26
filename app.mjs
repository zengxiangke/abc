import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createStore } from 'redux'

function rawRedux() {
  const initialState = { count: 0 }
  const reducer = (oldState, action) => {
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
}

function simpleEnhancer() {
  const foo = (a) => (b) => console.log([a, b])
  foo(1)(2)
  // >> [1, 2]

  const initialState = { count: 0 }
  const reducer = (oldState, action) => {
    switch (action.type) {
      case 'add':
        return { ...oldState, count: oldState.count + 1 }
      default:
        return oldState
    }
  }
  const store = createStore(
    reducer,
    initialState,

    // enhancer used as:
    // return enhancer(createStore)(reducer, preloadedState);
    (_createStore) => (reducer, preloadedState) => {
      const store = _createStore(reducer, preloadedState)
      const originDispatch = store.dispatch

      store.dispatch = (action) => {
        originDispatch(action)
        console.log('dispatch - result', action, store.getState())
      }

      return store
    },
  )

  store.dispatch({ type: 'add' })
}

const slice = createSlice({
  name: 'user',
  initialState: { name: 'abc', roles: [] },
  reducers: {
    changeUsername: (state, action) => {
      state.name = action.payload
    },
    setAsAdmin: (state) => {
      state.roles.push('admin')
    },
  },
})

const store = configureStore({
  reducer: slice.reducer,
})

store.subscribe(() => {
  console.log('store changed', store.getState())
})

store.dispatch(slice.actions.changeUsername('abc'))
store.dispatch(slice.actions.setAsAdmin())
