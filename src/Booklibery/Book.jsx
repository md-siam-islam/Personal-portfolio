import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Book = () => {
  return (
    <div className="py-28 px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl text-center font-bold underline text-white mb-8">
      BookNest Details Page
      </h1>
      <div className="max-w-4xl mx-auto bg-[#0A3981] rounded-lg shadow-lg overflow-hidden">
        {/* <img className="w-full h-64 object-cover p-5" src={img} alt="WorldVisaDesk Project" /> */}
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            BookNest
          </h2>
          <p className="text-gray-400 mb-4">
            This website is a book library. First, you need to log in to the
            website otherwise, you won’t be able to perform any actions. On this
            website, you can add books of your choice from the "Add Book"
            section. You will be able to view the books you’ve added in the "All
            Books" section. If you want to update a book you’ve added, you can
            do so by clicking the "Update" button. To borrow a book, you need to
            select the book’s category first. This website has four categories,
            and clicking on your desired category will display all the books
            under that category. Once you find the book you need, click on it
            and then click the "Borrow" button to add it to the "Borrow
            Section." When borrowing a book, you must set a return date. If the
            book’s quantity is 0, you won’t be able to borrow it. You cannot
            borrow a book again unless you return the one you’ve already
            borrowed. The books you add can only be viewed by you; others won’t
            have access to them. The implementation of JWT tokens ensures that
            each user's session is secure and that they can only access their
            own data. If a logged-in user lacks a valid token, they will be
            automatically logged out to maintain the integrity of the platform.
            JWT.IO By combining these features with robust security measures,
            the platform offers a user-friendly and secure environment for
            managing and borrowing books.
          </p>
          <div className="space-y-2">
            <p className="text-gray-400">
              <span className="font-bold text-white">Live Project: </span>
              <a
                href="https://assignment-11-d6f7f.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center"
              >
                https://assignment-11-d6f7f.web.app{" "}
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white">Client Repository: </span>
              <a
                href="https://github.com/programming-hero-web-course2/b10a11-client-side-md-siam-islam"
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
                href="https://github.com/programming-hero-web-course2/b10a11-server-side-md-siam-islam"
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

export default Book;
