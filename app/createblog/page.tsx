

const createblog =()=>{
     return (
    <div className=" flex h-screen m-auto w-[80%] justify-around mt-5 ">
    
          <form action=""
            className=" w-[60%] [&>input]:rounded-sm  [&>input]:w-[100%] [&>input]:border [&>input]:border-blue-200 [&>input]:p-2 [&>input]:mb-4 [&>label]:text-2xl" >
          
            <label >Heading</label><br></br>
            <input type="text" placeholder="" /><br></br>
            <label>Author</label><br></br>
            <input type="text" placeholder="name" /><br></br>
            <textarea name="" id="" className="w-[100%] border border-blue-100 h-[60%] "></textarea>
            <input type="submit" className="mt-3 bg-black text-white font-bold"/>
          </form>
       
     

    </div>
  )
}


export default createblog