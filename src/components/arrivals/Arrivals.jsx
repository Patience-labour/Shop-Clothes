import { Card } from '../card/Card';
import './arrivals.css';
import cat01 from './../../img/categories/01.jpg';
import cat02 from './../../img/categories/02.jpg';
import cat03 from './../../img/categories/03.jpg';

export const Arrivals = () => {
    return ( <section className="arrivals">
        <div className="container">
            <div className="arrivals__header">
                <h2 className="title-2">New Arrivals</h2>
            </div>
            <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" img={cat01}/>
                    <Card title="Coats & Parkas" img={cat02}/>
                    <Card title="Tees & T-Shirt" img={cat03}/>
            </div>
        </div>
    </section> );
}