import img from '../assets/image/project-10.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Visadesk = () => {
  return (
    <div className=" px-4 py-28 md:px-0">
      <h1 className="text-2xl py-10 md:text-4xl text-center font-bold underline text-white">
        WorldVisaDesk Details Page
      </h1>
      <div className="max-w-4xl mx-auto bg-[#0A3981] rounded-lg shadow-lg overflow-hidden">
        
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-white mb-4">WorldVisaDesk</h2>
          <p className="text-gray-400 mb-4">
          This website is a visa application platform where users can create visa applications. To create a visa application, users must first log in. If a user attempts to create a visa application without logging in, they will be redirected to the login page. Once logged in, users can add visa applications through the "Add Visa" page. They can view their submitted visa applications on the "My Added Visas" page, where they have the option to update or cancel their applications as needed. Additionally, users cannot view visa applications added by other users.
          </p>
          <div className="space-y-2">
            <p className="text-gray-400">
              <span className="font-bold text-white">Live Project: </span>
              <a
                href="https://assignment-10-2980b.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                https://assignment-10-2980b.web.app <FaExternalLinkAlt className="ml-2" />
              </a>
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white">Client Repository: </span>
              <a
                href="https://github.com/programming-hero-web-course2/b10-a10-client-side-md-siam-islam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                GitHub Repository <FaGithub className="ml-2" />
              </a>
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white">Server Repository: </span>
              <a
                href="https://github.com/programming-hero-web-course2/b10-a10-server-side-md-siam-islam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                GitHub Repository <FaGithub className="ml-2" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visadesk;
