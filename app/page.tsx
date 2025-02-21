import Image from 'next/image';
import Container from './component/layout/container';
import { H1, H2, H3, H4, P1 } from '@/lib/ui';

const imageLinks = [
  'https://static.wixstatic.com/media/db5bce_74f3b8e4ca584c859b441d22b232f5a5~mv2.png/v1/fit/w_1105,h_563,q_90,enc_avif,quality_auto/db5bce_74f3b8e4ca584c859b441d22b232f5a5~mv2.png',
  'https://static.wixstatic.com/media/db5bce_ec6fd98caabb465fa59139a57994a3f8~mv2.png/v1/fit/w_1105,h_563,q_90,enc_avif,quality_auto/db5bce_ec6fd98caabb465fa59139a57994a3f8~mv2.png',
  'https://static.wixstatic.com/media/db5bce_e663082f3e2243ae9eade16bacf54896~mv2.jpg/v1/fit/w_1105,h_563,q_90,enc_avif,quality_auto/db5bce_e663082f3e2243ae9eade16bacf54896~mv2.jpg',
  'https://static.wixstatic.com/media/db5bce_d341309dfe2441c4847ff8379fea7158~mv2.png/v1/fit/w_1105,h_563,q_90,enc_avif,quality_auto/db5bce_d341309dfe2441c4847ff8379fea7158~mv2.png',
  'https://static.wixstatic.com/media/db5bce_07639dc329cd46dea6bbf9e31c78d611~mv2.png/v1/fit/w_1105,h_563,q_90,enc_avif,quality_auto/db5bce_07639dc329cd46dea6bbf9e31c78d611~mv2.png',
  'https://static.wixstatic.com/media/db5bce_59ee9d6060ea4856a6fe17387322df60~mv2.png/v1/fit/w_719,h_563,q_90,enc_avif,quality_auto/db5bce_59ee9d6060ea4856a6fe17387322df60~mv2.png',
];

export default function Home() {
  return (
    <Container>
      <section className="relative w-full h-[110vh]">
        <Image
          width={500}
          height={500}
          className="w-full h-full"
          src="https://static.wixstatic.com/media/11062b_bfdb3dc7eb314c8faca8eaf7241345bd~mv2.jpg/v1/fill/w_1270,h_858,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_bfdb3dc7eb314c8faca8eaf7241345bd~mv2.jpg"
          alt={''}
        />
        <div className="flex-col absolute left-[20%] top-1/2 transform -translate-y-1/2 flex items-center justify-center z-10">
          <div>
            <H1 className="max-w-4xl" animationType="slideLeft">
              Make Your Mobile App Dreams a Reality
            </H1>
            <P1 animationType="slideLeft" className="max-w-4xl my-4">
              Professional Mobile & Web Apps and Customised Software Solutions
              Under One Roof
            </P1>
            <div className="my-4">
              <button
                className="h-12 w-32 rounded-full bg-red-900 opacity-80 text-white  cursor-pointer p-2  mr-4"
                title="Booking Now"
              >
                Booking Now
              </button>
              <button
                className="h-12 w-32 rounded-full bg-red-900 opacity-80 text-white cursor-pointer p-2 mx-4"
                title="Booking Now"
              >
                Find More
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <section className="relative w-full h-full flex justify-center py-10 bg-[rgb(229,152,135)]">
        <Image
          width={500}
          height={500}
          src="https://static.wixstatic.com/media/db5bce_0cff5453c9774ef5a99c6d5a54f87a55~mv2.png/v1/crop/x_586,y_19,w_723,h_1379/fill/w_537,h_1025,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/iphone-xs-mockup-22485.png"
          alt={''}
          className="self-center"
        />
        <H2
          animationType="slideLeft"
          className=" absolute self-center max-w-md text-center"
        >
          SCOPE OF OUR MOBILE SERVICES
        </H2>
      </section>

      <section className="flex flex-col justify-center items-center my-10">
        <H3 className="max-w-5xl text-center">
          Build a{' '}
          <span className="text-orange-600">superior mobile application</span>{' '}
          with full-cycle mobile app development services. We can assist in all
          stages of app development, from concept to maintenance of a ready
          product.
          <span className="text-orange-600">stages of app development</span>.
        </H3>
        <button
          className="h-12 w-60 rounded-full bg-orange-600 opacity-80 text-white  font-extrabold text-lg cursor-pointer p-2 my-14"
          title="Booking Now"
        >
          FIND MORE
        </button>
      </section>

      <section className="p-8">
        <div className="flex flex-col gap-3">
          {imageLinks.map((src, index) => {
            if (index % 3 === 0) {
              return (
                <div key={index} className="w-[80vw]  cursor-pointer ">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="intrinsic"
                    width={1200}
                    height={800}
                    className="w-full h-auto  self-center"
                  />
                </div>
              );
            }

            return index % 3 !== 0 && index % 3 === 1 ? (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-1/2 cursor-pointer">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="intrinsic"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex-shrink-0 w-1/2 cursor-pointer">
                  <Image
                    src={imageLinks[index + 1]}
                    alt={`Image ${index + 2}`}
                    layout="intrinsic"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : null;
          })}
        </div>
      </section>

      <section className="flex flex-col w-full justify-center items-center py-10 bg-orange-600">
        <div>
          <H1>
            OUR <br />
            CASE STUDY
          </H1>
          <button
            className="h-12 w-60 rounded-full bg-gray-300 opacity-80 text-white  font-extrabold text-lg cursor-pointer p-2 my-4"
            title="Booking Now"
          >
            FIND MORE
          </button>
        </div>
      </section>

      <section className="flex flex-col w-full justify-center items-center py-4 bg-gray-800">
        <div>
          <H3 className="max-w-6xl">
            BESKOPE WEB SOFTWARE DEVELOPMENT ​MEET THE BUSINESS NEEDS
          </H3>
          <button
            className="h-12 w-60 rounded-full bg-orange-600  opacity-80 text-white  font-extrabold text-lg cursor-pointer p-2 my-4"
            title="Booking Now"
          >
            FIND MORE
          </button>
        </div>
      </section>

      <Image
        width={500}
        height={500}
        className="w-full h-full object-cover "
        objectFit="cover"
        src="https://static.wixstatic.com/media/db5bce_c614ea9c5c664c3797a739f7708abd12~mv2.jpg/v1/fill/w_1521,h_1121,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/db5bce_c614ea9c5c664c3797a739f7708abd12~mv2.jpg"
        alt={''}
      />

      <section className="flex flex-col w-full justify-center items-center py-16 bg-purple-400">
        <div>
          <H1 className="text-orange-700">BOOK NOW</H1>
          <H4 className="max-w-lg">
            BOOKING WITH US NOW FIRST CONSULTATION FREE
          </H4>
          <button className="h-12 w-60 rounded-full bg-orange-700  opacity-80 text-white  font-extrabold text-lg cursor-pointer p-2 my-4">
            Make Appointment
          </button>
        </div>
      </section>

      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://github.com/user-attachments/assets/e35e41d4-c172-44c3-b069-03443012de9c)',
        }}
      >
        <div className=" p-8  max-w-5xl w-full">
          <H2>Contact Us</H2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-transparent  text-white px-10 py-2 my-8 rounded-full hover:opacity-50 border border-black  transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
