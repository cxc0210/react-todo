import React from 'react';
import HomePage from '../HomePage'
import { useDispatch } from 'react-redux'
import { CHANGE_USER } from '../../constants/ActionType'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div>
      Hello, login page
      <button onClick={() => dispatch({ type: CHANGE_USER, payload: 'cxcxchen' })}>
        Change Nage
      </button>
      <HomePage />
    </div>
  )
}

export default LoginPage