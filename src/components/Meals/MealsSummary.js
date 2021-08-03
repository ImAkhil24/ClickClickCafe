import classes from "./MealsSummary.module.css";

const MealsSummary = props => {
  return(
    <section className={classes.summary}>
      <h2>
        Your Favourite Homemade food.
      </h2>

      <p>
        Choose your favourite meal from out broad section of available meals.
      </p>

      <p>
        All our meals are cooked with high quality ingredients, just in time of course by experienced chefs and with full Covid19 measures.
      </p>
    </section>
  );
};

export default MealsSummary;