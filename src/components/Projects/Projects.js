import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ToDoList.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/WeatherApp.png";
import chatify from "../../Assets/Projects/HPP.png";
import suicide from "../../Assets/Projects/YatraWithUs.png";
import bitsOfCode from "../../Assets/Projects/Expenses.png";
// import suicide from "../../Assets/Projects/YatraWithus.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HousePrice Prediction"
              description="House Price Prediction Website – Developed a web application using React.js and a machine learning model to predict house prices based on location, size, and other factors. "
              ghLink="https://github.com/Trapti12Sharma/housepricepredictionV1"
              demoLink="https://housepricepredictionv1-2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense Tracker"
              description="Developed a React-based expense tracker app , integrating ECharts for visualizing daily and monthly expenses both."
              ghLink="https://github.com/Trapti12Sharma/-Expense-Tracker-frontend"
              demoLink="https://expense-tracker-frontend-cyan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Website"
              description="Weather Website – Developed a weather forecasting web app using HTML, CSS, and JavaScript to display real-time weather updates via API integration."
              ghLink="https://github.com/Trapti12Sharma/Weather-App"
              demoLink="https://vercel.com/trapti12sharmas-projects/weather-app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="To-Do-List"
              description="To-Do List App – Developed a dynamic to-do list using HTML, CSS, and JavaScript with task addition, deletion, and local storage functionality."
              ghLink="https://github.com/Trapti12Sharma/To-do-List"
              demoLink="https://to-do-list-puce-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="YatraWithUs"
              description="Discover hassle-free travel with YatraWithUs — a sleek and modern bus ticket booking app built using React."
              ghLink="https://github.com/Trapti12Sharma/YatraWithUs2"
              demoLink="https://yatra-with-us2.vercel.app/"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
