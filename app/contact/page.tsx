import React from 'react';
import Container from '../component/layout/container';
import { H2 } from '@/lib/ui';

export default function Contact() {
  return (
    <Container>
      <section
        className="w-full h-screen  py-20 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://github.com/user-attachments/assets/e35e41d4-c172-44c3-b069-03443012de9c)',
        }}
      >
        <div className=" p-8  max-w-5xl w-full">
          <H2 className="my-10">Contact Us</H2>

          <form className="bg-white p-10  rounded-2xl">
            <div className="flex justify-between">
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
            </div>

            <div className="flex justify-between">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone{' '}
                </label>
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job
                </label>
                <input
                  type="text"
                  id="lJob"
                  name="Job"
                  className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="subject"
                  id="Subject"
                  name="Subject"
                  className="w-full p-3 mt-1 border-b border-gray-300 focus:border-black bg-transparent rounded-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Leave A Message
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
              className="bg-gray-800  text-white px-10 py-2 my-8 rounded-full hover:opacity-50 border border-black  transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
