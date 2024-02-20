import { useEffect } from 'react';

import { useAppDispatch } from './redux/config';
import { __getLetters } from './redux/letters';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

  return (
    <>
      <p>여기</p>
    </>
  );
}

export default App;
