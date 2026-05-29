const page = () => {
  let arr = [
    {
      heading: "taxing laughter the joke tax chronicles",
      date: "August 24,2026",
      author: "gaurav",
      fullblog:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
    img:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*OBB8VSehGVHuDHOHfFiOSA.png"
    },
  ];

  return (
    <div className="w-[80%] border m-auto   h-screen">
      {arr.map((data, i) => (
        <div key={i} className="border grid grid-cols-12 ">
          <div className=" border p-5 sm:col-span-10">
            <h1 className="text-3xl font-bold">{data.heading}</h1>
            <h5 className="text-xl mt-2">Posted on {data.date}</h5>
            <p className="text-xl">{data.author}</p>
            <p className="text-xl mt-2 text-wrap">{data.fullblog}</p>
          </div>
          <div className="sm:col-span-2 border m-auto">
            <img src={data.img} alt="logo" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
