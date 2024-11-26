import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion components
import project from "./data/projects.json";

const Projects = () => {
  const [read, setRead] = useState(false);

  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PORTFOLIO</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data, index) => (
            <div
              key={data.id}
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "100%",
                  maxWidth: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3"
                style={{height:"200px",overflow:"hidden"}}>
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit:"cover",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "crimson" }}>
                    {data.title}
                  </h5>
                  <ul style={{ listStyle: "square", paddingLeft: "20px" }}>
                    <li className="card-text">{data.description[0]}</li>

                    <AnimatePresence>
                      {read === index && (
                        <motion.li
                          className="card-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {data.description[1]}
                        </motion.li>
                      )}
                    </AnimatePresence>

                    <div className="d-flex justify-content-end">
                      {/* Read More / Read Less Button */}
                      <p
                        className="btn"
                        style={{ color: "white", backgroundColor: "crimson" }}
                        onClick={() => setRead(read === index ? false : index)}
                      >
                        {read === index ? "Read Less" : "Read More"}
                      </p>
                    </div>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                    }}
                  >
                    <a href={data.demo} className="btn btn-primary mx-3" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;