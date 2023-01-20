import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-gray-800 text-white py-4  w-full bottom-0">
                <div className="container mx-auto">
                    <p className="text-center">Copyright © {new Date().getFullYear()} Pruthviraj Suryawanshi</p>
                </div>
            </footer>
        )
    }
}
