import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import MenuLinks from './Components/MenuLinks';
import AllBooks from './Components/AllBooks';
import Form from './Components/Form';
import firebaseData from './FirebaseData';
import './scss/main.scss';
import Read from "./Components/Read";
import ToRead from "./Components/ToRead";
import WaitingForPremiere from "./Components/WaitingForPremiere";
import BookDetails from './Components/BookDetails';
import BookEdit from './Components/BookEdit';


function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [books, setBooks] = useState([]);


  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setPasswordRepeat('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    firebaseData
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          localStorage.setItem('user', 'jungle')
        })
        .catch(err => {
          switch(err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;

            case "auth/wrong-password":
              setPasswordError(err.message);
              break;

            default:
              //
          }
        });
  };

  const handleSignUp = () => {
    clearErrors();
    password === passwordRepeat ? (
        firebaseData
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
              switch(err.code) {
                case "auth/email-already-in-use":
                  break;
                case "auth/invalid-email":
                  setEmailError(err.message);
                  break;

                case "auth/weak-password":
                  setPasswordError(err.message);
                  break;

                default:
                  //
              }
            }) //ponizej dodajemy nowego usera do bazy danych
            .then(() => firebaseData.firestore()
            .collection(`Users`)
            .doc(firebaseData.auth().currentUser.uid)
                .set({
                  email: email,
                }))
    ) : (
        setPasswordError("Passwords do not match")
    )

  };

  const handleLogout = () => {
    setHasAccount(true);
    firebaseData.auth().signOut();
    localStorage.clear();

  };

  const authListener = () => {
    firebaseData.auth().onAuthStateChanged(user => {
      if(user) {
        const ref = firebaseData.firestore().collection(`Users/${firebaseData.auth().currentUser.uid}/books`);
        const getBooks = () => {
          ref.onSnapshot((querySnapshot) => {
            const collection = [];
            querySnapshot.forEach((doc) => {
              collection.push(doc.data());
            });
            setBooks(collection);
          });
        };
        getBooks();
        clearInputs();
        setUser(user);
        localStorage.setItem('user', 'jungle')
      } else {
        setUser('');
      }
    })
  };


  useEffect(authListener, []);





  return (
    <div className="container">

      {localStorage.getItem('user') === 'jungle' ? (

          <Router>

            <div>
              <div className={"menu-bar"}>
                <MenuLinks handleLogout={handleLogout}/>
              </div>

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/all/">
                  <AllBooks books={books}/>
                </Route>
                <Route exact path="/read">
                  <Read books={books}/>
                </Route>
                <Route exact path="/toRead">
                  <ToRead books={books}/>
                </Route>
                <Route exact path="/waitingForPremiere">
                  <WaitingForPremiere books={books}/>
                </Route>
                <Route exact path="/form">
                  <Form books={books}/>
                </Route>
                <Route exact path="/all/:title" component={(props) =>
                    <BookDetails {...props} books={books}/>
                }/>
                <Route exact path="/read/:title" component={(props) =>
                    <BookDetails {...props} books={books}/>
                }/>
                <Route exact path="/toRead/:title" component={(props) =>
                    <BookDetails {...props} books={books}/>
                }/>
                <Route exact path="/waitingForPremiere/:title" component={(props) =>
                    <BookDetails {...props} books={books}/>
                }/>
                {/*<Route exact path="/read/:id" component={BookDetails} />*/}
                {/*<Route exact path="/toRead/:id" component={BookDetails}/>*/}
                {/*<Route exact path="/waitingForPremiere/:id" component={BookDetails}/>*/}
                {/*<Route exact path="/all/edit/:title" component={BookEdit}/>*/}
                <Route exact path="/all/edit/:title" component={(props) =>
                    <BookEdit {...props} books={books}/>
                }/>
                {/*<Route exact path="/read/edit/:id" component={BookEdit}/>*/}
                {/*<Route exact path="/toRead/edit/:id" component={BookEdit}/>*/}
                {/*<Route exact path="/waitingForPremiere/edit/:id" component={BookEdit}/>*/}
              </Switch>
            </div>

          </Router>

      ) : (

          <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordRepeat={passwordRepeat}
              setPasswordRepeat={setPasswordRepeat}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
              clearInputs={clearInputs}
          />
      )}

    </div>
  );
}

export default App
