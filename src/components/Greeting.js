import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/messages/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.messages.greeting);
  const isLoading = useSelector((state) => state.messages.isLoading);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Greeting</h1>
      <h4>Reload the browser to get a new greeting</h4>
      <h5>{greeting}</h5>
    </div>
  );
};

export default Greeting;
