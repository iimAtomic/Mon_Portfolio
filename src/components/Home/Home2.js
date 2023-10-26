import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez <span className="purple"> Moi </span>Me présenter
            </h1>
            <p className="home-about-body">
             Passioné de programmation je passe mon temps a appprendre et tester de  nouveaux languages et techno
              <br />
              <br />Je  programme avec des langages tels que :
              <i>
                <b className="purple"> Php, Javascript et  C. </b>
              </i>
              <br />
              <br />
              J'utilise aussi  <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  les Frameworks de php et js telsque Symfony
                </b>
              </i>
              &nbsp; ou encore
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACTEZ MOI</h1>
            <p>
              Vous pouvez me <span className="purple">retrouver </span>avec 
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iimAtomic"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
      
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vegbalux/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/atomiic.code/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
