// ------------------------------------
// Constants
// ------------------------------------
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_MODEL = 'SET_MODEL'
export const SET_ISSUE = 'SET_ISSUE'

// ------------------------------------
// Actions
// ------------------------------------
export function setCategory (category) {
  return {
    type: SET_CATEGORY,
    category
  }
}

export function setModel (model) {
  return {
    type: SET_MODEL,
    model
  }
}

export function setIssue (issue) {
  return {
    type: SET_ISSUE,
    issue
  }
}

export const actions = {
  setCategory,
  setModel,
  setIssue
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_CATEGORY]: (state, action) => ({ ...state, category: action.category }),
  [SET_MODEL]: (state, action) => ({ ...state, model: action.model }),
  [SET_ISSUE]: (state, action) => ({ ...state, issue: action.issue }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function ticketReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}