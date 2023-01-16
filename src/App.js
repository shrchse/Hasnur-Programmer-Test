import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Search from './Search';
import DetailMhs from './DetailMhs';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './CONFIG';

function App() {
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  }, [])

  const register = async () => {
    try{
      const regUser = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
      console.log(regUser);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try{
      const regUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(regUser);
      
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  if(user){
  return (
    <Router>
      <div className="App">
      <nav className="bg-slate-400 flex flex-row justify-between px-24 py-5 fixed w-screen z-50">
            <h1 className="text-slate-700 font-extrabold">Sistem Pengelolaan Mahasiswa</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/search" className="px-8">Search</a>
                <a href="/" onClick={logout}>Logout</a>
            </div>
        </nav>
        <div className="content">
        <Switch>  
          <Route exact path={"/"}>
            <Home />
            <Dashboard />
          </Route>
          <Route exact path={"/search"}>
            <Search />
          </Route>
          <Route exact path={"/detail/:id"}>
            <DetailMhs />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
} else {
    return(
      <div id="this" className="h-screen w-6/6 mx-auto pt-32 bg-slate-200 flex ">
      <div className="h-4/5 w-6/12 mx-20 bg-slate-400 flex flex-col px-20 py-20 text-left rounded-lg shadow-xl opacity-80 hover:opacity-100">
        <h1 className='text-4xl mb-10'>Login Form</h1>
          <label htmlFor="username" className="text-lg">Email</label>
          <input type="text" name="username" className="mb-5 rounded-md py-3 pl-3" onChange={(e) => {
            setLoginEmail(e.target.value);
          }}/>
          <label htmlFor="password" className="text-lg ">Password</label>
          <input type="password" name="password" className="rounded-md py-3 pl-3" onChange={(e) => {
            setLoginPassword(e.target.value);
          }}/>
          <button className="text-left px-7 py-2 mt-5 rounded hover:bg-slate-900 hover:text-white bg-white h-fit w-fit" onClick={() => {
            login()
          }}>Login</button>
      </div>

      <div className="bg-slate-300 h-fit p-5 transition delay-150 hover:rotate-12 hover:bg-slate-500 my-auto mt-48 text-2xl font-extralight"> OR</div>
      
      <div className="w-7/12 bg-slate-500 h-4/5 mx-20 flex flex-col px-20 py-20 text-left rounded-lg shadow-xl opacity-80 hover:opacity-100">
          <h1 className='text-3xl mb-5'>Register Account</h1>
          <label htmlFor="email" className="text-lg">Email</label>
          <input type="text" name="email" className="mb-5 rounded-md py-3 pl-3" onChange={(e) => {
            setRegEmail(e.target.value);
          }}/>
          <label htmlFor="password" className="text-lg ">Password</label>
          <input type="password" name="password" className="rounded-md py-3 pl-3" onChange={(e) => {
            setRegPassword(e.target.value);
          }}/>
          <button className="text-left px-7 py-2 mt-5 rounded hover:bg-slate-900 hover:text-white bg-white h-fit w-fit" onClick={() => {
            register();
          }}>Register</button>
      </div>
      {user?.email}
  </div>
    )
  }
}

export default App;
