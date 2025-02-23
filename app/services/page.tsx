'use client';
import React, { useState } from 'react';
import Container from '../component/layout/container';
import { animationVariants, H1, H2, P1, P2 } from '@/lib/ui';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const sliderData = [
  {
    id: 1,
    backgroundImage:
      'https://static.wixstatic.com/media/db5bce_1467b93a541e45ee8c925af77083c48a~mv2.png/v1/fill/w_1521,h_902,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_1467b93a541e45ee8c925af77083c48a~mv2.png',
    title: 'FROM IDEA TO MOBILE REALITY',
    text: 'Need big ideas for your mobile apps? Our consultative approach will meet your business needs by working closely together with you to explore creative solutions. Our team will brainstorm with you on where to begin, where to go, and how to get you there. Whether you have a spark of an idea or an existing app – we can help. Getting your mobile strategy right is what our unique services are all about. We’ll wrestle with business challenges, discover new opportunities that will help you define and refine your product ideas into mobile app reality.',
  },
  {
    id: 2,
    backgroundImage:
      'https://static.wixstatic.com/media/a3c153_8f19b36adbf3444f92e919acba01bd4b~mv2.jpg/v1/fill/w_1521,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_8f19b36adbf3444f92e919acba01bd4b~mv2.jpg',
    title: '15+ YEARS OF EXPERIENCE',
    text: '',
  },
  {
    id: 3,
    backgroundImage:
      'https://static.wixstatic.com/media/a3c153_028983d1d11545da88fbff1afaf58d6f~mv2.jpg/v1/fill/w_1521,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3c153_028983d1d11545da88fbff1afaf58d6f~mv2.jpg',
    title: 'TURNING VISION INTO PROFIT',
    text: '',
  },
];

const imageSources = [
  'https://static.wixstatic.com/media/db5bce_ff18c212f66d4454bb8984b38379c6df~mv2.png/v1/fill/w_715,h_712,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_ff18c212f66d4454bb8984b38379c6df~mv2.png',
  'https://static.wixstatic.com/media/db5bce_d9a97e9c3f3841b9b7d1bc734fb9d7fc~mv2.png/v1/fill/w_715,h_712,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_d9a97e9c3f3841b9b7d1bc734fb9d7fc~mv2.png',
  'https://static.wixstatic.com/media/db5bce_04da383e1d944296b0a26a481a4243ac~mv2.png/v1/fill/w_715,h_712,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_04da383e1d944296b0a26a481a4243ac~mv2.png',
  'https://static.wixstatic.com/media/db5bce_4f065fcf39c44526be033eec47e0bc0e~mv2.png/v1/fill/w_715,h_712,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_4f065fcf39c44526be033eec47e0bc0e~mv2.png',
];

