import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import OrderImg from '../../assets/shop/banner2.jpg'

const Secret = () => {
    return (
        <div>
            <Helmet>
                <title>Rooftop/secret </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={OrderImg} title="secret"></Cover>
                       
            <p>This is secret pae</p>
        </div>
    );
};

export default Secret;