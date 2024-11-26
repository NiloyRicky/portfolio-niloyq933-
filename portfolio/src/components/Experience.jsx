import React,{useState} from "react";
import experience from "./data/experience.json";

const Experience = () => {
  const[hovered,setHovered]=useState(false);
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE & Certificates</h1>
        {experience.map((data,index) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left" style={{ position: 'relative', display: 'inline-block' }}>
                  <a href={`/assets/${data.file}`} download={data.fileType} onMouseEnter={()=>setHovered(index)}
                    onMouseLeave={()=>setHovered(false)}
                  >
                  <img src={`/assets/${data.imageSrc}`} alt=""  />
                  </a>
                  {hovered===index && <span
                   style={{position: 'absolute',
                    bottom: '110%', 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '5px 10px',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',}}>Click to Download Certificate..</span>}
                  
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} | {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}></span>
                  </h4>
                  <h5 style={{ color: "white" }}>{data.experiences[0]}</h5> 
                  <h5 style={{ color: "white" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;