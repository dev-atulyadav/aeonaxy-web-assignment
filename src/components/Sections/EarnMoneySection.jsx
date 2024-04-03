import React from 'react'

const EarnMoneySection = () => {
  return (
    <section className='sm:h-96 w-full flex justify-start items-center p-10 bg-green-500 text-white overflow-hidden'>
      <article className='flex justify-center items-start flex-col gap-4'>
            <h2 className='font-cambo text-4xl sm:text-7xl w-[60%]'>Earn money from your writing.</h2>
        <main className='flex flex-col justify-center items-start gap-6'>
        <p className="text-sm w-2/3">
        Writing has its rewards when you join the Partner Program. Learn how to get paid for thr content you publish and the audiences you build.</p>
        <button className="py-1.5 px-5 text-center rounded-full bg-black text-white">
              Learn More
            </button>
        </main>
      </article>
    </section>
  )
}

export default EarnMoneySection
