import { store } from '../../app/store'
import { notesApiSlice } from '../notes/NotesApiSlice'
import { usersApiSlice } from '../users/UsersApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        
        store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
        }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return <Outlet />
}

export default Prefetch