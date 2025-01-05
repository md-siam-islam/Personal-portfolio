import React from 'react';

const Footer = () => {
    return (
      <footer class="footer flex items-center justify-center flex-col ">
       
        <p className='flex items-center text-white'> © <span className='text-[#0A3981]'>Md Siam Isla</span>{new Date().getFullYear()} - All right reserved</p>

        
        <div className="flex items-center gap-3 ">
              <a
                href="https://www.facebook.com/MD.Siam.Islam.1478"
                target="_blank"
              >
                <img
                  className="w-10"
                  src="https://img.icons8.com/?size=48&id=118497&format=png"
                  alt=""
                />
              </a>
              <a href="https://github.com/md-siam-islam" target="_blank">
                <img
                  className="w-10"
                  src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png"
                  alt=""
                />
              </a>
              <a href="https://github.com/md-siam-islam" target="_blank">
                <img
                  className="w-10"
                  src="https://img.icons8.com/?size=48&id=13930&format=png"
                  alt=""
                />
              </a>
            </div>
      
    
    </footer>
    );
};

export default Footer;