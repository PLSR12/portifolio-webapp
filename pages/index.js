import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { BiCode, BiCodeAlt } from 'react-icons/bi'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import avatar from '../public/avatar.jpg'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import design from '../public/design.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>PLSR12 </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl flex gap-2">
              <BiCode /> PLSR12 <BiCodeAlt />
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Portifólio
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Pedro Lucas
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Desenvolvedor FullStack
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Desenvolvedor de aplicações Web, desenvolvendo aplicações
              escaláveis, de boa performance, seguindo boas práticas.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/P3DR0_45">
                {' '}
                <AiFillTwitterCircle />{' '}
              </a>
              <a href="https://www.linkedin.com/in/pedro-lucas-dos-santos/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/PLSR12">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Experiência e Conhecimento
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Desde o início da minha jornada como Desenvolvedor FullStack, fiz
              trabalho remoto para
              <span className="text-teal-500"> Pequenas,Médias e Grandes </span>
              <span className="text-teal-500"> Empresas </span>e colaborei com
              pessoas talentosas para criar produtos digitais para uso interno e
              externo.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Eu tenho uma ampla gama de experiência, incluindo design de marca,
              visão de negócio e programação.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                Tecnologias
              </h3>
              <p className="py-2"> </p>
              <h4 className="py-4 text-teal-600">FrontEnd</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <h4 className="py-4 text-teal-600">BackEnd</h4>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">Postgre</p>
              <p className="text-gray-800 py-1">MongoDb</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 ">
                Linguagens
              </h3>
              <p className="py-2"></p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Typescript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  text-teal-600 ">
                Ferramentas de desenvolvimento
              </h3>
              <h4 className="py-4 text-teal-600"></h4>
              <p className="text-gray-800 py-1">VsCode</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">PostMan</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1">Material UI</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projetos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Abaixo estão alguns projetos coorporativos e pessoais.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Clicando, você será redirecionado para visualizar melhor o
              projeto.{' '}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://www.linkedin.com/posts/pedro-lucas-dos-santos_reactjs-nodejs-postgresql-activity-6922965380151808000-bHwl?utm_source=share&utm_medium=member_desktop">
                <Image
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.linkedin.com/posts/pedro-lucas-dos-santos_nodejs-reactjs-postgresql-activity-6927584013528240128-7W6x?utm_source=share&utm_medium=member_desktop">
                <Image
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  src={web2}
                />
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="https://www.everydayturismo.com/">
                <Image
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  src={web3}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://m3tecnologia.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  src={web4}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://real-leopoldina.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  src={web5}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.linkedin.com/posts/pedro-lucas-dos-santos_nodejs-reactjs-postgresql-activity-6927584013528240128-7W6x?utm_source=share&utm_medium=member_desktop">
                <Image
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  src={web6}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
