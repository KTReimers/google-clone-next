export const dynamic = "force-dynamic";

import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function ImageSearchPage({searchParams}) {
    const startIndex = searchParams.start || "1";
    // await new Promise((resolve) => setTimeout(resolve, 10000)); //this is to prevent from too many fetches after each save
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&searchType=image&start=${startIndex}`);

    // console.log(response)
    if(!response.ok){
      if(response.statusText == "Not Found"){
        return <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">No Results found</h1>
          <p className="text-lg">Try searching something else or go back to home page.</p>
          <Link href="/" className="text-blue-500">Home</Link>
        </div>
      }
      throw new Error("Something went wrong")
    }
    const data = await response.json()
    // console.log(data)
    const results = data.items;

    // this did not work as the data coming back when search term was not found was a 404 so the error handler would catch it.
    // if(!results){
    //   return <div className="flex flex-col justify-center items-center pt-10">
    //       <h1 className="text-3xl mb-4">No Results found</h1>
    //       <p className="text-lg">Try searching something else or go back to home page.</p>
    //       <Link href="/" className="text-blue-500">Home</Link>
    //     </div>
    // }

    return (
      <>
        {results && <ImageSearchResults results={data}/>}
      </>
    )
}
