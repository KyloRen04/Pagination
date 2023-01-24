import axios from 'axios'
import { useEffect, useState } from 'react'
import pagination from '../util/pagination'

const useFetch = () => {
    const apiURL = 'https://api.github.com/users'
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([] as any)

    const getGithubUsers = async () => {
        const {data} = await axios.get(apiURL)
        setUsers(pagination(data))
        setLoading(false)
    }

    useEffect(()=>{
        getGithubUsers()
    },[])
  return {users, loading}
}

export default useFetch