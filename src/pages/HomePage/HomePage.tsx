import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { rootState } from '../../reducers'

const HomePage: React.FC = () => {
  const user = useSelector<rootState, string>(state => state.test.user, shallowEqual);
  return (
    <div>
      Hello, homepage {user}
    </div>
  )
}

export default HomePage