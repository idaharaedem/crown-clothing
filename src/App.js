import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'
import CheckoutPage from './pages/checkout/checkout'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
    if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        
        });

        
    } else {
      this.props.setCurrentUser(userAuth);
    }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
      <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => 
            this.props.currentUser 
            ? <Redirect to='/'/> 
            : <SignInAndSignUpPage/> }/>
            
        </Switch>
      </div>
    );
  }
}

//prevent the user accessing signing in if he/she are already signed in
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchProps)(App);
