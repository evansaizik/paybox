import classes from './Dashboard.module.css';
import Main from './Main';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <section className={classes.layout}>
      <div className={classes.sidebar}></div>
      <div className={classes.dashboard}>
        <Navbar />
        <Main />
      </div>
    </section>
  );
};

export default Dashboard;
