
export default function Home() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-red-500 h-[20rem] w-[30rem]">
          <div className="text-center">
            <h1 className="-mt-12 text-2xl ">Login Here</h1>
          </div>
          <div className="flex flex-col">
              <div className="flex flex-col gap-10">
                <input type="text" className="h-10 rounded w-96 bg-slate-800" />
                <input type="text" className="h-10 rounded w-96 bg-slate-800" />
              </div>
                <div className="h-full flex justify-center items-center mt-7">
                  <button>Submit</button>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
