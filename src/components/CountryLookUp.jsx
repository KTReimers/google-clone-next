"use client";
import React, { useEffect, useState } from 'react'

export default function CountryLookUp() {
    const [country,setCountry] = useState("United States")
    useEffect(() => {
        fetch(`https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IP_API_KEY}`).then((res) => res.json()).then((data) => setCountry(data.country_name))
    },[]);
    return (
        <div className="flex justify-between">
            <div className="">{country}</div>
            <div className="">This is not the actual Google website! This is a clone project</div>
        </div>
    )
}
