import { Container, Link, Separator } from "./components";
import moment from "moment";
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";
import Logo from "../src/assets/Logo.png";
import devFinances from "../src/assets/devFinances.png";
import card from "../src/assets/Cards.png";
import LittleDev from "../src/assets/littleDev.png";
import cartun from "../src/assets/cartun.jpeg";
import foto from "../src/assets/foto.jpeg";



function App() {
  moment.locale("pt-br");
  const date = moment({ year: 2004, month: 10, day: 9 });
  const dateNow = moment();
  
  

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

          <div className=" flex flex-wrap gap-7 h-full w-5/6 items-center justify-center">
            <div className="card w-96 h-64 rounded-2xl flex items-center justify-center  ">
              <img
                className="projects w-full h-full rounded-2xl"
                src={devFinances}
                alt=""
              />
              <h2 className="text-orange-600 font-semibold"> Dev Finances </h2>
              <p className="text-zinc-500 font-normal text-sm">
                finance management website
              </p>
              <div className="button flex gap-3">
                <a
                  href="https://github.com/HikaruKawano/DevFinances-react"
                  target="_blank"
                  className="w-auto h-10"
                >
                  <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
                    view code
                  </button>
                </a>

                <a
                  href="https://dev-finances-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
                    view site
                  </button>
                </a>
              </div>
            </div>

            <div className="card w-96 h-64 rounded-2xl ">
              <img
                className="projects w-full h-full rounded-2xl"
                src={card}
                alt=""
              />

              <h2 className="text-orange-600 font-semibold"> Cards </h2>
              <p className="text-zinc-500 font-normal text-sm">
                cards created for science fair
              </p>
              <div className="button flex gap-3">
                <a
                  href="https://github.com/HikaruKawano/Card"
                  target="_blank"
                  className="w-auto h-10"
                >
                  <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
                    view code
                  </button>
                </a>

                <a
                  href="https://card-ochre.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
                    view site
                  </button>
                </a>
              </div>
            </div>

            <div className="card w-96 h-64 rounded-2xl ">
              <img
                className="projects w-full h-full rounded-2xl"
                src={LittleDev}
                alt=""
              />

              <h2  className="TextGrande text-orange-600 font-semibold "> LittleDev </h2>
              <p   className="text-zinc-500 font-normal text-sm">
                website of a fictitious company created for studies
              </p>
              <div  className="button flex gap-3">
                <a
                  href="https://github.com/HikaruKawano/LittleDev"
                  target="_blank"
                  className="w-auto h-10"
                >
                  <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
                    view code
                  </button>
                </a>

                <a
                  href="https://little-dev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
                    view site
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer
          id="contacts"
          className="flex items-center justify-center mt-48 flex-col"
        >
          <img
            src={Logo}
            alt=""
            className="w-1/5 mb-5 h-5/5 "
          />
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
