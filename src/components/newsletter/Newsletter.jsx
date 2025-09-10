import './newsletter.css'

export const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h1 className="newsletter-title">JOIN SHOPPING COMMUNITY TO<br />GET MONTHLY PROMO</h1>
                <p>Type your email down below and be young wild generation</p>
                <div className="email-signup">
                    <input type="text" placeholder="Add your email here"/> 
                    <button>Send</button>
                </div>
            </div>
        </section>
    )
}