import * as ActionType from 'actions/UsersActions'

let defaultState = {
    userId: '1',
    users: []
}

function UsersReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionType.LOADED_USERS:
            return Object.assign({}, state, {users: action.response})
            break
        case ActionType.USERS_SELECTED:
            return Object.assign({}, state, {userId: state.userId})
            break
        default:
            return state
    }
}

export default UsersReducer
