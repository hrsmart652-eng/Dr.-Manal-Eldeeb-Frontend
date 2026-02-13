import graduate from '../../assets/Happy graduate tossing his cap.png'

function AuthPage({ children }) {
  return (
    <div className="min-h-screen w-full flex bg-[#F0EBE5] items-center justify-center gap-10 lg:gap-24 px-6 md:px-16 py-10">

      <div className="hidden md:flex md:w-1/3 justify-center self-center">
        <img
          src={graduate}
          alt="Graduate"
          className="w-[200px] lg:w-[200px] object-contain"
        />
      </div>


      <div className="w-full md:w-3/5 lg:w-[600px] flex flex-col items-center justify-center">
       
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-[#2B416A] ">
          Leaders Academy
        </h1>

     
        <div className="w-full flex justify-center">
          {children}
        </div>
      </div>

    </div>
  )
}

export default AuthPage