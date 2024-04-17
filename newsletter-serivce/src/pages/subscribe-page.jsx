import react from 'react'
import SvgMobile from '../assets/images/illustration-sign-up-mobile.svg'
import SvgDesktop from '../assets/images/illustration-sign-up-desktop.svg'

function SubscribePage () {

    return (
       <section className='main'>

            <section className='left-container' >
        
                <h1 className='heading-font'>Stay Updated!</h1>
                <p className='content-font'>Join 60,000+ product managers receiving monthly updates:</p>
                <ul className='content-font'>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are success</li>
                    <li>And much more!</li>
                </ul>
                <form>
                    <label>Email adress</label>
                    <input type='text' label='email@company.com' />
                    <button>Subscribe to monthly newsletter</button>
                </form>

            </section>

            <section className='right-container'>
                <img src={SvgDesktop} />
                <img src={SvgMobile} />
            </section>
       </section>
    )
}

export default SubscribePage