import React from 'react';

const Project = () => {
  return (

    <>
        <h1 className='text-2xl font-semibold m-10 pl-20'>0.2 Things I've Built</h1>
        <div>
        <section className='flex '>
            <img className='relative h-[20rem] w-[32rem] rounded-lg m-10' src="./assets/resorts.png" alt="" />            

            <div className='mt-8 absolute right-[14rem]'>
                <p className='text-[#e88d67] text-xl font-bold text-end'>Featured Project</p>
                <p className='text-2xl font-semibold text-end'>Wanderlust Resorts</p>
                <p className=' bg-[#fbeddd] text-end p-10  rounded-xl h-60 w-96'>A pet adoption website connects people looking to adopt pets with shelters and rescues, showcasing available animals with photos, details, and adoption procedures. It simplifies the adoption process by providing search filters for pet type, breed, age, and location.</p>
                <p className='text-[#e88d67] font-semibold italic text-end'>HTML CSS Javascript</p>                <p className='text-end text-2xl'><i class="ri-external-link-fill"> </i> <i class="ri-github-fill"> </i></p>
            </div>
        </section>

        <section className='flex '>
            <img className='relative  h-[20rem] w-[32rem] rounded-lg m-10' src="./assets/portfolio.png" alt="" />            

            <div className='mt-8 absolute right-[14rem]'>
                <p className='text-[#e88d67] text-xl font-bold text-end'>Featured Project</p>
                <p className='text-2xl font-semibold text-end'>Personal PortFolio</p>
                <div className=''><p className=' bg-[#fbeddd] text-end p-10 backdrop-blur-sm rounded-xl h-60 w-96'>A pet adoption website connects people looking to adopt pets with shelters and rescues, showcasing available animals with photos, details, and adoption procedures. It simplifies the adoption process by providing search filters for pet type, breed, age, and location.</p>
                </div>
                <p className='text-[#e88d67] font-semibold italic text-end'>HTML CSS Javascript</p><p className='text-2xl text-end'><i class="ri-external-link-fill"> </i> <i class="ri-github-fill"> </i></p>
            </div>

        </section>

        <section className='flex '>
            <img className='relative h-[20rem] w-[32rem] rounded-lg m-10' src="./assets/pet.png" alt="" />            

            <div className='mt-8 absolute right-[14rem] '>
                <p className='text-[#e88d67] text-xl font-bold text-end'>Featured Project</p>
                <p className='text-2xl font-semibold text-end'>Pet Adoption</p>
                <p className=' bg-[#fbeddd] text-end p-10 backdrop-blur-sm rounded-xl h-60 w-96'>A pet adoption website connects people looking to adopt pets with shelters and rescues, showcasing available animals with photos, details, and adoption procedures. It simplifies the adoption process by providing search filters for pet type, breed, age, and location.</p>
                <p className='text-[#e88d67] font-semibold italic text-end'>HTML CSS Javascript</p>
                <p className='text-end text-2xl'><i class="ri-external-link-fill"> </i> <i class="ri-github-fill"> </i></p>
            </div>
        </section>

        <section className='flex animate-bounce items-center justify-center'>
           <h2 className=' text-center text-md m-8'>View All Project's </h2><span className='text-center text-[#e88d67] mt-1'> <i class="ri-expand-right-fill"> </i></span> 
        </section>
        </div>
    </>
  );
}

export default Project