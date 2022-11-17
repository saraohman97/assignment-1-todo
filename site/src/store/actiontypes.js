
const actiontypes = () => {
    return {
        issues: {
            getIssues: 'GET_ISSUES',
            getIssuesSuccess: 'GET_ISSUES_SUCCESS',
            getIssuesFailure: 'GET_ISSUES_FAILURE',
            addNewIssue: 'ADD_NEW_ISSUE'
        }
    }
}

export default actiontypes