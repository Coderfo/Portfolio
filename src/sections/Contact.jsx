
import React from 'react'
import { useRef, useState } from 'react' 
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef();

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Message: '',
  })

  const handleChange = ({name, value}) => {setForm({...form, [name]: value})};
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_oe4ddi4', 
        'template_b1dhg1a',
        {
          from_name: form.Name,
          to_name: 'Miguel',
          from_email: form.Email,
          to_email: 'm7411086@gmail.com',
          message: form.Message,
        }, 'q1Tmk6sl4dIvxOp8V')

       setLoading(false)
       alert('YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!')
       setForm({
        name: '',
        email: '',
        message: ''
       })
      
    } catch (error) {

      setLoading(false)
      console.log(error)
      alert('Something went wrong!')
      
    }

  };



  return (
    <section className=' c-space my-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
        <div className='contact-container'>
        <h3 className='head-text'>Contact Me</h3>
        <p className='text-lg text-white-600'>Whether you are looking to bild a new website, improve your existing platform, or bring a unique
          project to life I'm here to help.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">

        <label className="space-y-3">
              <span className="field-label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Jonh Doe"
              />
            </label>
           

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact

