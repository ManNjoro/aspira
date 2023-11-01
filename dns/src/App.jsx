import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
// import './App.css'
import Aspira, {action as testAction} from './pages/Aspira'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Aspira />} action={testAction}>
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
