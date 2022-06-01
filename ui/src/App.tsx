// @ts-ignore
import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js'
import logo from './logo.png'
import './App.css'
import 'monday-ui-react-core/dist/main.css'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              Green Cloud
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
              Turn your Cloud into something like a Tree
            </p>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-lime-700 inline-flex'></div>
            </div>
          </div>
          <div className='flex sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-lime-300 text-lime-700 mb-5 flex-shrink-0'>
                <div className='i-mdi-tree'></div>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Learn more about Sustainable Cloud
                </h2>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <button className='flex mx-auto mt-16 text-white bg-lime-700 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-lime-300 text-lime-700 mb-5 flex-shrink-0'>
                <div className='i-mdi-search'></div>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Scan your Cloud
                </h2>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <button className='flex mx-auto mt-16 text-white bg-lime-700 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg'>
                  Scan
                </button>
              </div>
            </div>
            <div className='p-4 md:w-1/3 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-lime-300 text-lime-700 mb-5 flex-shrink-0'>
                <div className='i-mdi-bomb'></div>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Nuke the whole Account
                </h2>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <button className='flex mx-auto mt-16 text-white bg-lime-700 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg'>
                  Nuke Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
