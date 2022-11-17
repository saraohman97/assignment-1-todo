import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIssues } from './store/issues/issuesAction'
import Post from './Post'

const Main = () => {

  const dispatch = useDispatch()
  const { loading, error, data: issues } = useSelector(state => state.issuesReducer)

  useEffect(() => {
    dispatch(getIssues())
  }, [dispatch])


  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    <div className='main'>
      {issues.map(issue => (
        <Post key={issue.id} issue={issue} />
      ))}
    </div>
    </>
  )
}

export default Main