import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../Redux/Action'

const Home = () => {

  const [ apiData, setApiData ] = useState([]);
  const data = useSelector((storeData) => {
    return storeData.blogs;
  });
  console.log(data.blogs)

  useEffect(() => {
    fetch("https://api.github.com/users/")
    .then(res => res.json())
    .then(result => setApiData(result.data));
  }, []);
  console.log(apiData);

  return (
    <div className='home-container container-fluid'>
      <div className='row'>
        
        {
          data.length > 0 ? (
            <>
              <p>New Added blog post</p>
              {
                data.map((e) => { 
                  return (
                    <div className="card w-25 my-3 mx-5" >
                      <div className="card-header" style={{ display: "flex", justifyContent: "center", minHeight: "5rem"}}><h4>{ e.title }</h4></div>
                      <div className="card-body" style={{}}>{ e.description }</div>
                      <div className="card-footer text-center">
                        <button className='btn'>Read more</button>
                      </div>
                    </div>
                  )
                })
              }
            </>
         ) : <h2>No recent Blog</h2>
        }
        
      </div>

      <div className="row">
      {
          apiData.map(e => {
            return (
              <div className='card w-25 m-5' key={e.id}>
                <div className='card-header' style={{ display: "flex", justifyContent: "center", height: "12rem", backgroundRepeat: "no-repeat", backgroudSize: "contains"}}>
                  <img src={e.avatar} className='card-image' alt="no-img" style={{borderRadius: "50%", width: "4rem", height: "4rem", position: "absolute", top: "165px"}} />                  
                </div>
                <div className="card-body text-center pt-5">
                  <h3>{e.first_name} {e.last_name}</h3>
                  <p>{e.email}</p>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="card-footer text-center">
                    <button className='btn'>Read more</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home