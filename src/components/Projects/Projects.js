import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"
import calculatrice from "../../Assets/Projects/calculatrice.png";
import autistic from "../../Assets/Projects/autistic.png";
import QR_code from "../../Assets/Projects/QR.png";
import todoList from "../../Assets/Projects/Todolist.png";
import arosage from "../../Assets/Projects/arosage1.png";
import anumerique from "../../Assets/Projects/anumerique1.png";
import diamant from "../../Assets/Projects/diamant1.png";
import meteo from "../../Assets/Projects/meteo1.png";

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
              imgPath={anumerique}
              isBlog={false}
              title="Association Website"
              description="Il  sagit du site web que j'ai réalisé pour l'association A-numérique. Il a été fait avec Next.js"
              ghLink="https://github.com/iimAtomic/A-numerique"
              demoLink="https://a-numerique.vercel.app/"
            />
                
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alwilshoes}
              isBlog={false}
              title="Allwil shoes Ecommerce Website"
              description="Il  sagit du site ecom que j'ai réalisé pour l'entreprise Allwil Shoes  Il a été fait avec Php et wordpress"
              ghLink="https://allwilshoes.com/boutique-allwil/"
              demoLink="https://allwilshoes.com/boutique-allwil/"
            />
                
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diamant}
              isBlog={false}
              title="Boutique ecommerce de ventes de ressources pour le jeu Garena free fire "
              description="Il permet aux acheteur de voir les tarifs du vendeurs  qui est youtubeur et de le contacter pour leurs achats"
              ghLink="https://diamant-website.vercel.app/"
              demoLink="https://diamant-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meteo}
              isBlog={false}
              title="Site météo"
              description="Site qui présente la mété parisiene via des icones qui donne la temperature et le temps , il a été fait avec nextjs et l'api openweather"
              ghLink="https://github.com/iimAtomic/meteoapp"
              demoLink="https://meteoapp-beta.vercel.app"
            />
          </Col>

          


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arosage}
              isBlog={false}
              title="Réseau social pour gardiennage de plantes"
              description="Il s'agit s'agit d'un reseau social fait avec flutter en front et java springboot en back end. Le fichier apk sera bientot disponible"
              ghLink="https://github.com/iimAtomic/arosage_v1_flutter"
              demoLink="https://github.com/iimAtomic/arosage_v1_flutter"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculatrice}
              isBlog={false}
              title="Calculatrice"
              description="Une calculatrice pratique en html css et js !"
              ghLink="https://github.com/iimAtomic/Projet_Calculatrice_JS8HTML_CSS"
              demoLink="https://projet-calculatrice-js-8-html-css.vercel.app"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
