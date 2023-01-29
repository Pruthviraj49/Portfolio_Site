import React, { Component } from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
export default class Footer extends Component {
    render() {
        return (
            <footer className=" bg-gray-700 text-white py-4 w-full font-chivoMono">

                <div className='flex text-4xl justify-center gap-7 py-10 text-gray-700 '>
                    <div> <a href='https://www.linkedin.com/in/pruthviraj-suryawanshi-9628b4205/'><AiFillLinkedin className='cursor-pointer bg-orange-400' id='linkedin' /></a></div>
                    <div> <a href='https://www.facebook.com/pruthviraj.suryawanshi.566/'><AiFillFacebook className='cursor-pointer bg-orange-400' id='facebook' /></a></div>
                    <div> <a href='https://github.com/Pruthviraj49'> <AiFillGithub className='cursor-pointer bg-orange-400' id='github' /></a></div>
                    <div> <a href='https://twitter.com/Pruthvi_raj49'><AiFillTwitterCircle className='cursor-pointer bg-orange-400' id='twitter' /></a></div>
                    <div> <a href='https://www.instagram.com/pruthvi_raj49/'><AiFillInstagram className='cursor-pointer bg-orange-400' id='linkedin' /></a></div>
                </div>
                <div className="container mx-auto">
                    <p className="text-center px-5">Copyright © {new Date().getFullYear()} Pruthviraj</p>
                </div>
            </footer>
        )
    }
}
