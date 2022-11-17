import actiontypes from '../actiontypes'
import axios from 'axios'

export const getIssues = () => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.get('https://localhost:7080/api/Issues')
            if(res.status === 200) {
                dispatch(getIssuesSuccess(res.data))
            } else {
                throw new Error('Could not fetch the data.')
            }
        } catch (err) {
            dispatch(getIssuesFailure(err.message))
        }
    }
}
export const addIssue = (issue) => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.post('https://localhost:7080/api/Issues', issue)
            if(res.status === 200) {
                dispatch(addToList(res.data))
            } else {
                throw new Error('Could not fetch the data.')
            }
        } catch (err) {
            dispatch(getIssuesFailure(err.message))
        }
    }
}

const addToList = (issue) => {
    return {
        type: actiontypes().issues.addNewIssue,
        payload: issue
    }
}



const loading = (payload) => {
    return {
        type: actiontypes().issues.getIssues,
        payload
    }
}

const getIssuesSuccess = (issues) => {
    return {
        type: actiontypes().issues.getIssuesSuccess,
        payload: issues
    }
}
const getIssuesFailure = (err) => {
    return {
        type: actiontypes().issues.getIssuesFailure,
        payload: err
    }
}