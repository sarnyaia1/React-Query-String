import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';

    return(
        <>
            <div>
                <h3>User 1</h3>
                <h3>User 2</h3>
                <h3>User 3</h3>
            </div>
            <Outlet />
            <div>
                User Activity: 
                <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
                <button onClick={() => setSearchParams({filter: 'offline'})}>Offline users</button>
            </div>
            <div>
                User Membership: 
                <button onClick={() => setSearchParams({filter: 'active', membership: 'normal'})}>Normal membership</button>
                <button onClick={() => setSearchParams({filter: 'active', membership: 'premium'})}>Premium membership</button>
            </div>
            <div>
           
            </div>
            <br />
            <div>
                <h2>Saved search path:</h2> 
                {
                    showActiveUsers ? (<h3>Showing active users</h3>) : (<h3>Showing offline users</h3>)
                }
                http://localhost:3000/users?{searchParams.toString()}
                
            </div>
        </>

    )
}