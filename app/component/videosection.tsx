'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { animationVariants, H4 } from '@/lib/ui';
import { Modal } from '@/lib/ui/modal';
import { IoIosShareAlt } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

const videoData = [
  {
    id: 1,
    videoUrl:
      'https://video.wixstatic.com/video/db5bce_af21ec03ad1545f79fe3fd50eb6647e5/1080p/mp4/file.mp4',
    title: 'Food & Beverage',
  },
  {
    id: 2,
    videoUrl:
      'https://video.wixstatic.com/video/db5bce_6b7c3f07de7a4d8bafb0055336d151b7/1080p/mp4/file.mp4',
    title: 'Healthcare',
  },
];

export function VideoSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handlePlayButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] xl:h-[110vh] overflow-hidden">
      <div className="absolute w-full h-full">
        <video
          key={videoData[currentVideo].videoUrl}
          className="object-cover w-full h-full opacity-50"
          muted
          loop
        >
          <source src={videoData[currentVideo].videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 flex justify-center items-center text-center text-white">
        <motion.div {...animationVariants.blurFade}>
          <button
            onClick={handlePlayButtonClick}
            className="flex items-center text-white underline max-w-xl mt-8"
          >
            <PlayCircle className="mx-2 size-12" /> Play Video
          </button>
        </motion.div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={handleCloseModal}
        className="bg-black  z-[99999999] w-full h-full flex justify-start items-center"
      >
        <div className="relative md:m-32 flex flex-wrap justify-between">
          <video
            key={videoData[currentVideo].videoUrl}
            className="object-cover  relative md:w-[740px] w-full h-full max-h-[400px]"
            autoPlay
            muted
            loop
          >
            <source src={videoData[currentVideo].videoUrl} type="video/mp4" />
          </video>

          <H4 className="mx-4">{videoData[currentVideo].title}</H4>
        </div>
        <button
          onClick={handleCloseModal}
          className=" flex items-center absolute top-4 left-4 text-white text-sm"
        >
          <IoIosShareAlt className="size-6 mx-2" /> Share
        </button>
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <IoCloseOutline className="size-6 mx-2" />
        </button>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-3 rounded-full text-2xl"
          onClick={() =>
            setCurrentVideo((prev) =>
              prev === 0 ? videoData.length - 1 : prev - 1
            )
          }
        >
          <ChevronLeftIcon className="size-14" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-3 rounded-full text-2xl"
          onClick={() =>
            setCurrentVideo((prev) =>
              prev === videoData.length - 1 ? 0 : prev + 1
            )
          }
        >
          <ChevronRightIcon className="size-14" />
        </button>
        <div className="absolute bottom-0 left-0  flex justify-start overflow-x-auto">
          {videoData.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentVideo(index)}
              className={`relative w-32 md:w-60 h-32 bg-gray-300  overflow-hidden`}
            >
              <video
                className="object-cover w-full h-full"
                muted
                loop
                autoPlay={false}
                playsInline
              >
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            </button>
          ))}
        </div>
      </Modal>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-3 rounded-full text-2xl"
        onClick={() =>
          setCurrentVideo((prev) =>
            prev === 0 ? videoData.length - 1 : prev - 1
          )
        }
      >
        <ChevronLeftIcon className="size-14" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-3 rounded-full text-2xl"
        onClick={() =>
          setCurrentVideo((prev) =>
            prev === videoData.length - 1 ? 0 : prev + 1
          )
        }
      >
        <ChevronRightIcon className="size-14" />
      </button>
    </section>
  );
}
