import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navigation from '../features/layouts/Navigation/Navigation';
import Home from '../features/layouts/start/Home';
const Dashboard = () => {
  return (
    <>
    <Navigation/>
    <Home/>
    </>
  )
}

export default Dashboard