import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import styles, { zoomIn }  from "../style";
import { slideIn } from "../utils/motion";
// import { slideIn } from "../style";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

//   const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };



  return (
    <div
      className={`xl:mt-5 flex xl:flex-row w-[90%] md:w-[60%]  flex-col-reverse gap-3 overflow-hidden`}
    >
       <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

         <form
         action="https://getform.io/f/bolgoyla" method="POST"
           ref={formRef}
           // onSubmit={handleSubmit}
           className='mt-4 flex flex-col gap-4'
         >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={10}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>


           <button
             type='submit'
             className='bg-tertiary py-3 px-8 rounded-xl border  min-w-52 text-white font-bold shadow-md m-auto mt-5  shadow-primary'
           >
             Send
           </button>
         </form>
       </motion.div> 
    </div>
  );
};

export default Contact;
