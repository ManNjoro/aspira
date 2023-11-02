import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
// import './App.css'
import Aspira, {action as testAction} from './pages/Aspira'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
      <Route index element={<Aspira />} action={testAction} />
      <Route path='/receive' />
      </Route>
    )
  );

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
