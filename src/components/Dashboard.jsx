import classes from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <section className={classes.layout}>
      <div className={classes.sidebar}></div>
      <div className={classes.dashboard}></div>
    </section>
  );
};

export default Dashboard;
