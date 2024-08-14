import React from 'react';
import { Modal, Container, Tabs, Tab } from 'react-bootstrap';

function MenuSection({ show, handleClose, section }) {
  const [key, setKey] = React.useState(section);

  const renderMenuItems = (section) => {
    switch(section) {
      case 'appetizers':
        return (
          <>
            <h3>Appetizers & Sharing</h3>
            <ul>
                <li>Latkes - Rutledge Potatoes, Apple Sauce, Crème Fraiche, Chives - $11</li>
                <li>Zucchini Flowers - Romesco, Almond, Red Pepper, Smoked Paprika, Sourdough, Tempura Batter, Herb Aioli - $17</li>
                <li>Smoked Cerignola Olives - Olive Oil, Orange Zest, Fresh Cayenne Pepper, Bay Leaf - $9</li>
                <li>Corn Chowder - Welsh Bros Chocolate Sunshine, Dbl Smoke Bacon, Chicken Stock, Cream, Yukon Gold Potato, Onion, Herbs - $11</li>
                <li>Chicken Liver Pate - Butter, Apple, Onions, Garlic, Turmeric, Garam Masala with Sourdough Toast - $16</li>
                <li>Oysters Half Dozen/Dozen - East Coast, Cocktail Sauce, Mignonette, Fresh Horseradish - $19/$35</li>
                <li>Burrata, Cherry Tomato and Basil - Burrata, Cherry Tomato, Basil Pesto (Cashew, Parmesan), Olive Oil, Sourdough Toast - $25</li>
                <li>House Salad - Boston Lettuce, White Radicchio, Carrots, Radish, Kale, Orange Segments, Russian Dressing - $16</li>
                <li>Kale Caesar Salad - Baby Kale, Dbl Smoke Bacon, Dried Cranberry, Sourdough Crouton, Parmesan, House Caesar Dressing (Eggs, Dijon, Anchovy) - $16</li>
                <li>Shaved Brussel Sprout Salad - Farro, Ricotta Salata, Honey Mustard Vinaigrette, Pickled Apricots, Red Onion - $16</li>
                <li>Spicy Chinatown "Style" Calamari - Fried, Buttermilk Marinated Calamari, Chili, Honey Szechwan Sauce - $19</li>
                <li>Trout Gravlax Carpaccio - House Beet Cured Gravlax, Moroccan Olives, Sundried Tomatoes, Capers, Chives, Pickled Onions, Olive Oil, House Sourdough Bagel, Crème Fraiche - $20</li>
                <li>Mama and Baba Ghanoush + Pita - Zucchini, Eggplant, Tahini, Cherry Tomatoes, Olive Oil, Parsley, Garlic, Lemon Juice, Zaatar - $21</li>
                <li>Smoked Chicken Wings - Brined and Smoked, Herb Rub, Buffalo Sauce, Ranch, Crudite - $17</li>
              </ul>
          </>
        );
      case 'pizzas':
        return (
          <>
            <h3>Wood Fired Pizza</h3>
            <ul>
                <li>Margherita - Tomato Sauce, Fior Di Latte, Basil - $17</li>
                <li>Pepperoni - Tomato Sauce, Fior Di Latte, Pepperoni (Ezzo Natural) - $19</li>
                <li>Cacio E Pepe - Zucchini, Fior Di Latte, Pepper, Pecorino - $20</li>
                <li>Capricciosa Pizza - Tomato Sauce, Fior Di Latte, Ham, Mushroom, Artichoke, Moroccan Black Olives - $21</li>
                <li>Arugula and Cherry Tomato - Arugula, Tomato, Fior Di Latte, Cherry Tomatoes, Parmesan - $20</li>
                <li>Sausage and Smoke Provolone - Fior Di Latte, House Sausage, Cherry Tomatoes, Smoked Provolone - $21</li>
                <li>Chanterelles Supreme Deluxe Pizza - Chanterelles Mushrooms, Ezzo Pepperoni, Green Peppers, Tomato Sauce, Fior Di Latte - $21</li>
                <li>Spicy Soppressata - Tomato Sauce, Fior Di Latte, Hot Soppressata, Moroccan Black Olives, Chilies - $21</li>
                <li>Marinara - Tomato Sauce, Rappini, Capers, Confit Garlic, Olive Oil - $18 (VEGAN)</li>
                <li>Hawaiian - Tomato Sauce, Fior Di Latte, Dbl Smoked Bacon, Pineapple, Chilies, Basil - $21</li>
                <li>Roasted Eggplant and Ricotta Salata - Tomato Sauce, Fior Di Latte, Zucchini Flowers, Pancetta, White Sauce - $21</li>
                <li>Fresh Ricotta - Tomato Sauce, Fresh Ricotta, Basil, Maldon Salt - $19</li>
                <li>Peaches and Cheese (Ricotta) - Ont. Peaches, Ricotta Cheese, Pepperoncini, Basil - $21</li>
                <li>Napoli - Anchovies, Fior Di Latte, Tomato Sauce, Oregano - $21</li>
              </ul>
          </>
        );
      case 'dinner':
        return (
          <>
            <h3>Dinner Plates</h3>
            <ul>
                <li>Fish and Chips - Cod, Loin, Beef Batter Chips, Sourdough Beer Batter, Pea Puree, Tartar - $24</li>
                <li>Lobster + Avocado Ceviche - Lobster, Avocado, Lemon Juice, Vinegar, Cucumber, Garlic, Ginger, Onion, Chili, Toast - $26</li>
                <li>Rainbow Trout (Izumi) - Rainbow Trout, Pea Puree, Confit Fingerling Potatoes, Green Peas, Pea Shoots - $23</li>
                <li>Pork Belly Lettuce Wrap - Boston Lettuce, Crispy Braised Pork Belly, Radishes, Carrots, Cucumber, Pickled Onions, Chili Glaze - $23</li>
                <li>Toad in the Hole - Giant Yorkshire Pudding, House Cumberland Sausage, Caramelized Onions, Gravy - $22</li>
                <li>Bacon Cheeseburger - Dbl Smoked Bacon, Cheddar Cheese, Lettuce, Onion, Pickle, Tomato, Fries - $21</li>
                <li>Half Roast Chicken Dinner - Confit Fingerling Potatoes, Southern Greens (Dandelion) and Gravy - $23</li>
                <li>Ricotta Gnocchi - Tomato Sauce, Parmesan, Basil - $21</li>
                <li>Steak Frites w/ Red Wine Sauce - 10 oz Angus Striploin, Hand Cut Russet Fries, Red Wine Sauce - $29</li>
                <li>Porcini in the Hole - Giant Yorkshire Pudding, Caramelized Onion (Veg) Gravy, Porcini Mushroom - $22</li>
                <li>Wild Mushroom Lettuce Wrap - Boston Lettuce, Bluefoot and Chanterelles Mushrooms, Radishes, Carrots, Cucumber, Pickled Onions, Chili Veg Demi, Glaze - $19</li>
                <li>Veggie Burger w/ Fries - Bean, Oat, Lentil, Quinoa, Mixed Mushroom, Miso - $19</li>
                <li>Lamb Skewers - Lamb Belly (Porchetta Style), Zucchini, Green Pepper, Red Onion, Herb Aioli, White Sauce - $20</li>
                <li>Club Sandwich - Pulled Chicken, Sourdough Bread, Mayo, Dbl Smoked Bacon, Lettuce, Tomato, Fries - $21</li>
              </ul>
          </>
        );
        // Leave this for Bothams site.
      // case 'lunch':
      //   return (
      //     <>
      //       <h3>Lunch</h3>
      //       <ul>
      //         <li>Breakfast Plates - $17
      //           <ul>
      //             <li>Served with Toast, Smoked Bacon, Tomatoes, and Potatoes</li>
      //             <li>Scrambled Eggs or Eggs any Style</li>
      //           </ul>
      //         </li>
      //         <li>Breakfast Sandwich - $16
      //           <ul>
      //             <li>Fried Eggs, Bacon, Tomato, Aged Cheddar, Lettuce, Mayo, on a Sourdough Bun</li>
      //           </ul>
      //         </li>
      //         <li>Avocado Toast - $14
      //           <ul>
      //             <li>Sourdough, Olive Oil, Citrus, Pepper, Sea Salt</li>
      //           </ul>
      //         </li>
      //         <li>Trout Gravlax Platter - $16
      //           <ul>
      //             <li>House Cured Gravlax, Cream Cheese, Red Onion, Capers, Sourdough Bagel</li>
      //           </ul>
      //         </li>
      //         <li>Veggie Burger W/Fries - $16
      //           <ul>
      //             <li>Mixed Mushrooms, Oat, Lentil, Quinoa, Dill Pickles, Tomato, Lettuce</li>
      //           </ul>
      //         </li>
      //         <li>Bacon Cheeseburger W/Fries - $19
      //           <ul>
      //             <li>Double Patty, Smoked Bacon, Cheese, Lettuce, Tomato, Onions, House Sauce</li>
      //           </ul>
      //         </li>
      //         <li>Green Salad - $14
      //           <ul>
      //             <li>Baby Kale, Farro, Roasted Squash, Walnuts, Mustard Vinaigrette</li>
      //           </ul>
      //         </li>
      //       </ul>
      //     </>
      //   );
      case 'dessert':
        return (
          <>
            <h3>Desserts</h3>
            <ul>
                <li>Strawberry “Shortcake” - Ont. Strawberries, Scone, Crème Fraiche - $12</li>
                <li>Chocolate Pot De Crème - Callebaut Dark Chocolate Pudding - $12</li>
                <li>Sour Cream Panna Cotta - Lemon Zest, Vanilla Fruit Compote - $12</li>
                <li>Sticky Toffee - Warm Date Pudding, Toffee Sauce - $11</li>
                <li>Brownie Smores - Double Chocolate Brownie, Wood Fired Marshmallow, Graham Cracker - $12</li>
                <li>Sweet Peach Pizza - Ont. Peaches, Cane Sugar, Crème Fraiche, Hazelnuts, Mint - $21</li>
              </ul>
          </>
        );
        case 'specials':
          return (
            <ul>
              <li>Sunday: Sunday Roast</li>
              <li>Monday: Pizzas Two for $28</li>
              <li>Tuesday: $1.50 a Shuck Oysters</li>
              <li>Thursday: Burger and a Beer Combo</li>
            </ul>
          );
      default:
        return null;
    }
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{key.charAt(0).toUpperCase() + key.slice(1)} Menu</Modal.Title>
        <button type="button" className="custom-close-button" onClick={handleClose}>
          &times;
        </button>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Tabs
            id="menu-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="appetizers" title="Appetizers">
              {renderMenuItems('appetizers')}
            </Tab>
            <Tab eventKey="pizzas" title="Pizzas">
              {renderMenuItems('pizzas')}
            </Tab>
            <Tab eventKey="dinner" title="Dinner">
              {renderMenuItems('dinner')}
            </Tab>
            <Tab eventKey="dessert" title="Dessert">
              {renderMenuItems('dessert')}
            </Tab>
            <Tab eventKey="specials" title="Specials">
              {renderMenuItems('specials')}
            </Tab>
          </Tabs>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default MenuSection;