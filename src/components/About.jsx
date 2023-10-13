function About() {
  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center align-items-center">
        {/* About Text */}
        <div className="col-md-6">
          <h1>About</h1>
          <p>
            This project is an assignment for my Server-Side Web Development
            course. The main goal of this assignment was to become familiar with
            React, one of the most widely used front-end technologies, and
            comprehend its complexities by creating a web application.
          </p>
          <p>
            The application integrates with the NASA API to fetch and display
            captivating space information. It showcases the power of React
            combined with the vast knowledge available through the NASA API.
          </p>
          <a
            href="https://github.com/mariamills/react_demo_fall_23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mt-3"
          >
            View on GitHub
          </a>
        </div>

        {/* Img */}
        <div className="col-md-6">
          <img
            className="img-fluid mb-4"
            src="https://robohash.org/perspiciatismollitiacommodi.png?size=300x300&set=set1"
            alt="About Illustration"
          />
        </div>
      </div>

      {/* Tech */}
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-12 mt-5">
          <h2>Technologies Used</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              React - For building the UI components
            </li>
            <li className="list-group-item">
              Bootstrap - For responsive design and styling
            </li>
            <li className="list-group-item">
              NASA API - For fetching space-related data
            </li>
            <li className="list-group-item">
              Jest & Cypress - For testing the application
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
