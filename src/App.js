import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Category from './pages/Category';
import Recipe from './pages/Recipe';


function App() {
  return (
	<>
		<Router basename='/react-spa-hard'>
			<Header />
			<main className="main">
				<div className="container">
					
						<Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/about' component={About}/>
							<Route path='/contact' component={Contact}/>
							<Route path='/category/:name' component={Category} />
							<Route path='/meal/:id' component={Recipe} />
							<Route component={NotFound}></Route>
						</Switch>
				</div>
			</main>
			{/* <Main/> */}
			<Footer/>
		</Router>
	</>
  );
}

export default App;
