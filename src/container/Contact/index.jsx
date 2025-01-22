import Contact from '../../components/Contact'
import Test2 from '../Test2/Test2'

const index = () => {
  return (
    <div className=' min-h-screen ' id="contact">
        <div
     className="flex flex-col md:flex-row justify-center items-center  lg:px-20 md:pl-5  md:w-[100%] lg:w-[100%]"
     >
        <Test2 />
        <Contact/>
    </div>
    </div>
  )
}

export default index