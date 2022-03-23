import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiverUsers = searchParams.get('filter') === 'active'

  return (
    <>
      <div>
        <div>User 1</div>
        <div>User 2</div>
        <div>User 3</div>
        <h2>User Activity</h2>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({ filter: 'offline' })}>
          Offline Users
        </button>
        <br />
        <br />
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      <br />
      <br />
      <h4>Share the link with your friends: 
        
        {showActiverUsers ? 
        (<a href="http://localhost:3000/users?filter=active">Online users</a>) : 
        (<a href="http://localhost:3000/users?filter=offline">Offline users</a>)
        }
      </h4>
      
    </>
 
  )
}
