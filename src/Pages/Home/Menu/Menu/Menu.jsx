/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import Cover from '../../../../shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg';

import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import SectionTtle from '../../../../components/SectionTitle/SectionTtle';
import useMenu from '../../../../CustomHooks/useMenu';
import MenuCategory from '../../../../shared/MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item => item.category === "dessert");
  const pizza = menu.filter(item => item.category === "pizza");
  const salad = menu.filter(item => item.category === "salad");
  const soup = menu.filter(item => item.category === "soup");
  const offered = menu.filter(item => item.category === "offered");


  return (
    <div className='mb-8'>
      <Helmet>
        <title>Rooftop//menu </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuImg}
        title="our menu"
      ></Cover>

      {/* offered */}
      <SectionTtle subHeading="Don't miss " heading="today's offer"></SectionTtle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory img={pizzaImg} title="pizza" items={pizza}></MenuCategory>
      <MenuCategory img={dessertImg} title="desserts" items={desserts} ></MenuCategory>
      <MenuCategory img={saladImg} title="salad" items={salad} ></MenuCategory>
      <MenuCategory img={soupImg} title="soup" items={soup} ></MenuCategory>



    </div>
  );
};

export default Menu;
