/* eslint-disable no-unused-vars */
import React from 'react';
import Headline from '../shared/Headline';

import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
    return (
        <div className=' contact mx-auto mt-8 px-7' id='contact'>
            <Headline title={'CONTACT'} subtitle={'You can contact us by filling out the form below. Feel free to write if you have any questions!'}/>

            <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="p-5"
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="p-5"
          />
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="Enter Your Message"
            className="p-5 mb-8"
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm">Submit</button>
        </form>
      </div>
        </div>
    );
};

export default Contact;