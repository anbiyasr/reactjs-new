import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Table from "../Table/Table";
import Create from "../Create/Create";
// import './App.css';
// import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

class Home extends Component {

  handleCallToRouter = (value) => {
    this.props.history.push(value);
  }
  render(){


  return (
    <Router>
      <div>
        <Route
          path="/"
          render={( props ) => {
            console.log(props)
            return ( <Fragment>
              <Tabs value={props.history.location.pathname}>
                <Tab value={"/Create"} label="Create Data" component={Link} to="/Create" />
                <Tab value={"/Table"} label="Show Tabel" component={Link} to="/Table" />
              </Tabs>
              <Switch>
                <Route path="/Create" component={Create} />
                <Route path="/Table" component={Table} />
              </Switch>
            </Fragment>
            )
  }}
        />
      </div>
    </Router>
  );
}
}




// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     'aria-controls': `nav-tabpanel-${index}`,
//   };
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={event => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


// const styles = {
//   AppBar : {
//     backgroundColor: 'red',
//     background: 'white',
//     boxShadow: 'black',
//     color: 'black'
//   }
// }

// export default function Home() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
    
//     <div className={classes.root}>
//       <AppBar style={styles.AppBar} position="static">
//         <Tabs
//           variant="fullWidth"
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab label="Create Data" {...a11yProps(0)} />
//           <LinkTab label="Page Two" {...a11yProps(1)} />
//           {/* <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         <Create />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Table />
//       </TabPanel>
//       {/* <TabPanel value={value} index={2}>
//         Page Three
//       </TabPanel> */}
//     </div>
//   );
// }


// class Home extends Component {

//     render(){
//       // console.log(`${this.kode}`)
//         return (
//           <div>
//             {/* <h1>{this.kode}</h1> */}
//             <Router>
//             <div className="wrapper-home">
//               <div className="createAccount">
//                 <ul>
//                   <li><Link to="/Table"> SHOW </Link> </li>
//                   <li><Link to="/Create"> CREATE </Link> </li>
//                   <li> <Link to="/" >HOME</Link> </li>
//                 </ul>
//               </div>
//             </div>
//             <div>
//               <main>
//               <Route path="/Home" component={Home} />
//               <Route path="/Table" component={Table} />
//               <Route path="/Create" component={Create} />
//               </main>
//             </div>
//             </Router>
//             </div>
//         )
//     }
// }

export default Home;