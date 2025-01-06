import { FaCss3, FaFigma, FaGithubSquare, FaHtml5,FaJsSquare, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiFirebaseFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";


const Skills = () => {

  const cards = [
    { icon: "fab fa-html5", name: "HTML", bg: "bg-purple-500" },
    { icon: "fab fa-css3-alt", name: "CSS", bg: "bg-blue-500" },
    { icon: "fab fa-js-square", name: "JavaScript", bg: "bg-yellow-500" },
    { icon: "fab fa-react", name: "React", bg: "bg-blue-400" },
    { icon: "fas fa-wind", name: "Tailwind CSS", bg: "bg-teal-500" },
    { icon: "fas fa-server", name: "Express.js", bg: "bg-gray-700" },
    { icon: "fas fa-database", name: "MongoDB", bg: "bg-green-500" },
    { icon: "fab fa-figma", name: "Figma", bg: "bg-purple-500" },
    { icon: "fab fa-git-alt", name: "Git", bg: "bg-orange-500" },
    { icon: "fab fa-github", name: "GitHub", bg: "bg-green-500" },
  ];
  return (
    <div id="skill" className="my-20 border-y-2">

      <div class=" text-[#0A3981] py-16 px-8">
        <h2 class="text-4xl font-bold text-center mb-12">
         <span className="text-white"> My </span>Skills <span class="text-purple-500">↘</span>
         
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><FaHtml5></FaHtml5>HTML</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>

                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><FaCss3></FaCss3>CSS</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><RiTailwindCssFill />Tailwind Css</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                
                
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><FaJsSquare />JS</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>

                
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><RiReactjsLine />React Js</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>


                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><SiExpress /> Exrress Js</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
               
               


                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="md:text-lg font-medium flex items-center gap-1 text-white"><DiMongodb /> <p className="">Mongo db</p></span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
               
               


                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><RiFirebaseFill /> Firebase</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
               
               


                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><FaGithubSquare /> Github</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
               
               


                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-4">

              <span class="text-lg font-medium flex items-center gap-1 text-white"><FaFigma /> Figma</span>
              <div class="flex space-x-1">
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-500 rounded-full"></span>
               
               


                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
                <span class="w-4 h-4 bg-purple-800 rounded-full"></span>
              </div>
            </div>
            <div class="h-px bg-gray-700"></div>
          </div>

          

        
        </div>
        <div className=" md:p-6 px-0">
      <Marquee gradient={false} speed={50}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} hover:opacity-90 text-white text-center py-6 px-4 rounded-lg shadow-lg mx-4 w-36`}
          >
            <i className={`text-4xl ${card.icon}`}></i>
            <p className="mt-2 text-lg font-bold">{card.name}</p>
          </div>
        ))}
      </Marquee>
    </div>

      </div>
    </div>
  );
};

export default Skills;
