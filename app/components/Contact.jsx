import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior, which is reloading page after submitting
        setResult("Submitting..."); // Show submitting message while waiting for response
        const formData = new FormData(event.target); // Create a FormData object from the form element to easily collect all input values
        formData.append("access_key", "c43e5bff-2875-431a-9718-abbc8670889b");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });
        const data = await response.json();
        console.log(data);
        setResult(data.success ? "Success!" : "Error");
    };


  return (
    <section id="contact" className='w-full px-[12%] py-10 font-jetbrains scroll-mt-28 bg-[url("/footer-bg-color.png")] bg-size-[90%_auto] bg-no-repeat bg-center'>
        <h4 className='text-center mb-2 text-lg'>Get In Touch</h4>
        <h2 className='text-center text-4xl sm:text-5xl mb-8'> ./Contact</h2>

        <p className='text-center max-w-4xl mx-auto mt-5 mb-12'>
            I&apos;d love to hear from you! Your <strong>feedback, questions, collaboration ideas</strong> or <strong>private tutoring</strong> requests are always welcome. Feel free to reach out to me. 
        </p>

        <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
            <div className='grid grid-cols-(--gridTemplateColumns) gap-6 mt-10 mb-8'>
                <input type="text" placeholder="Enter Your Name" required name="name" id="name" className='flex-1 p-3  border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <input type="email" placeholder="Enter Your Email" required name="email" id="email" className='flex-1 p-3  border-[0.5px] border-gray-400 rounded-md bg-white'/>
            </div>
            <textarea rows="6" placeholder='Enter Your Message' required name="message" id="message" className='resize-none w-full p-4 border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
            <button type="submit" className='py-3 px-8 w-max flex bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'>Submit</button>
        </form>
        <p className='text-center mt-4'>{result}</p>
    </section>
  )
}

export default Contact