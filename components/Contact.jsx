
import { useState } from "react"
import emailjs from "emailjs-com"
const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async e => {

        e.preventDefault();

        emailjs.sendForm("service_dnz8w4o", "template_r1xw9ey", e.target, "UgQ-r5k9xC8n14J0z").then(res => {
            alert('Email Sent');
        }).catch(err => console.log(err));


    }
    const onchange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div className="font-chivoMono p-20 md:px-40 sm:px-16 px-10 w-full h-screen">

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-start p-10">
                    <input type="text" name="name" value={values.name} onChange={onchange} className="input w-auto p-3 border-2 border-gray-700 rounded-lg" placeholder="Enter your name" />
                </div>
                <div className="flex justify-start px-10">
                    <input type="text" name="email" value={values.email} onChange={onchange} className="input  w-auto p-3 border-2 border-gray-700 rounded-lg" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                </div>
                <div className="flex justify-start px-10 py-10 ">
                    < textarea value={values.message} onChange={onchange} className="border-2 border-gray-700 rounded-lg p-5" name="message" id="" cols={40} rows={7} placeholder="Enter your message"></textarea>
                </div>
                <div className="flex justify-start px-10">
                    <button className="border-2 border-gray-700 rounded-lg py-2 px-7 bg-orange-400 font-semibold active:bg-orange-500">
                        Submit
                    </button>
                </div>

            </form>

        </div>
    )
}
export default Contact