import {CALL_API, CHAIN_API} from 'middleware/api'

export const LOADED_USERS = Symbol('LOADED_USERS')

export function loadUsers() {
    return {
        [CALL_API]: {
            method: 'get',
            path: '/api/users',
            successType: LOADED_USERS
        }
    }
}

export const LOADED_USER_TWEETS = Symbol('LOADED_USER_TWEETS')

export function loadUserTweets(userId) {
    return {
        [CALL_API]: {
            method: 'get',
            path: `/api/users/${userId}/tweets`,
            successType: LOADED_USER_TWEETS,
            afterError: () => {
                history.push('/')
            }
        }
    }
}

export const USER_SELECTED = Symbol('USER_SELECTED')

export function selectUser(userId) {
    return {
        [CHAIN_API]: [
            () => loadUserTweets(userId),
            () => {
                return {
                    userId,
                    successType: USER_SELECTED,
                }

            }
        ]
    }
}
