import { useContext } from 'react';
import './App.css'
import { AuthContext } from './provider/AuthProvider';

function App() {

  const { googleSignIn, setUser, logOut,user } = useContext(AuthContext)

  const handleLogout = (e) => {
    e.preventDefault()
    logOut()
    
  }
  

  const handleGoogleSignIn = e => {
    e.preventDefault();
    googleSignIn()
    .then(result => {
      if(result.user){
        setUser(result.user)
       }
    })
    .catch(error => {
      if(error){
       console.log('Error in google login', error)
      }
    })
  }
 
  return (
   <div>
      <nav className='bg-gray-800 py-5 flex justify-end items-center gap-5'>
        <p className=' text-white'>{user?.displayName}</p>
        <button className='text-white  font-bold text-2xl px-10 py-3 rounded-lg bg-slate-400'
        onClick={handleLogout}
        >Logout</button>
      </nav>
      <main className='bg-orange-200 w-full min-h-screen'>
        <div className='flex justify-center items-center pt-32'>
        <button className='text-white  font-bold text-2xl px-10 py-3 rounded-lg bg-slate-400'
        onClick={handleGoogleSignIn}
        >Login</button>
        </div>
      </main>
   </div>
  )
}

export default App
