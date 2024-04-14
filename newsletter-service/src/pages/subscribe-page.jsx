import react, { useRef, useState } from 'react'
import SvgMobile from '../assets/images/illustration-sign-up-mobile.svg'
import SvgDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import SvgSuccess from '../assets/images/icon-success.svg'

import './subscribe-page.css'

function SubscribePage () {

    const [email, setEmail] = useState('')
    const invalidEmail = useRef(null)
    const emailInput = useRef(null)
    const [success, setSuccess] = useState(false)

    function handleEmailChange(e){
        invalidEmail.current.classList.remove('visible')
        emailInput.current.classList.remove('error-input')
        const value = e.target.value
        setEmail(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailPattern.test(email)){
            setSuccess(true)
        }
        else{
            invalidEmail.current.classList.add('visible')
            emailInput.current.classList.add('error-input')
        }
    }

    function handleDismiss(){
        setEmail('')
        setSuccess(false)
    }

    return (
        !success ?
         <>
            <section className='main'>
        
            <section className='left-container flx-clmn ' >
                <h1 className='heading-font'>Stay Updated!</h1>
                <p className='content-font'>Join 60,000+ product managers receiving monthly updates:</p>
                <ul className='content-font'>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are success</li>
                    <li>And much more!</li>
                </ul>
                <form className='flx-clmn'>
                    <label htmlFor='email'>Email adress <span ref={invalidEmail} className='invalid-email'>valid mail required</span></label>
                    <input type='text' id="email" placeholder='email@company.com' ref={emailInput} onChange={handleEmailChange} value={email}/>
                    <button className='btn' onClick={handleSubmit}>Subscribe to monthly newsletter</button>
                </form>
            </section>

            <section className='right-container center-item'>
                <img src={SvgMobile} className='img-mbl'/>
                <img src={SvgDesktop} className='img-dsktp' />
            </section>

        </section>
       </>
        :
        <section className='success-main'>     
            <img src={SvgSuccess} className='svg-success'/>      
            <h1 className='heading-font'>Thanks for Subscribing!</h1>
            <p className='content-font'>a confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm the subscription.</p>
            <button className='btn' onClick={handleDismiss}>Dismiss message</button>
        </section>

    )
}

export default SubscribePage

