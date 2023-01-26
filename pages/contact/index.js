const Contact = () => {
    return (
        <div className="font-chivoMono p-20 md:px-40 sm:px-16 px-10 w-full h-screen">

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Contact Me</h1>
            <form>
                <div className="flex justify-start p-10">
                    <input type="text" name="name" className="input w-auto p-3 border-2 border-gray-700 rounded-lg" placeholder="Enter your name" />
                </div>
                <div className="flex justify-start px-10">
                    <input type="text" name="email" className="input  w-auto p-3 border-2 border-gray-700 rounded-lg" placeholder="Enter your email" />
                </div>

            </form>

        </div>
    )
}
export default Contact