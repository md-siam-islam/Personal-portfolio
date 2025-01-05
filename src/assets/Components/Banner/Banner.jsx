import { Typewriter } from "react-simple-typewriter";
import img2 from "../../../assets/image/fuuspo.jpg";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <div className="pt-28 mb-32 flex justify-between  lg:flex-row flex-col px-4">
      <div className="lg:w-1/2 lg:text-left flex items-start flex-col">
        <h1 className="uppercase tracking-widest text-2xl font-semibold text-[#0A3981] mb-2">
          Hello, I'm
        </h1>
        <h1 className="uppercase text-4xl md:text-[30px] lg:text-[70px] mb-7 text-white">Siam Islam</h1>
        <h1 className="font-bold text-xl md:text-4xl my-5 text-[#0A3981] flex items-center gap-2">
          <p className="text-white">I am a </p>
          <Typewriter
            words={[" Web Developer", " UI/UX Designer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h1>

        <h3 className="text-xl font-semibold text-white">
          I am a passionate <span className="text-[#0A3981]">web developer</span> from Bangladesh, with a keen eye for
          detail and a strong enthusiasm for web design. I specialize in
          crafting visually engaging and highly functional websites that not
          only meet the needs of users but also deliver an exceptional digital
          experience.
        </h3>

        <h3 className="my-7">
          <a className="btn bg-[#0A3981] text-white font-bold px-6 py-2 uppercase hover:bg-cyan-700 font-font1">Download Resume <MdOutlineFileDownload /></a>
        </h3>



        <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/MD.Siam.Islam.1478" target="_blank">
                <img className="w-10" src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
            </a>
            <a href="https://github.com/md-siam-islam" target="_blank">
                <img className="w-10" src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="" />
            </a>
            <a href="https://github.com/md-siam-islam" target="_blank">
                <img className="w-10" src="https://img.icons8.com/?size=48&id=13930&format=png" alt="" />
            </a>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <img
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 39% 61% 70%",
          }}
          className="w-[280px] lg:w-[450px] transition-transform duration-500 hover:scale-110"
          src={img2}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Banner;
