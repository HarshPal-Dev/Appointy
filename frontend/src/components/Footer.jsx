import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-8468938745</li>
            <li>vasuparashar18@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
// Update on 2024-06-05 - Commit 2
// Update on 2024-06-08 - Commit 2
// Update on 2024-06-25 - Commit 1
// Update on 2024-06-25 - Commit 3
// Update on 2024-06-28 - Commit 4
// Update on 2024-06-29 - Commit 2
// Update on 2024-07-06 - Commit 3
// Update on 2024-07-06 - Commit 5
// Update on 2024-07-07 - Commit 5
// Update on 2024-07-08 - Commit 4
// Update on 2024-07-10 - Commit 3
// Update on 2024-07-10 - Commit 4
// Update on 2024-07-14 - Commit 1
// Update on 2024-07-15 - Commit 5
// Update on 2024-07-24 - Commit 5
// Update on 2024-08-03 - Commit 2
// Update on 2024-08-07 - Commit 3
// Update on 2025-07-06 - Commit 1
// Update on 2025-07-31 - Commit 4
// Update on 2025-08-05 - Commit 2
// Update on 2025-08-21 - Commit 4
// Commit 29 - 07/20/2025 00:00:00
// Commit 45 - 07/27/2025 00:00:00
