import React from 'react';

const Contact = () => {
  return (
    <div className='bg-slate-900 my-5 rounded-md mx-3 py-2 justify-center flex-grow px-5 min-h-[80vh] md:container md:mx-auto md:w-[40%]'>
      <div className='flex justify-center items-center py-3 text-2xl mb-5 font-light'>
        Contact Us
      </div>
      <p className='text-center'>
        This is the Contact page. You can reach us at satyam2004.bhatt@gmail.com.
      </p>
      <div className='font-bold text-xl mt-10'>
          <div>Satyam Bhattacharjee</div>
          <div className='hover:underline hover:text-blue-600'><a href="https://github.com/satyam23b4">My Github</a></div>
        </div>
    </div>
  );
}

export default Contact;
