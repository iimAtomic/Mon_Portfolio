import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"
import calculatrice from "../../Assets/Projects/calculatrice.png";
import autistic from "../../Assets/Projects/autistic.png";
import QR_code from "../../Assets/Projects/QR.png";
import todoList from "../../Assets/Projects/Todolist.png";
import ecom from "../../Assets/Projects/ecom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Projets <strong className="purple">Recents</strong>
        </h1>
        <p style={{ color: "white" }}>
        Vous trouverez ici les recents projets sur lesquelles j'ai travaillé
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autistic}
              isBlog={false}
              title="AutisticPrime"
              description="Il s'agit d'un site conçu dans le but de numériser et de centraliser les données nécessaires à l'apprentissage des métiers du numérique par les personnes autistes. Ils peuvent discuter entre eux grâce à un forum mis en place à cet effet avec websocket."
              ghLink="https://github.com/iimAtomic/AutisticPrime_V1"
              demoLink="https://github.com/iimAtomic/AutisticPrime_V1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QR_code}
              isBlog={false}
              title="QR_generator_and_reader"
              description="Il s'agit simplement d'un générateur de code QR combiné à un lecteur de code QR. Le front est en html css et le backend en Javascript avec les librairies instacan"
              ghLink="https://github.com/iimAtomic/QR-CODE-GENERATOR"
              demoLink="https://qr-code-generator-sigma-navy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculatrice}
              isBlog={false}
              title="Calculatrice"
              description="Petite calculatrice avec une interface travailler avec css . Son fonctionnement suis une logique etablit avec js"
              ghLink="https://github.com/iimAtomic/Projet_Calculatrice_JS8HTML_CSS"
              demoLink="projet-calculatrice-js-8-html-css.vercel.app"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoList}
              isBlog={false}
              title="Agenda"
              description="Une todo list destinée  erégistré des activités ou des programmes . L'utilisateur peut ajouter,supprimer,grouper ou modifier des taches à volonté"
              ghLink="https://github.com/iimAtomic/Todo_List"
              demoLink="https://todo-list-five-rho-43.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
