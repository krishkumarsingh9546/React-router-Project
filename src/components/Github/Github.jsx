import React, { useEffect, useState } from "react";

export default function Github(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/krishkumarsingh9546')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])
    return(
        <>
           <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}</div>
           <div className="flex justify-center items-center mb-4 rounded-lg "><img src={data.avatar_url} alt="git picture" width={300} /></div>
        </>
    )
}