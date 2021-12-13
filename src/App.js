import './App.css';
import { Route, Routes } from 'react-router-dom';
import Messages from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Setting from './Components/Setting/Setting';

function App(props) {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Routes>
          <Route path={'/profile/*'} element={<Profile />} />
          <Route path={'/dialogs/*'} element={<Messages store={props.store} />} />
          <Route path={'/news/*'} element={<News />} />
          <Route path={'/music/*'} element={<Music />} />
          <Route path={'/setting/*'} element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;