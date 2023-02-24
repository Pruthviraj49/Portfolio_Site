import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
export default class Footer extends Component {
    render() {
        return (
            <footer className=" bg-gray-900 text-white py-4 w-full font-chivoMono">

                <motion.div className='flex text-4xl justify-center gap-7 py-10 '

                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <div> <a href='https://www.linkedin.com/in/pruthviraj-suryawanshi-9628b4205/'><AiFillLinkedin className='rounded-lg cursor-pointer bg-[#0A66C2]' id='linkedin' /></a></div>
                    <div> <a href='https://www.facebook.com/pruthviraj.suryawanshi.566/'><AiFillFacebook className='rounded-lg cursor-pointer bg-[#3b5998]' id='facebook' /></a></div>
                    <div> <a href='https://github.com/Pruthviraj49'> <AiFillGithub className='rounded-lg cursor-pointer bg-white text-black' id='github' /></a></div>
                    <div> <a href='https://twitter.com/Pruthvi_raj49'><AiFillTwitterCircle className='rounded-lg cursor-pointer bg-[#1D9BF0]' id='twitter' /></a></div>
                    <div> <a href='https://www.instagram.com/pruthvi_raj49/'><AiFillInstagram className='rounded-lg cursor-pointer bg-pink-600' id='instagram' /></a></div>
                </motion.div>
                <motion.div className="container mx-auto"
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.75, }}

                >

                    <p className="text-center px-5">Copyright © {new Date().getFullYear()} Pruthviraj</p>
                </motion.div>
            </footer>
        )
    }
}
