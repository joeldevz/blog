import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
function IndexPage(props) {
  return (
    <>
      <Head>
        <title>Desarrollador Backend</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="font-sans bg-white">
        <div>
          <Nav />
          <section className="bg-white mt-20">
            <div className="max-w-2xl px-6 text-center mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800">
                ¡Hola!,{" "}
                <span className="bg-indigo-600 text-white rounded px-1">
                  Soy Christopher Joel
                </span>{" "}
                .
              </h2>
              <p className="text-gray-600 mt-4">
                Llevo <b>+2 años</b> trabajando en desarrollo de Backend y
                Frontend. Trabajando para empresas en el desarrollo de webs,
                aplicaciones, mantenimiento de servidores y creando mis propias
                apps.
              </p>
              <Brands />
              <div className="flex items-end justify-center mt-16">
 </div>
            </div>
          </section>
          <section className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white">Sobre mi</h2>
              <p className="text-gray-50 my-4">
                Actualmente me sigo
                formando diariamente en <b>JavaScript,  NodeJS</b> y en
                otras tecnologías como <b> Next.JS, React, MongoDB, Python, TypeScript</b>. Me
                encanta compartir mis conocimientos, durante varios meses he
                dado <b> clases de programación.</b>

              </p>
              <div className="flex items-center justify-center mt-12">
                <Link href="/blog">
                  <a className="flex items-center text-gray-50 text-2xl font-semibold  hover:underline hover:text-gray-50">
                    <span>Visitar Blog</span>

                    <svg
                      className="h-10 w-10 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 pattern py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white">Ultimos Proyectos</h2>

              <div className="flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="flex items-center justify-center h-40 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                      <img

                        src="./img/phonetec.png"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      className="block bg-gray-700 mt-5 rounded-md overflow-hidden "
                    >
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-white text-lg font-bold">
                          Phonetec
                        </p>

                        <span className="block text-gray-300 mt-2">
                          www.phonetec.es
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="flex items-center justify-center h-40 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                      <img

                        src="./img/tecnoservices.png"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      className="block bg-gray-700 mt-5 rounded-md overflow-hidden "
                    >
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-white text-lg font-bold">
                          TecnoServices
                        </p>

                        <span className="block text-gray-300 mt-2">
                          www.tecnoservices.es
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="flex items-center justify-center h-40 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                      <img

                        src="./img/kowe.png"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      className="block bg-gray-700 mt-5 rounded-md overflow-hidden "
                    >
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-white text-lg font-bold">
                          KOWE
                        </p>

                        <span className="block text-gray-300 mt-2">
                          Proximamente...
                        </span>
                      </div>
                    </a>
                  </div>

                </div>
              </div>

              <div className="flex items-center justify-center mt-12">
                <Link href="https://github.com/joeldevz">
                  <a
                    className="flex items-center text-white hover:underline hover:text-gray-200"
                    target="_blank"
                  >
                    <span>Ver más en Github</span>

                    <svg
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="max-w-5xl px-6 mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Latest Posts
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                <Link href={`/blog/`}>
                  <a className="max-w-sm bg-white m-auto item-center shadow-lg rounded-lg overflow-hidden my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <img
                      className="w-full h-56 object-cover object-center"
                      src="/img/js.png"
                      alt="avatar"
                    />
                    <div className="flex items-center px-6 py-3 bg-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-7 w-7 text-white fill-current"
                      >
                        <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                        <path
                          fill="#000001"
                          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                        />
                      </svg>

                      <h1 className="mx-3 text-white font-semibold text-lg">
                        Comenzando con JavaScript
                      </h1>
                    </div>
                  </a>
                </Link>

                <Link href={`/blog/`}>
                  <a className="max-w-sm bg-white m-auto item-center shadow-lg rounded-lg overflow-hidden my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <img
                      className="w-full h-56 object-cover object-center"
                      src="/img/js.png"
                      alt="avatar"
                    />
                    <div className="flex items-center px-6 py-3 bg-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-7 w-7 text-white fill-current"
                      >
                        <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                        <path
                          fill="#000001"
                          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                        />
                      </svg>

                      <h1 className="mx-3 text-white font-semibold text-lg">
                        Comenzando con JavaScript
                      </h1>
                    </div>
                  </a>
                </Link>
                <Link href={`/blog/`}>
                  <a className="max-w-sm bg-white m-auto item-center shadow-lg rounded-lg overflow-hidden my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <img
                      className="w-full h-56 object-cover object-center"
                      src="/img/js.png"
                      alt="avatar"
                    />
                    <div className="flex items-center px-6 py-3 bg-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-7 w-7 text-white fill-current"
                      >
                        <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                        <path
                          fill="#000001"
                          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                        />
                      </svg>

                      <h1 className="mx-3 text-white font-semibold text-lg">
                        Comenzando con JavaScript
                      </h1>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="flex items-center justify-center mt-12">
                <Link href="/blog">
                  <a className="flex items-center text-gray-600 hover:underline hover:text-gray-500">
                    <span>Ver más</span>

                    <svg
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        <Footer />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { blogs },
  };
}

export default IndexPage;