const videoData = [
  {
    id: 1,
    videoUrl:
      'https://video.wixstatic.com/video/db5bce_af21ec03ad1545f79fe3fd50eb6647e5/1080p/mp4/file.mp4',
    title: 'HOSPITALITY Food & Beverage',
  },
  {
    id: 2,
    videoUrl:
      'https://video.wixstatic.com/video/db5bce_6b7c3f07de7a4d8bafb0055336d151b7/1080p/mp4/file.mp4',
    title: 'Healthcare',
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [currentImage, setCurrentImage] = useState(0);

  const [currentVideo, setCurrentVideo] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageSources.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container>
      <section className="relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] xl:h-[100vh]  overflow-hidden">
        <div className="relative w-full h-full">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-screen  flex items-center justify-center transition-opacity duration-700 ease-in-out 
                ${index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 flex justify-center  mt-20 p-4">
                <div className="text-white max-w-6xl mx-auto">
                  <H1
                    animationType="slideLeft"
                    className={`${index === 0 ? 'text-orange-600' : ''}`}
                  >
                    {slide.title}
                  </H1>
                  {slide.text && (
                    <P1
                      className="text-black max-w-5xl"
                      animationType="slideLeft"
                    >
                      {slide.text}
                    </P1>
                  )}
                  {index === 0 && (
                    <button className="w-48 h-12 text-xl bg-orange-600 text-white my-10 rounded-full">
                      Make Appointment
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2  text-black p-3 rounded-full text-2xl"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="size-14" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black p-3 rounded-full text-2xl"
          onClick={handleNext}
        >
          <ChevronRightIcon className="size-14" />
        </button>
      </section>

      <section className="bg-white h-full flex flex-wrap  justify-between items-center  py-20">
        <div className="w-full md:w-[55%]">
          <div className="p-4 md:p-0 sm:ml-12 md:ml-28 ">
            <h4 className="text-black text-5xl font-extrabold">
              WEB & MOBILE APP <br /> DEVELOPMENT
            </h4>
            <P2 className="text-orange-600 font-extrabold">
              iOS app development
            </P2>
            <P2 className="text-black">
              With the proper knowledge and innovation, we create our clients
              dream into reality. We also strictly follow the iOS standard while
              creating an iPhone mobile application so that well deliver the
              best and high-quality product. Our extensive expertise in iOS app
              development will help you meet the high expectations of Apple’s
              fans.
            </P2>
            <P2 className="text-orange-600 font-extrabold">
              Android app development
            </P2>
            <P2 className="text-black">
              Android is the leading and most preferred operating system;
              Infinite Partnerships provide seamless experiences to our clients.
              Our team builds an Android app that stands at par with the current
              market needs.
            </P2>
            <P2 className="text-orange-600 font-extrabold">
              Hybrid app development
            </P2>
            <P2 className="text-black">
              We understand well how much software mobility is important to
              share information and make collaboration. Our team of react-native
              developers will make the changes in the hybrid application as it
              needs changes from time to time.
            </P2>
            <P2 className="text-orange-600 font-extrabold">
              Cross platform applications
            </P2>
            <P2 className="text-black">
              HTML5 apps are a new reality. These apps are multi-platform and
              are easy to build. Infinite Partnerships can design and develop
              full cycle of cross platform applications to suit your business
              dynamics needs.
            </P2>
          </div>
        </div>

        <div className="w-full md:w-[45%] h-full flex justify-center items-center">
          <Image
            width={300}
            height={300}
            src={imageSources[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h[60vh] md:h-screen object-fit"
          />
        </div>
      </section>

      <section className="flex flex-col w-full h-full gap-3 justify-center  p-4 sm:py-8 sm:px-16 md:px-24  lg:py-10 lg:px-28 xl:px-36 bg-gradient-to-t from-gray-900 via-black to-gray-900">
        <H2>MOBILE APP DEVELOPMENT APPROACH & PROCES</H2>
        <P1 className="max-w-5xl ">
          Mobile App Development Approach & Process We will have a dedicated and
          skilled team backing you up round-the-clock when you engage with
          Infinite Partnerships. All our processes are customer-oriented,
          designed to reduce the cost of business operations, address IT
          resourcing challenges, and offer you a competitive edge. We start with
          a deep analysis of your requirements and continue our relationship
          with post-launch support and updates.
        </P1>

        <Image
          className="w-full h-full my-10"
          src="https://static.wixstatic.com/media/db5bce_c0f3aa98638c41f48273e1412bdc737a~mv2.png/v1/fill/w_1164,h_854,al_c,q_90,enc_avif,quality_auto/66.png"
          width={300}
          height={300}
          alt={''}
        />
      </section>

      <section className="flex flex-col w-full justify-center  items-center p-4 sm:py-8 sm:px-16 md:px-24  lg:py-20 lg:px-28 xl:px-36 bg-slate-50 ">
        <div>
          <H2 className=" text-black " animationType="slideLeft">
            INDUSTRIES WE SERVE
          </H2>
          <P1 className="max-w-5xl  text-black" animationType="slideLeft">
            Infinite Partnerships can provide variety range of the applications
            for Healthcare, Hospitality, Logistics, Food & Beverage, Beauty and
            Lifestyle, Digital Agencies and etc.{' '}
          </P1>
          <motion.button
            {...animationVariants.slideLeft}
            className="h-12 w-full max-w-sm rounded-full bg-orange-600  opacity-80 text-white  font-extrabold text-lg cursor-pointer p-2 my-4"
          >
            SCHEDULE EXPERT FREE CALL
          </motion.button>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute w-full h-full">
          <video
            key={videoData[currentVideo].videoUrl}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
          >
            <source src={videoData[currentVideo].videoUrl} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 flex justify-center items-start text-center text-white ">
          <motion.div {...animationVariants.blurFade}>
            <H2 className="text-black max-w-xl p-10 bg-white mt-8">
              {videoData[currentVideo].title}
            </H2>
          </motion.div>
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2  text-black p-3 rounded-full text-2xl"
          onClick={() =>
            setCurrentVideo((prev) =>
              prev === 0 ? videoData.length - 1 : prev - 1
            )
          }
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black p-3 rounded-full text-2xl"
          onClick={() =>
            setCurrentVideo((prev) =>
              prev === videoData.length - 1 ? 0 : prev + 1
            )
          }
        >
          &gt;
        </button>
      </section>
    </Container>
  );
}
