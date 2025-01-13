import React from 'react'

const FooterComponent = () => {
  return (
    <footer className='flex gap-5 bg-gray-800 text-white p-12 py-32'>
    <div class="w-2/5">
      <h3 className='font-bold uppercase py-5 text-3xl'>TRAVELLY</h3>
      <p className='text-gray-400'>
        A travel agency that will make your holiday easier, more enjoyable,
        and more memorable.
      </p>
    </div>
    <div>
      <h3 className='font-bold uppercase py-5 text-xl'>Quick link</h3>
      <ul className='text-gray-400'>
        <li><a href="#">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="destination.html">Destination</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className='font-bold uppercase py-5 text-xl'>Social Media</h3>
      <ul className='text-gray-400'>
      <li>
        <a href="https://www.instagram.com/" target="_blank"
          ><i class="fa-brands fa-square-instagram"></i> Instagram</a
        >
      </li>
      <li>
        <a href="https://www.facebook.com/" target="_blank"
          ><i class="fa-brands fa-square-facebook"></i> Facebook</a
        >
      </li>
      <li>
        <a href="https://x.com/" target="_blank"
          ><i class="fa-brands fa-square-x-twitter"></i> X</a
        >
      </li>
      <li>
        <a href="https://id.linkedin.com/" target="_blank"
          ><i class="fa-brands fa-linkedin"></i> Linkedin</a
        >
      </li>
      </ul>
    </div>

    <div class="footer-col">
      <h3 className='font-bold uppercase py-5 text-xl'>News</h3>
      <p className='text-gray-400'>You can trust us. We only sand promo offer.</p>
      <div class="flex mt-5">
        <input type="text" id="website-admin" class="rounded-none rounded-s-full bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="Email Address"/>
        <a class="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-700 border rounded-s-0 border-gray-300 border-s-0 rounded-e-full " href=''>
          <i className='fa-regular fa-paper-plane'></i>
        </a>
      </div>
    </div>
  </footer>
  )
}



export default FooterComponent