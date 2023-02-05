import React from 'react';
import './styles/App.css'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import {Toaster} from 'react-hot-toast'
import Results from './components/Results/Results';
import Quiz from './components/Quiz/Quiz';


const App = () => {
	const auth = useSelector((state)=> state.auth)
  return (
	<div>
           <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
		<BrowserRouter>
             <Navbar/>
			<Routes>

			        <Route index path='/' element={auth._id ?<Main/>: <Navigate to='/login' replace={<Login/>}/>}/>
					
					<Route path='/quiz' element={auth._id ? <Quiz/> : <Navigate to='/login' replace={<Login/>}/>}/>
					<Route path='/result' element={auth._id ? <Results/> : <Navigate to='/login' replace={<Login/>}/>}/>

					<Route path='/login' element={!auth._id ? <Login/> : <Navigate to='/' replace={<Main/>}/>}/>
				    <Route path='/register' element={!auth._id ? <Registration/> : <Navigate to='/login' replace={<Login/>}/>}/>

					{
						auth._id ? 
						<>
						</>
						:
						<>
						</>
					}

				{/* {
					auth._id ? (
					<>
					<Route index path='/' element={<Main/>}/>
					
					<Route path='/quiz' element={<Quiz/>}/>
					<Route path='/results' element={<Results/>}/>
					</>

				     
					) : (
						<>
						<Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
					)
				}

                 {
					!auth._id && <>
						<Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
				 }
			 */}
			</Routes>
		</BrowserRouter>
	    
	</div>
  );
}

export default App;
