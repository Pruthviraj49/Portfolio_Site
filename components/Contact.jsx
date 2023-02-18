
import { useState } from "react"
import emailjs from '@emailjs/browser'
const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async e => {
        e.preventDefault();
    
        if (!values.name || !values.email || !values.message) {
            alert("Please fill in all fields.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        emailjs.sendForm("service_dnz8w4o", "template_r1xw9ey", e.target, "UgQ-r5k9xC8n14J0z").then(res => {
            alert('Email Sent');
        }).catch(err => console.log(err));
    }
    
    const onchange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div>
            <div className="pt-20 md:px-40 sm:px-16 px-8 font-chivoMono ">
                <h1 className="text-xl md:text-2xl font-bold text-start underline decoration-orange-400 underline-offset-4 pb-10 ">Contact me</h1>
            </div>

            <div className="flex justify-center">
                <div className="font-chivoMono text-center w-full pb-20">
                    <form onSubmit={handleSubmit} >
                        <div className='py-5'>
                            <input type="text" name="name" value={values.name} onChange={onchange} className="input p-3 border-2 border-gray-700 rounded-lg w-2/3 sm:w-1/3" placeholder="Enter your name" />
                        </div>
                        <div className='py-5'>
                            <input type="text" name="email" value={values.email} onChange={onchange} className="input p-3 border-2 border-gray-700 rounded-lg w-2/3 sm:w-1/3" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        </div>
                        <div className='py-5 px-5'>
                            <textarea value={values.message} onChange={onchange} className=" border-2 border-gray-700 rounded-lg px-3 py-1 w-4/5 sm:w-2/5 " rows={7} name="message" id="" placeholder="Enter your message"></textarea>
                        </div>
                        <div className='p-10'>
                            <button className="border-2 border-gray-700 rounded-lg py-2 px-7 bg-orange-400 font-semibold active:bg-orange-500">
                                Submit
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default Contact