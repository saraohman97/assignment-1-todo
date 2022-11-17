import actiontypes from '../actiontypes'

const initState = {
    loading: false,
    error: null,
    data: []
}

const issuesReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().issues.getIssues:
            return {
                ...state,
                loading: true
            }

        case actiontypes().issues.getIssuesSuccess:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }

        case actiontypes().issues.getIssuesFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actiontypes().issues.addNewIssue:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false,
                error: null
            }

        default:
            return state
            
    }
}

export default issuesReducer