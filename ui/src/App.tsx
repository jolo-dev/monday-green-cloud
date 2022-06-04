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
        <div className='container px-5 py-18 mx-auto flex items-center'>
          <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex items-center flex-col'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              Green Cloud
            </h1>
            <p className='text-base leading-relaxed xl:w-3/5 lg:w-3/4 mx-auto text-gray-500s'>
              Turn your Cloud into more Sustainable like a tree
            </p>
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
            <div className='flex mb-10 items-center'>
              <div className='w-25 h-14 mr-10 inline-flex items-center justify-center rounded-full bg-lime-100 text-lime-700'>
                <div className='i-mdi-tree'></div>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Learn more about Sustainable Cloud
                </h2>
                <p className='leading-relaxed text-base'>
                  Sustainability of the Cloud comes from you. Learn more about
                  AWS Sustainability Pillar and how our Green Cloud can create
                  the tickets here on Monday.
                </p>
                <button className='flex mt-2 text-white bg-lime-700 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='flex mb-10 items-center'>
              <div className='w-25 h-14 mr-10 inline-flex items-center justify-center rounded-full bg-lime-100 text-lime-700'>
                <div className='i-mdi-search'></div>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Scan your Cloud
                </h2>
                <p className='leading-relaxed text-base'>
                  Start Scan your AWS Account. Based on the result, Green Cloud
                  will create tickets accordingly. You decide whether you keep
                  them or discard them.
                  <AttentionBox
                    key='assume-role-info'
                    title='Create an Assume Role'
                    text='Please, create an assume-role first in order to perform a full scan.'
                  ></AttentionBox>
                </p>
                <button className='flex mt-2 text-white bg-lime-700 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg'>
                  Scan
                </button>
              </div>
            </div>
            <div className='flex mb-10 items-center'>
              <div className='w-20 h-14 mr-10 inline-flex items-center justify-center rounded-full bg-lime-100 text-lime-700'>
                <div className='i-mdi-bomb'></div>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Nuke the whole Account
                </h2>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <button className='flex mt-2 text-white bg-lime-700 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg'>
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
