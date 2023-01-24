import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './components/useFetch'

function App() {
  const {users, loading} = useFetch()
  const [followers, setFollowers] = useState([])
  const [page, setPage] = useState(0)

  const handlePage = (index: number) => {
    setPage(index)
  }

  useEffect(() => {
    if(loading) return
    setFollowers(users[page])
  },[loading, page])
  

  return (
    <div className='App' style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
     {followers.map((user: any)=>{
      const {id, avatar_url, login} = user
      return <article key={id}>
         <img src={avatar_url} alt={login} height="200px" width="200px"/>
         <p>{login}</p>
      </article>
     })}

     <div>
       {
        users.map((item: any, index: number) => {
             return <button onClick={() => handlePage(index)}>{index+1}</button>
        })
       }
     </div>
    </div>
  )
}

export default App
