import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Contributor() {
  const [contributor,setContributor]=useState([])
const apiUrl="https://api.github.com/repos/jayk-gupta/web-resources-project/contributors?40per_page=100";

    useEffect(()=>{
fetchApi();
    },[])
    async function fetchApi(){
      try{
      const response=await fetch(apiUrl);
      const data=await response.json();
      // console.log(data);
      setContributor(data);
      }
      catch(e){
        console.log("server is donw"+e);
      }
    }
  return (
    <div className='contributor'>
      <h3 className='text-center text-2xl font-bold bg-[#5454548d] rounded-2xl m-5 inline-block p-2 text-center'>Our Contributor</h3>
     
      <div className='grid  gap-4 grid-cols-4 items-center justify-center'>
      {contributor.map(data=>{
        return(
          <div className='rounded-xl w-45 bg-gradient-to-r from-[#545454] to-[#807f7f] p-2 m-2'>
          <img className='' src={data.avatar_url} alt={data.login}/>
          <p className=' text-center text-xl font-medium'>{data.login}</p>
          <p className='text-center text-xl font-medium'>{data.contributions} commits</p>
          <p className='text-center text-xl font-medium border-2 text-slate-600 bg-[#858484] rounded
           border-[#353435] ml-8 mr-8'>Profile</p>
         
            
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Contributor;