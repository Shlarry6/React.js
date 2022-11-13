import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getMeals = async () => {
    setIsLoading(true);
    const fetchedMeals = [];
    let response = await fetch('https://react-http-43548-default-rtdb.firebaseio.com/meals.json');

    if (!response.ok) {
      throw new Error('Oops! Something went wrong...');
    };

    let data = await response.json();
    for (let key in data) {
      fetchedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price
      });
    };
  setMeals(fetchedMeals);
  setIsLoading(false);
  };

  useEffect(() => {
      getMeals().catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  if (isLoading) {
    return <section className={classes.meals}><Card><p>Loading...</p></Card></section>;
  };

  if (error) {
    return <section className={classes.meals}><Card><p>{error}</p></Card></section>
  };

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


