
import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false)


  const handleCopy = () => {
    navigator.clipboard.writeText('m7411086@gmail.com')
    setHasCopied(true)

    setTimeout (() => {setHasCopied(false), 9000})
  }
  return (
    <section className='c-space my-20' id = 'about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='clo-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="/assets/myself.jpg" alt="grid-1" className='w-full sm:[276px] h-fit object-contain rounded-md' />
            <div>
            <p className='grid-headtext'>Hi, My name is Miguel</p>
            <p className='grid-subtext'>
            I am a graduated with a degree in Computer Science from University of Houston-Downtown. Motivated and detail-oriented entry-level application developer with a strong foundation in programming, problem-solving, and analytical thinking. Adept at coding, testing, debugging, and troubleshooting software applications while adhering to industry standards. Passionate about learning new technologies and continuously improving technical skills to support enterprise systems effectively.
            </p>


            </div>

          </div>

        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="/assets/technology.png" alt="grid-2" className='w-full sm:[276px] h-fit object-contain rounded-md' />

              <div>
                <p className='grid-headtext'> Tech Stack and Skills</p>
                <p className='grid-subtext'> I specialize in web development using HTML, CSS, JavaScript and React.
                    Familiar with Java, C++, and Python. Experience with DBMS using MS SQL Server, and MySQL.
                    Proficient in coding, testing, and debugging application programs. Proficient in coding, testing, and debugging application programs. Eager to learn and apply new technologies and methodologies.
                </p>

              </div>

          </div>


        </div>
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
              height={326}
              width={326}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
              bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'


              />

            </div>

            <div>
              <p className='grid-headtext'>
                I work remotely across most timezones
              </p>
              <p className='grid-subtext'>
                I'm based in Houston Tx, with remote work available. 

              </p>
              <Button name='Contact Me' isBeam containerClass='w-full mt-10'/>
            </div>

          </div>

        </div>
          <div className='xl:col-span-2 xl:row-span-3'>
            <div className='grid-container'>
              <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

              <div>
                <p className='grid-headtext'>
                  Relevant Courses
                </p>
                <p className='grid-subtext'>
                Database Management Systems, Web Development, Operating Systems, 

                Software Engineering, Data & Information Structures, Data Structures and Algorithms  

                Object-Oriented Programming (Java), Machine Learning, Artificial Intelligence. 
                </p>
              </div>

            </div>

          </div>

          <div className='xl:col-span-1 xl:row-span-2'>
            <div className='grid-container'>
              <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[126px] h-fit object-cover sm:object-top' />
              <div className='space-y-2'>
                <p className='grid-subtext text-center'>
                  Contact Me
                </p>
                <div className='copy-container' onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg': 'assets/copy.svg'} alt='copy' />
                  <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>M7411086@gmail.com</p>

                </div>

              </div>
            </div>

          </div>

      </div>

    </section>
  )
}

export default About