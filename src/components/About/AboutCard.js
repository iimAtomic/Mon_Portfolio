import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour je suis <span className="purple">VEGBA lUX </span>
           Je vis à <span className="purple"> Cergy, France.</span>
            <br />Je suis etudiant en Troisieme année d'inginerie informatique a l'EPSI de Paris
            <br />
            A temps partiel je travaille aussi comme equipier polyvalent ,  freelancer et volontaire dans une association
            <br />
            <br />
            En dehors de la programmation j'aime aussi : 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming </li>
            <li className="about-activity">
              <ImPointRight /> Les Mangas
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nous utiliserons l'heritage informatique pour batir le futur"{" "}
          </p>
          <footer className="blockquote-footer">Lux</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
