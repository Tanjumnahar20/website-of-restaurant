/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../shared/Cover/Cover';
import OrderImg from '../../../assets/shop/banner2.jpg'
import useMenu from '../../../CustomHooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


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


    return (

       <div>
             <Helmet>
        <title>Rooftop//order </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

        <Cover img={OrderImg} title="Order food"></Cover>
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