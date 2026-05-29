const signup = () => {
  return (
    <div className=" flex h-screen m-auto w-[80%] justify-around ">
      <div className=" w-[40%]  flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Create an Account</h1>
          <p className="text-2xl mt-2">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
        <div className=" w-[100%] mt-4 flex flex-col items-center justify-center">
          <form action=""
            className=" w-[60%] [&>input]:rounded-sm  [&>input]:w-[100%] [&>input]:border [&>input]:border-blue-200 [&>input]:p-2 [&>input]:mb-4 [&>label]:text-2xl" >
            <label>Username</label><br></br>
            <input type="text" placeholder="Enter your username" /><br></br>
            <label >Email</label><br></br>
            <input type="text" placeholder="gs@example.com" /><br></br>
            <label>Password</label><br></br>
            <input type="password" placeholder="gs@example.com" /><br></br>
            <input type="submit" className="mt-3 bg-black text-white font-bold"/>
          </form>
        </div>
      </div>

      <div className=" w-[60%] bg-blue-100 [&>div>h1]:text-6xl   flex  items-center justify-center">
        <div>
          <h1>Human</h1>
          <h1>stories & ideas </h1>
          <p className="text-xl">A place to read, write, and deepen your understanding</p>
        </div>
      </div>
    </div>
  );
};

export default signup;
