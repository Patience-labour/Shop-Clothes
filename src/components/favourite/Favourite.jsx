import img1 from '../../img/images/01.jpg';
import img2 from '../../img/images/02.jpg';
import arrow from '../../img/icons/Arrow 3.png'
import './favourite.css';

export const Favourite = () => {
    return (
        <section className="favourite">
            <div className="container">
                <div className="favourite-title">
                    <h1>Young’s Favourite</h1>
                </div>
                <div className="favourite-gallery">
                    <div className="gallery-item">
                        <img src={img1} alt="girls" />
                        <div className="gallery-overlay">
                            <h3 className="gallery-title">Trending on instagram</h3>
                            <p>Explore Now!</p>
                            <div className="card__icon">
                                <img src={arrow} alt="More" />
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src={img2} alt="girls" />
                        <div className="gallery-overlay">
                            <h3 className="gallery-title">All Under $40</h3>
                            <p>Explore Now!</p>
                            <div className="card__icon">
                                <img src={arrow} alt="More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}