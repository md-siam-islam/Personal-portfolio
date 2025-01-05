import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Vocabulary = () => {
  return (
    <div className="py-28 px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl text-center font-bold underline text-white mb-8">
        Vocabulary Larning Details Page
      </h1>
      <div className="max-w-4xl mx-auto bg-[#0A3981] rounded-lg shadow-lg overflow-hidden">
        {/* <img className="w-full h-64 object-cover p-5" src={img} alt="WorldVisaDesk Project" /> */}
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Vocabulary Larning
          </h2>
          <p className="text-gray-400 mb-4">
            This webpage is an English learning platform where users can enhance
            their proficiency through various methods. It offers diverse
            resources and interactive tools designed to improve users' English
            skills effectively. For instance, platforms like the British
            Council's LearnEnglish website provide high-quality courses and
            resources for learners at all levels. LEARN ENGLISH Similarly, BBC
            Learning English offers a wide range of free audio, video, and text
            materials to help users improve their English. BBC Additionally,
            Voice of America's Learning English platform provides lessons with
            vocabulary, listening, and comprehension activities tailored for
            English learners. LEARNING ENGLISH These resources can significantly
            aid users in enhancing their English language skills.
          </p>
          <div className="space-y-2">
            <p className="text-gray-400">
              <span className="font-bold text-white">Live Project: </span>
              <a
                href="https://assignment-9-8f7cc.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                https://assignment-11-d6f7f.web.app{" "}
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white"> Repository: </span>
              <a
                href="https://github.com/programming-hero-web-course1/b10-a9-authentication-md-siam-islam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                GitHub Repository <FaGithub className="ml-2" />
              </a>
            </p>
            {/* <p className="text-gray-400">
              <span className="font-bold text-white">Server Repository: </span>
              <a
                href="https://github.com/programming-hero-web-course2/b10a11-server-side-md-siam-islam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                GitHub Repository <FaGithub className="ml-2" />
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
