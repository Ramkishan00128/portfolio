import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className='home'>
      <div className='HomePage d-flex flex-wrap flex-column justify-content-center mx-auto'>
        <header>
          <h1>
            Hi, I am
            <span className='text-warning ms-2 '>Ramkishan</span>
          </h1>
          <p>
            B.Tech/B.E. (Aerospace Engineering) looking for a job with MERN
            Stack Development skills living in Gurgaon/Haryana
          </p>
          <div className='icons'>
            <ul className='nav justify-content-center'>
              <li className='nav-item'>
                <a href='#' className='nav-link mx-2 bg-danger'>
                  <FaGithub className='display-6 ' />
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='https://www.linkedin.com/in/ram-kishan-323602130'
                  className='nav-link mx-2 bg-warning'
                  target='_blank'
                >
                  <FaLinkedin className='display-6 ' />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};
export default HomePage;
