import React from "react";

export default props => {
  const { projects, clients, experience } = props.projectNumber;
  return (
    <div className="projectNumber">
      <div className="pn-container container">
        <div>
          <h5>{projects}</h5>
          <p>Projects</p>
        </div>
        <div>
          <h5>{clients}</h5>
          <p>Clients</p>
        </div>
        <div>
          <h5>{experience}</h5>
          <p>Experience</p>
        </div>
      </div>
    </div>
  );
};
