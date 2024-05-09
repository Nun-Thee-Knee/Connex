import {Menu} from "lucide-react"

const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div className="flex gap-10 justify-center items-center">
            <h1>Logo</h1>
            </div>
        <div className='hidden lg:block'>
        <ul className='flex gap-10 justify-center items-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Contact</li>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl">Get Started</button>
        </ul>
        </div>
        <div className='lg:hidden'>
            <Menu/>
        </div>
        </div>
    </div>
  )
}

export default NavBar