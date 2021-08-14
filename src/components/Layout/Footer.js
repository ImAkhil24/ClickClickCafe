import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <section className={classes.Footer}>
      <h2>About us</h2>
      <p>
        Contact: 9936657710
        <br />
        Order: 9670300800, 9670400900, 9670800100 <br />
        &copy; COPYRIGHT 2018 reserved by 2 Click Click Cafe
      </p>
    </section>
  );
};

export default Footer;
