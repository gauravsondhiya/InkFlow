

const fullblog=()=>{
   let arr = [
     {"heading":"taxing laughter the joke tax chronicles",
      "date": "August 24,2026",
      "author":"gaurav",
       "fullblog":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur "
     }
   ]

    return (
        <div className="w-[80%] m-auto  h-screen">
             <div className="">
                {
                    arr.map((data,i)=>(
                        <div key={i} className=" p-5">
                           <h1 className="text-6xl font-bold">{data.heading}</h1>
                           <h5 className="text-xl mt-2">Posted on {data.date}</h5>
                           <p className="text-xl">{data.author}</p>
                           <p className="text-xl mt-2 text-wrap">{data.fullblog}</p>
                        </div>
                    ))
                }
          
             </div>
             {/* <div className="sm:col-span-8">

             </div> */}
        </div>
    )
}

export default fullblog;