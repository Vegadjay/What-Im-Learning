import './App.css';
import logo from './assets/Logo.svg'
import bg from './assets/Background.jpg'
import hero from './assets/Hero.webp'
function App() {

  return (
    <>
      <div className='h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
        <div className="p-10">
          <div>
            <Navbar />
          </div>
          <div className='mt-64 ml-64'>
            <Hero />
          </div>
        </div>
      </div>
    </>
  )
}

export function Navbar() {
  return <>
    <div className='flex justify-around'>
      <div className="logo">
        <div>
          <a href="#home">
            <img src={logo} alt="dukan svg" className='w-40' />
          </a>
        </div>
      </div>
      <div className="menu">
        <div className='flex justify-between gap-10'>
          <div className='hover:cursor-pointer hover:underline'>Products ^</div>
          <div className='hover:cursor-pointer hover:underline'>Company ^</div>
          <div className='hover:cursor-pointer hover:underline'>Resources ^</div>
          <div className='hover:cursor-pointer hover:underline'>Pricing ^</div>
        </div>
      </div>
      <div className="login-sign-up flex w-52 justify-between">
        <div className='signin-button mt-3 cursor-pointer'>
          Sign In
        </div>
        <div>
          <button className='h-12 w-36 bg-blue-800 rounded-xl  text-white'>Start Free</button>
        </div>
      </div>
    </div>
  </>
}


export const Hero = () => {
  return <>
    <div className='flex justify-between'>
      <div className='name-section'>
        <div className='big-font-title'>
          <h1 className='font-extrabold text-3xl text-slate-800'>
            Your Global Commerce
            <br />
            Partner,Engineered for
            <br />
            Peak Performance
          </h1>
        </div>
        <div className='sort-para'>
          <span>Launch your eye-catching online store with ease, attract and convert more customers than ever before.</span>
        </div>
        <div className='button-componant flex justify-center'>
          <button className='h-12 w-36 bg-blue-800 rounded-xl  text-white'>Get Started</button>
        </div>
        <div className='paly-store'>
          <span>Also Available on</span>
        </div>
      </div>
      <div className='hero-photo-section'>
        <div className='-mt-14'>
          <img src={hero} alt="hero image" width={ "1000px" } />
        </div>
      </div>
    </div>
  </>
}

export default App
