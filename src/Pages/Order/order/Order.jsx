/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../shared/Cover/Cover';
import OrderImg from '../../../assets/shop/banner2.jpg'
import useMenu from '../../../CustomHooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import anime from 'animejs';
import './Order.css'


const Order = () => {
    const categories = ['salad', 'pizza', 'desserts', 'soup', 'drinks'];
    const { category } = useParams();
    const initialTabIndex = categories.indexOf(category);
    // console.log(initialTabIndex);
    const [tabIndex, setTabIndex] = useState(initialTabIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");


    const animateTabs = (tabIndex) => {
      anime({
          targets: '.react-tabs__tab-panel--selected',
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutExpo'
      });
  };

  useEffect(() => {
      animateTabs(tabIndex);
  }, [tabIndex]);

  // // Animation for the title
  // useEffect(() => {
  //     anime({
  //         targets: '.cover-title',
  //         translateX: [-300, 0], // Move from -300px to 0px horizontally
  //         opacity: [0, 1], // Fade in from opacity 0 to 1
  //         duration: 1000,
  //         easing: 'easeOutExpo'
  //     });
  // }, []);

    // Animation for the SVG title
    useEffect(() => {
      anime({
          targets: '#svgTitle path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 2000,
          delay: (el, i) => i * 250,
          direction: 'alternate',
          loop: true
      });

      anime({
          targets: '#svgTitle',
          rotate: '1turn',
          duration: 5000,
          easing: 'easeInOutSine',
          loop: true
      });
  }, []);


    return (

       <div>
             <Helmet>
        <title>Rooftop//order </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

        <Cover img={OrderImg} title="order food"></Cover>
        <div className="svg-container">
                <svg id="svgTitle" width="500" height="100" viewBox="0 0 500 100">
                    <text x="50%" y="50%" fontSize="48" fill="none" stroke="red" strokeWidth="2" fontFamily="Arial" dominantBaseline="middle" textAnchor="middle">
                        Order food
                    </text>
                </svg>
            </div>
        <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className='my-8'>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desserts</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
       <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>

        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>

        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>

        </TabPanel>
      </Tabs>
       </div>
    );
};

export default Order;