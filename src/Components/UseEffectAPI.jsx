import React, { useState, useEffect } from 'react'
// import Loading from './github/loading';
import GithubUsers from "./GithubUsers";
// import Search from './Search';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");
    const [userSearch, setUserSearch] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            //  setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            // setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    // if (loading) {
    //     return <Loading />
    // }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
          axios.get(`https://api.github.com/search/users?q=${input}`).then(res => { setUserSearch(res.data.items); setTotalItemCount(res.data) })
          setLoading(false)
          console.log(userSearch);
        }, 1200);
      }

    return (
        <>
            
           
            <form form classNameName="form-control my-5" >
        <div classNameName="flex justify-center space-x-3">
          <input value={input} onChange={(e) => { setInput(e.target.value); setUserSearch([]) }} type="search" placeholder="Search" classNameName="w-4/6  input input-primary input-bordered lg:w-2/6" />
          <button onClick={onSubmitHandler} classNameName="btn btn-primary">Search</button>
        </div>
      </form >
    

   
      <GithubUsers users={users}/>

        </>
    )
}

export default UseEffectAPI
