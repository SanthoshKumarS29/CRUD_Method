import './App.css'
import ItemsList from './components/ItemsList'


function App() {

  return (
    <div className='p-5'>
    <div className='container mx-auto border border-primary p-2'>
      <h1 className='text-center'>MERN Project</h1>
      <ItemsList />
    </div>
    </div>
  )
}

export default App
