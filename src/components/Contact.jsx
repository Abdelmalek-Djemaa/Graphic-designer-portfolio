import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import {Grid} from "react-loader-spinner";
import { motion } from "framer-motion";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const contact_info = [
    {
      logo: <IoMdMail />,
      text: "abdou.fergani.site@gmail.com"
    },
    {
      logo: <FaWhatsapp />,
      text: "794845966"
    },
    {
      logo: <FaLocationDot />,
      text: "Constantine - Algeria",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_5p6u8t2', 'template_37l6ptq', e.target, 'aiT4vBIcRCNrrfGOe')
        .then(() => {
          setMessage("Your message has been sent successfully!");
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          setLoading(false);
          setShowPopup(true);
        })
        .catch(() => {
          setMessage("Something went wrong. Please try again.");
          setLoading(false);
          setShowPopup(true);
        });
  };

  return (
      <section id="contact" className="py-10 px-3 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            Contact <span className="text-green-400">Me</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

          <div
              className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-2xl mx-auto"
          >
            <form className="flex flex-col flex-1 gap-5" onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required ref={nameRef} />
              <input type="email" name="email" placeholder="Your Email Address" required ref={emailRef} />
              <textarea name="message" placeholder="Your Message" rows={10} required ref={messageRef}></textarea>
              <button className="btn-primary w-fit" type="submit">Send Message</button>
            </form>
            <div className="flex flex-col gap-7">
              {contact_info.map((contact, i) => (
                  <div key={i} className="flex flex-row text-left gap-4 flex-wrap items-center">
                    <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-400 rounded-full">
                      {contact.logo}
                    </div>
                    <p className="md:text-base text-sm break-words">
                      {contact.text}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {loading && (
            <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-[999] px-4">
              <div>
                <Grid
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                />
              </div>
            </div>
        )}

        {showPopup && (
            <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-[999] px-4">
              <motion.div className="relative max-w-sm w-full flex flex-col justify-center space-y-4 items-center bg-gray-700 rounded-xl shadow-xl p-8"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                          exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
              >
                <button className="absolute top-2 right-2 font-bold" onClick={() => setShowPopup(false)}>
                  <GiCancel size={20} className="text-green-400" />
                </button>
                <RiSendPlaneFill size={40} className="text-green-400" />
                <p className="text-center text-lg text-white">{message}</p>
              </motion.div>
            </div>
        )}
      </section>
  );
};

export default Contact;
