"use client";
import { Navbar, Button } from "keep-react";
import { Card } from "keep-react";
import { CaretRight } from "phosphor-react";
import ImageWallpaper from "../src/image/WWDC.jpg";
import { Avatar } from "keep-react";
import "../src/App.css";
import Avatar1 from "./image/Avatar1.jpg";
import Avatar2 from "./image/Avatar2.jpg";
import Avatar3 from "./image/Avatar3.jpg";
import Avatar4 from "./image/Avatar4.jpg";
import Avatar5 from "./image/Avatar5.jpg";
import TamañoPeso from "./image/TamañoyPeso.jpg";
import Memory from "./image/Memory.png";
import Logo from "./image/Logo.jpg";

function App() {
  return (
    <>
      <div className="justify-items-center justify-center" id="Navbar">
        <Navbar fluid={true}>
          <Navbar.Container className="flex items-center justify-between">
            <Navbar.Container className="flex items-center">
              <Navbar.Divider></Navbar.Divider>
              <Navbar.Container
                tag="ul"
                className="lg:flex hidden items-center justify-between gap-8"
              >
                <Navbar.Link linkName="MacBookAirM2" href="#Wallpaper" />
                <Navbar.Link linkName="Descripción" href="#Descripcion" />
                <Navbar.Link linkName="WWDC" href="#WWDC" />
              </Navbar.Container>
              <Navbar.Collapse collapseType="sidebar">
                <Navbar.Container tag="ul" className="flex flex-col gap-5">
                  <Navbar.Link linkName="Home" />
                  <Navbar.Link linkName="Projects" />
                  <Navbar.Link linkName="Similars" />
                </Navbar.Container>
              </Navbar.Collapse>
            </Navbar.Container>

            <Navbar.Container className="flex gap-2">
              <Button
                size="sm"
                type="primary"
                className="bg-black"
                href="https://www.apple.com/mx/"
              >
                Apple Company
              </Button>
              <Navbar.Toggle />
            </Navbar.Container>
          </Navbar.Container>
        </Navbar>
      </div>

      <div
        className="bg-black flex justify-center items-center text-white text-center font-bold text-3xl lg:text-6xl lg:h-1/2screen"
        id="Wallpaper"
      >
        <h1 className="text-2xl lg:text-6xl">MacBookAirM2</h1>
        <img
          src={Logo}
          alt="slider-1"
          className="h-1/2 lg:h-full w-1/2 mt-10"
        />
      </div>

      <div className="flex justify-around" id="Descripcion">
        <div>
          <Card className="md:p-6 p-5 max-w-lg">
            <Card.Title>Sistema Operativo</Card.Title>
            <Card.Description>
              macOS es el sistema operativo para computadoras de escritorio más
              avanzado del mundo. Y macOS Sonoma transforma tu Mac en una
              computadora superpoderosa, ideal para jugar y trabajar.
              Revoluciona tus videollamadas, disfruta un rendimiento más rápido
              que elevará tu experiencia de gaming y descubre un mundo de
              opciones para personalizar tu dispositivo.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              See More...
            </Card.Link>
          </Card>
        </div>

        <div>
          <Card className="md:p-6 p-5 max-w-lg">
            <Card.Title>Accesibilidad</Card.Title>
            <Card.Description>
              Las funcionalidades de accesibilidad ayudan a las personas con
              alguna discapacidad a aprovechar al máximo su nueva MacBook Air.
              Gracias al soporte integrado para visión, audición, motricidad y
              aprendizaje, crear y hacer cosas asombrosas está al alcance de
              todos, disfruta de la productividad que tenemos en la macOS no te
              detendras.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              See More...
            </Card.Link>
          </Card>
        </div>

        <div>
          <Card className="md:p-6 p-5 max-w-lg">
            <Card.Title>Garantia</Card.Title>
            <Card.Description>
              Tu Mac viene con 90 días de soporte técnico gratuito y garantía
              limitada de un año. Contrata el AppleCare+ para Mac para extender
              tu cobertura a tres años a partir de la fecha de compra del
              AppleCare+ y obtén reparaciones ilimitadas por daños accidentales
              originados por el manejo, cada una sujeta a un cargo de servicio
              de $1,899 por daño de pantalla o estructura externa.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              See More...
            </Card.Link>
          </Card>
        </div>
      </div>

      <div className="justify-items-center justify-center flex h-20 grid gap-4 content-center ">
        <Avatar.Group>
          <Avatar shape="circle" size="lg" stacked={true} img={Avatar1} />
          <Avatar shape="circle" size="lg" stacked={true} img={Avatar2} />
          <Avatar shape="circle" size="lg" stacked={true} img={Avatar3} />
          <Avatar shape="circle" size="lg" stacked={true} img={Avatar4} />
          <Avatar shape="circle" size="lg" stacked={true} img={Avatar5} />
          <Avatar.Counter size="lg" total={99} href="/" />
        </Avatar.Group>
      </div>

      <div class="container p-5 mt-10">
        <h1 class="text-4xl font-bold text-end ">Tamaño y peso</h1>
        <br></br>
        <div class="flex items-center justify-center ">
          <img
            class="rounded-lg"
            src={TamañoPeso}
            height="50%"
            width="50%"
          ></img>
          <p class="text-gray-800 flex-grow text-center text-sm sm:text-base md:text-lg">
            <br></br>Grosor: 1.13 cm
            <br></br>Ancho: 30.41 cm
            <br></br>Profundidad: 21.50 cm
            <br></br>Peso: 1.24 kg4
          </p>
        </div>
      </div>

      <div class="container mx-auto p-5 mt-10">
        <h1 class="text-4xl font-bold text-start">Memoria y Almacenamiento</h1>
        <br></br>
        <div class="flex items-center justify-center ">
          <p class="text-gray-800 flex-grow text-center text-sm sm:text-base md:text-lg">
            <br></br>Configurable con:
            <br></br>16 GB o 24 GB
            <br></br>SSD de 256 GB <br></br>
            <br></br>Configurable con:
            <br></br>512 GB, 1 TB o 2 TB
            <br></br>512 GB
            <br></br>SSD de 512 GB <br></br>
            <br></br>Configurable con:
            <br></br>1 TB o 2 TB
          </p>
          <img class="rounded-lg" src={Memory} height="50%" width="50%"></img>
        </div>
      </div>
      <br></br>

      <div className="flex justify-around bg-gray-950" id="WWDC">
        <img src={ImageWallpaper} alt="slider-1" height="50%" width="50%" />
      </div>
    </>
  );
}

export default App;
