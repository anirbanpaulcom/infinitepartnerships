import React from 'react';
import Container from '../component/layout/container';
import { H2, H3, P1, P2 } from '@/lib/ui';
import Image from 'next/image';
import Clients from '../component/splitscreen/clients';

export default function About() {
  const employees = [
    { name: 'TAO WONG', role: 'Algorithm Engineer' },
    { name: 'RYAN ZHANG', role: 'Graphic Designer' },
    { name: 'BEE CHEN', role: 'UX/UI Designer' },
    { name: 'ROB TAYLOR', role: 'Customer Relation Manager' },
    { name: 'TINA LANG', role: 'Product Manager' },
    { name: 'SARAH UNG', role: 'Office Administrator' },
  ];

  return (
    <Container>
      <section className="flex flex-col w-full h-full justify-center items-center ">
        <H2 className="mt-20">ABOUT US</H2>
        <div className="h-1 w-10 mb-10 bg-white rounded-xl" />
        <P1>Finding Inspiration in Every Turn</P1>
        <P1 className="max-w-5xl text-center">
          At INFINITE, we provide you a wide variety of mobile app development
          solutions for different platforms, which include iOS i.e. iPad and
          iPhone, Windows and Android. We have a team of knowledgeable and
          creative mobile app developers intend to accomplish your specific
          business projects and requirements.
        </P1>

        <Image
          width={300}
          height={400}
          className="h-[60%] w-[90%] my-20"
          src="https://static.wixstatic.com/media/a3c153_20122b9a32cc4e9a9faca835b9f82d14~mv2.jpg/v1/fill/w_1361,h_673,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_20122b9a32cc4e9a9faca835b9f82d14~mv2.jpg"
          alt={''}
        />
      </section>

      <section className="flex flex-col w-full h-full justify-center px-32 py-20 bg-gradient-to-t from-gray-900 via-black to-gray-900">
        <H2 className="text-center">CORE VALUE</H2>
        <div className="h-1 w-10 mb-10 self-center bg-white rounded-xl" />

        <div className="my-10">
          <H3 className="text-[#b9a991] font-serif">OUR GENE IS</H3>
          <H2>INNOVATION &INSPIRATION</H2>
          <P2>
            Innovation motivates action: to take risks, encourage curiosity and
            new ideas, learn from mistakes, and constantly strive to exceed
            expectations. Through innovation, we generate solutions for our
            customers and raise the bar — both within our workplace and
            throughout our industry.
          </P2>
        </div>

        <div className="my-10">
          <H3 className="text-[#b9a991] font-serif">ALWAYS BE </H3>
          <H2>CRIOUS</H2>
          <P2>Interested in everything around us and how to make it better </P2>
        </div>

        <div className="my-10">
          <H3 className="text-[#b9a991] font-serif">FULL OF</H3>
          <H2>PASSION</H2>
          <P2>
            Passion generates excitement for what we do and how we do it. With
            Passion at the heart of everything we do, we nurture ideas, inspire
            excellence, and find creative ways to eliminate obstacles for
            cultivating growth.
          </P2>
        </div>

        <div className="my-10">
          <H3 className="text-[#b9a991] font-serif">BE AN</H3>
          <H2>AMBSSADOR</H2>
          <P2>
            We are proud to be problem solvers. We like the people we work with
            – coworkers, managers, clients – and genuinely enjoy helping one
            another succeed.
          </P2>
        </div>

        <div className="my-10">
          <H3 className="text-[#b9a991] font-serif">ACT WITH</H3>
          <H2>INTEGRITY</H2>
          <P2>
            We’re honest, transparent and committed to doing what’s best for our
            customers and our company. We openly collaborate in pursuit of the
            truth. We have no tolerance for politics, hidden agendas or
            passive-aggressive behavior.
          </P2>
        </div>
      </section>

      <section
        className="relative w-full h-full bg-cover bg-center py-20 flex flex-col justify-center"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/db5bce_9a6ea32d1ad64e1096e544ec80754d65~mv2.jpg/v1/fill/w_1521,h_1390,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_9a6ea32d1ad64e1096e544ec80754d65~mv2.jpg')`,
        }}
      >
        <div className="flex justify-start items-center my-10 pl-10">
          <video
            className="w-[60%] h-[60%] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://video.wixstatic.com/video/db5bce_577fb3606dfa4dd3bea56eb0643fdec4/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative -left-14 text-left text-white z-20 ">
            <h1 className="text-9xl font-extrabold ">
              <span className="text-yellow-500">T</span>ogether <br />
              <span className="text-yellow-500">E</span>veryone <br />
              <span className="text-yellow-500">A</span>chieve <br />
              <span className="text-yellow-500">M</span>ore
            </h1>
          </div>
        </div>

        <div className="w-full px-10 py-10 bg-opacity-75 flex flex-wrap justify-center items-center gap-6">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="h-56 w-72 mx-10 flex flex-col justify-center items-center bg-gray-800 rounded-md"
            >
              <h2 className="text-xl font-bold mb-2 text-yellow-400">
                {employee.name}
              </h2>
              <p>{employee.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Clients />

      <section className="flex flex-col w-full h-full justify-center items-center my-20 mb-32">
        <H2 className=" absolute  max-w-2xl text-center line-clamp-6 z-40">
          TALK TO US TODAY WITH FIRST FREE CONSULTATION
        </H2>

        <div className="relative left-60 flex items-center justify-center mt-8">
          <div className="w-48 h-48 bg-gradient-to-r from-pink-500 to-white text-white text-lg font-bold rounded-full flex items-center justify-center"></div>

          <button className=" z-50 absolute top-32 text-3xl font-bold right-24 w-60 h-60 bg-gradient-to-r from-pink-500 to-white rounded-full">
            Book Now
          </button>
        </div>
      </section>
    </Container>
  );
}
