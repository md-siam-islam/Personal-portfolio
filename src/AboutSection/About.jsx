import img from '../assets/image/software-developer-6521720_1280.jpg'
import lotti from '../assets/image/Animation - 1736054152933.json'
import Lottie from "lottie-react";

const About = () => {
    return (
        <div id='about' className='my-20 border-y-2 py-8'>
                <h1 className='text-2xl md:text-4xl font-bold text-center uppercase underline mb-6 text-white'>about <span className='text-[#0A3981]'> me</span></h1>
            <div className='flex justify-between items-center flex-col lg:flex-row gap-5 mt-10'>

               <div className='w-full lg:w-2/4'>
               <p className='text-start text-white'>My name is Siam, currently pursuing a Diploma in <span className='text-[#0A3981]'>Computer Science and Technology </span>(CST) in Dhaka. I have proficiency in <span className='text-[#0A3981]'>HTML, CSS, Tailwind CSS, React.js, Express.js, MongoDB, and Firebase</span>. I completed a Frontend Development course from Programming Hero, which was both challenging and rewarding. Throughout the course, I encountered numerous obstacles and errors that tested my determination. Despite moments of frustration, my passion and resilience kept me on track, enabling me to <span className='text-[#0A3981]'>uccessfully complete over 40 diverse projects</span>. Each project presented unique challenges, but perseverance led me to solutions, strengthening my skills and resolve. My journey in web development has been demanding, but each hurdle has been a learning opportunity, reinforcing my commitment to this field.</p>
               </div>

               <div className='w-full lg:w-2/4'>
               <Lottie animationData={lotti} loop={true}></Lottie>
                {/* <img className='rounded-2xl' src={img} alt="" /> */}
               </div>
            </div>
        </div>
    );
};

export default About;