"use client"
import Image from 'next/image'
import headshot from '@/public/images/contactPage/headshot.jpeg'

export default function ContactPage () {


      async function handleSubmit(event:any) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key", "721d68de-1637-4471-8dd9-e39f481077d6");

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
        <div className="relative h-60 w-full overflow-y-hidden z-[-1]">
          <h2 className='absolute z-1 w-[40%] right-5 pt-7 font-bold'>
            I’m a Florida-based photographer and designer passionate about bringing creative stories to life.
          </h2>
          <Image
            src='/images/photoWheel/photo1.jpg'
            alt=''
            fill
            className='blur-xs object-cover'
          />
        </div>


            <div className="relative w-[50%] mt-[-40%]">
            <h2 className='absolute top-[45%] right-[-75%] text-6xl font-serif italic'>Karina</h2>
            <Image
                src={headshot}
                alt="headshot"
                width={300}
                height={500}
            />
        </div>
        
      

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='name' 
          className='border-white border-2'
          />
          <input type="email" name="email" placeholder='email'
          className='border-white border-2'
          
          />
          <textarea name="message" placeholder='message'></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </>
    );
  }
