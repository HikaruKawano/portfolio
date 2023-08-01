import { Container, Link, Separator } from "./components";
import moment from "moment";
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";
import Logo from "./assets/Logo.png";
import cartun from "./assets/cartun.jpeg";
import foto from "./assets/foto.jpeg";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";
import { CustomTabPanel } from "./components/tab";
import Card from "./components/Cards";

import { ProgramerProjects, DesignerProjects } from "./api/db";


function App() {
  moment.locale("pt-br");
  const date = moment({ year: 2004, month: 10, day: 9 });
  const dateNow = moment();

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Container className="container box-border h-auto flex justify-between pb-20 my-9  rounded-2xl flex-col w-11/12 bg-zinc-800 bg-opacity-80  ">
        <header
          id="home"
          className="w-full h-72 flex justify-center flex-col items-center  "
        >
          <img src={Logo} alt="" className="w-1/5 mb-5 h-5/5 " />
          <nav className="flex items-center gap-4 ">
            <Link href="#home">Home</Link>

            <Separator />
            <Link href="#my-info">about me</Link>

            <Separator />
            <Link href="#projects">projects</Link>

            <Separator />
            <Link href="#contacts">contact</Link>
          </nav>
        </header>

        <section className="h-80 flex justify-center w-full">
          <div className="avatarDiv gap-6 mt-6 flex justify-center w-2/3">
            <img
              src={cartun}
              id="img"
              className="w-36 h-36 rounded-full "
            ></img>
            <div className="avatarText flex-col w-2/6">
              <h1 className="text-orange-600 text-2xl">Hello Word</h1>
              <p className=" text-zinc-400 text-xl  ">
                I am a Fontend and backend developer Freelancer.
              </p>
              <a href="#my-info">
                <button className="bg-orange-600 w-2/6 rounded-xl h-10 font-semibold text-zinc-300 mt-3">
                  More
                </button>
              </a>
            </div>
          </div>
        </section>

        <section id="my-info" className=" h-96 flex gap-6 justify-center ">
          <img src={foto} id="img" className=" w-64 h-96 rounded-2xl "></img>
          <div id="infoText" className=" flex-col w-2/6">
            <h1 className="text-orange-600">about me</h1>
            <p className=" text-zinc-400 text-xl  ">
              My name is Anderson Kawano. I am a Frontend and Backend developer,
              I have a degree in systems development technician. I work as a
              freelancer.
            </p>

            <Separator
              orientation="horizontal"
              className="mt-4 bg-orange-500 my-4"
            />

            <div className="flex justify-around">
              <div className="flex flex-col">
                <p className="text-zinc-400">Name</p>
                <p className="text-zinc-400">Age</p>
                <p className="text-zinc-400">Email</p>
                <p className="text-zinc-400">GitHub</p>
              </div>

              <Separator className="bg-orange-500 " />

              <div className="flex flex-col">
                <p className="text-orange-500">Anderson Kawano</p>
                <p className="text-orange-500">
                  {dateNow.diff(date, "year")} age
                </p>
                <p className="text-orange-500">
                  <Link href="mailto:andersonkawano09@gmail.com">
                    andersonkawano09@gmail.com
                  </Link>
                </p>
                <p className="text-orange-500">
                  <Link href="https://github.com/HikaruKawano">
                    github.com/HikaruKawano
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="h-auto flex gap-6 flex-col mt-40 justify-center  items-center "
        >
          <h1 className="text-orange-600 text-xl"> Portifolio </h1>

          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#EA580C'
              }
            }}
            sx={{
              ".Mui-selected": {
              color: `#EA580C`,
              },
              }}
            
            
          >
            <Tab
              
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab label="Designers" {...a11yProps(1)} />
          </Tabs>

          <CustomTabPanel value={value} index={0}>
            {ProgramerProjects.map((project) => (
              <Card
                image={project.Image}
                description={project.Descripton}
                name={project.Name}
                linkCode={project.LinkCode}
                linkPreview={project.LinkPreview}
                key={project.id}
              />
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {DesignerProjects.map((project) => (
              <Card
                image={project.Image}
                name={project.Name}
                linkPreview={project.LinkPreview}
                key={project.id}
              />
            ))}
          </CustomTabPanel>
        </section>

        <footer
          id="contacts"
          className="flex items-center justify-center mt-48 flex-col"
        >
          <img src={Logo} alt="" className="w-1/5 mb-5 h-5/5 " />
          <div className="flex gap-4 justify-center items-center">
            <div>
              <a
                href="https://www.instagram.com/hikaru_kawano/"
                target="_blank"
              >
                {" "}
                <Bs.BsInstagram className="text-zinc-100 text-3xl"></Bs.BsInstagram>{" "}
              </a>
            </div>
            <div>
              <a href="mailto:andersonkawano09@gmail.com" target="_blank">
                {" "}
                <Ai.AiOutlineMail className="text-zinc-100 text-3xl"></Ai.AiOutlineMail>{" "}
              </a>
            </div>
            <div>
              <a href="https://github.com/HikaruKawano" target="_blank">
                <Bs.BsGithub className="text-zinc-100 text-3xl"></Bs.BsGithub>{" "}
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default App;
