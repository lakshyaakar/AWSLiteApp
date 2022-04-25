import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import CreateInstance from './Components/EC2/CreateInstance';
import ShowInstance from './Components/EC2/ShowInstance';
import Header from './Components/Header/Header';
import CreateUser from './Components/IAM/CreateUser';
import ShowUsers from './Components/IAM/ShowUsers';
import CreateBucket from './Components/S3/CreateBucket';
import ShowBuckets from './Components/S3/ShowBuckets';
import './App.css'
import RootComponent from './Components/RootComponent';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RootComponent />}/>  
          <Route path="/buckets/get" element={<ShowBuckets />}/>  
          <Route path="/buckets/create" element={<CreateBucket />}/>
          <Route path="/instance/get" element={<ShowInstance />}/>  
          <Route path="/instance/create" element={<CreateInstance />}/>
          <Route path="/users/get" element={<ShowUsers />}/>  
          <Route path="/users/create" element={<CreateUser />}/>
        </Routes>

    </div>
  );
}

export default App;
