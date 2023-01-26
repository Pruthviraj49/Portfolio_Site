import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="fixed bg-gray-700 text-white py-4 w-full bottom-0 font-chivoMono">
                <div className="container mx-auto">
                    <p className="text-center px-5">Copyright © {new Date().getFullYear()} Pruthviraj</p>
                </div>
            </footer>
        )
    }
}
