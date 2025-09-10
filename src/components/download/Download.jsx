import './download.css';
import appStore from '../../img/icons/app-store.png';
import googlePlay from '../../img/icons/google-play.png';
import voucherImg from '../../img/images/vouchers-img.png'

export const Download = () => {
    return (
        <section className="download-section">
            <div className="container">
                <div className="download-wrapper">
                    <div className="download-content">
                        <div className="download-header">
                            <h1 className="download-title">DOWNLOAD APP &<br />
                                GET THE VOUCHER!</h1>
                        </div>
                        <div className="download-desc">
                            <p>Get 30% off for first transaction using<br />
                                Rondovision mobile app for now.</p>
                        </div>
                        <div className="download-links">
                            <a href="#" className="download-link">
                                <img src={appStore} alt="Download on the App Store" />
                            </a>
                            <a href="#" className="download-link">
                                <img src={googlePlay} alt="GET IT ON Google Play" />
                            </a>
                        </div>
                    </div>
                    <div className="mobile-img">
                        <img src={voucherImg} alt="Mobile app with voucher" />
                    </div>
                </div>
            </div>
        </section>
    )
}