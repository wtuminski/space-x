import { Agent } from "https";
import { observer } from "mobx-react";

// import { Error, Loading, Message } from "./"
import { useQuery } from "../../models";

export const Home = observer(() => {
  const { error, loading, data } = useQuery((store) => store.queryUsers({}, (qb)=>qb.rocket.name.id)
  );

  const { setQuery } = useQuery();
  if (error) return <p>{error.message}</p>
  if (loading) return <p>Loading</p>

  // const clickHandler = ()=> setQuery(store.mutateDelete_users(
  //   {where: {id: {_eq: "d0915ceb-d7ae-42b3-9d5b-0bfd1cc788f1"}}},
  //   undefined,
  //   ()=>{}));
  return (
    <div>
      <p>Users</p>
      {data?.users
      .filter(user=>!user.deleted)
      .map((user) => (
        <div key={user.id}>
          <p>{user.name} - {user.id}  
            <button onClick={()=>setQuery(user.changeName("Kordal"))}>changeName</button>
            <button onClick={()=>setQuery(user.deleteUser())}>delete</button>
          </p>
        </div>
      ))}
    </div>
  )
});
