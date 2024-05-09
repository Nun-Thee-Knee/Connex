import Image from "next/image"
import NavBar from "~/components/NavBar"

const HomePage = () => {
  return (
    <>
    <div className=" p-10">
      <NavBar/>
      <div className="flex h-[80vh] flex-col lg:flex-row justify-between">
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">From Ideas to Icons</h1>
        </div>
        <div className="flex items-center justify-center h-full  w-full">
         <Image src="/rubbber.gif" height={700} width={700} alt="rubber"/>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center">
        <h1>A text goes here.</h1>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center justify-center">
          text
        </div>
        <div className="flex items-center justify-center">
          Image
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center justify-center">
          Image
        </div>
        <div className="flex items-center justify-center">
          text
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center justify-center">
          text
        </div>
        <div className="flex items-center justify-center">
          Image
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage