"use client"
import Image from 'next/image'
import headshot from '@/public/images/contactPage/headshot.jpeg'

export default function ContactPage () {


      async function handleSubmit(event:any) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key", "c365b7a4-1c1b-4e0b-8a44-418ba071b672");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
          }
      }

    return (
        <>
        <div className="w-[50%] ">
            <Image
                src={headshot}
                alt="headshot"
                width={300}
                height={500}
            />
        </div>
        <h2>
            I’m a Florida-based photographer and graphic designer with a passion for visual storytelling. Whether behind the camera or at the design desk, I love bringing creative ideas to life with a personal touch. If you’re interested in working together or just want to connect, I’d love to hear from you.
        </h2>
      

        <form onSubmit={/*handleSubmit*/()=> []}>
          <input type="text" name="name" placeholder='name' />
          <input type="email" name="email" placeholder='email'/>
          <textarea name="message" placeholder='message'></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </>
    );
  }
