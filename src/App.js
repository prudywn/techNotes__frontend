import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesLists from './features/notes/NotesLists'
import UsersLists from './features/users/UsersLists'
import EditUser from './features/users/EditUser'
import NewuserForm from './features/users/NewuserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import { ROLES } from './config/roles'
import RequireAuth from './features/auth/RequireAuth'
import useTitle from './hooks/useTitle'

function App() {
  useTitle('Waithira\'s Repairs')
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      {/* Public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        
        {/* Protected routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
          <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />} >
                  {/* Add dashboard routes here */}
                  <Route index element={<Welcome />} />
                  <Route path="notes" >
                    <Route index element={<NotesLists />} />
                    <Route path="new" element={<NewNote />} />
                    <Route path=":id" element={<EditNote />} />
                  </Route>
                  
                  <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />}>
                  <Route path="users" >
                    <Route index element={<UsersLists />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewuserForm />} />
                    </Route>
                  </Route>
                </Route> {/* End dash */}
              </Route> {/* End prefetch */}
            </Route> {/* End require auth */}
        </Route> {/* End persist */}
      </Route>
    </Routes>
  )
}

export default App