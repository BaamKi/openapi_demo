import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'      ///react-router-dom을 import
import Home from './pages/Home'
import Cancel from './pages/Cancel'
import Ready from './pages/Ready'
import Capture from './pages/Capture'
import Confirm from './pages/Confirm'
import Verify from './pages/Verify'
import Retrieve from './pages/Retrieve'


const App = () => {
  return (
    ///Route를 이용하여 경로 별 컴포넌트 설정
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ready' element={<Ready />} />         {/*결제 준비 API DEMO*/}
        <Route path='/confirm' element={<Confirm />} />     {/*결제 승인 API DEMO*/}
        <Route path='/verify' element={<Verify />} />       {/*결제 검증 API DEMO*/}
        <Route path='/retrieve' element={<Retrieve />} />   {/*결제 조회 API DEMO*/}
        <Route path='/cancel' element={<Cancel />} />       {/*결제 취소 API DEMO*/}
        <Route path='/capture' element={<Capture />} />     {/*수동 매입 API DEMO*/}
      </Routes>
  )
}

export default App