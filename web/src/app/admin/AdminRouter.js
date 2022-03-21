import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GenericError, PageNotFound } from '../error-pages/Errors'
import AdminConfig from './AdminConfig'
import AdminLimits from './AdminLimits'
import AdminToolbox from './AdminToolbox'
import AdminDebugMessagesLayout from './admin-message-logs/AdminDebugMessagesLayout'
import { useSessionInfo } from '../util/RequireConfig'
import Spinner from '../loading/components/Spinner'
import AdminSwitchover from './switchover/AdminSwitchover'

function AdminRouter() {
  const { isAdmin, ready } = useSessionInfo()
  if (!ready) {
    return <Spinner />
  }
  if (!isAdmin) {
    return <GenericError error='Access Denied' />
  }

  return (
    <Routes>
      <Route path='/config' element={<AdminConfig />} />
      <Route path='/message-logs' element={<AdminDebugMessagesLayout />} />
      <Route path='/switchover' element={<AdminSwitchover />} />
      <Route path='/limits' element={<AdminLimits />} />
      <Route path='/toolbox' element={<AdminToolbox />} />

      <Route element={<PageNotFound />} />
    </Routes>
  )
}

export default AdminRouter
