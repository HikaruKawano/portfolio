import { Container, Link, Separator } from "./components";
import moment from "moment";
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";

function App() {
  moment.locale("pt-br");
  const date = moment({ year: 2004, month: 10, day: 9 });
  const dateNow = moment();

  return (
    <>
      <Container className="container box-border h-auto flex justify-between pb-20 my-9  rounded-2xl flex-col w-11/12 bg-zinc-800 bg-opacity-80  ">
        <header className="w-full h-72 flex justify-center flex-col items-center  ">
          <img
            src="../src/assets/Logo.png"
            alt=""
            className="w-1/5 mb-5 h-5/5 "
          />
          <nav className="flex items-center gap-4 ">
            <Link href="">Home</Link>

            <Separator />
            <Link href="">about me</Link>

            <Separator />
            <Link href="">projects</Link>

            <Separator />
            <Link href="">contact</Link>
          </nav>
        </header>

        <section className="h-80 flex justify-center w-full">
          <div className=" gap-6 mt-6 flex justify-center w-2/3">
            <div
              id="img"
              className="bg-orange-700 w-36 h-36 rounded-full "
            ></div>
            <div className=" flex-col w-2/6">
              <h1 className="text-orange-600 text-2xl">Hello Word</h1>
              <p className=" text-zinc-400 text-xl  ">
                I am a Freelancer Fontend and backend developer
              </p>
              <button className="bg-orange-600 w-2/6 rounded-xl h-10 font-semibold text-zinc-300 mt-3">
                More
              </button>
            </div>
          </div>
        </section>

        <section className="h-96 flex gap-6 justify-center ">
          <div id="img" className="bg-orange-700 w-64 h-96 rounded-2xl "></div>
          <div className=" flex-col w-2/6">
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
                  {dateNow.diff(date, "year")} ago
                </p>
                <p className="text-orange-500">andersonkawano09@gmail.com</p>
                <p className="text-orange-500">
                  <Link href="https://github.com/HikaruKawano">
                    github.com/HikaruKawano
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-auto flex gap-6 mt-40 flex-col justify-center  items-center ">
          <h1 className="text-orange-600 text-xl"> Portifolio </h1>

          <div className=" flex flex-wrap gap-7 h-full w-5/6 items-center justify-center">
            <div className="card bg-orange-600 w-64 h-96 rounded-2xl "></div>

            <div className="card bg-orange-600 w-64 h-96 rounded-2xl "></div>

            <div className="card bg-orange-600 w-64 h-96 rounded-2xl "></div>

            <div className="card bg-orange-600 w-64 h-96 rounded-2xl "></div>

            <div className="card bg-orange-600 w-64 h-96 rounded-2xl "></div>
          </div>
        </section>

        <footer className="mt-48 flex items-center justify-center flex-col">
          <img
            src="../src/assets/Logo.png"
            alt=""
            className="w-1/5 mb-5 h-5/5 "
          />
          <div className="flex gap-4 justify-center items-center">
            <div>
              <Bs.BsInstagram className="text-zinc-100 text-3xl"></Bs.BsInstagram>
            </div>
            <div>
              <Ai.AiOutlineMail className="text-zinc-100 text-3xl"></Ai.AiOutlineMail>
            </div>
            <div>
              <Bs.BsGithub className="text-zinc-100 text-3xl"></Bs.BsGithub>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default App;
