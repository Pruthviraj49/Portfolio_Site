import React from 'react'

export default function Skills() {
    return (
        <div >
            <div className='flex flex-col md:flex-row justify-evenly pb-20'>
                <div className='w-fit rounded p-10 bg-orange-400 overflow-hidden shadow-lg'>
                    <h1>Android</h1>
                    <div>
                        Flutter
                    </div>
                </div>
                <div className='w-fit rounded p-10 bg-orange-400 overflow-hidden shadow-lg'>
                    <h1>Web</h1>
                    <div>
                        Reactjs
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  justify-evenly pb-20'>
                <div className='w-fit rounded p-10 bg-orange-400 overflow-hidden shadow-lg'>
                    <h1>Blockchain</h1>
                    <div>
                        Solidity
                    </div>
                </div>
                <div className='w-fit rounded p-10 bg-orange-400 overflow-hidden shadow-lg'>
                    <h1>Blockchain</h1>
                    <div>
                        Solidity
                    </div>
                </div>
            </div>

        </div>
    )
}
