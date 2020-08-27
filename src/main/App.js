import React, { useState } from 'react';
import { useEffect } from 'react';

import List from '../components/list'
import {
  ContainerApp
} from './style'
import api from '../server/api';

function App() {
  const [gifsTrending, setGifsTrending] = useState([])

  async function loadGifsTrending() {
    const response = await api.get('/gifs/trending', {
      params: {
        limit: 16
      }
    })
    // debugger
    setGifsTrending(response.data)
  }

  useEffect(() => {
    loadGifsTrending()
  }, [])
  return (
    <ContainerApp>
      <List gifsList={gifsTrending} />
    </ContainerApp>

  );
}

export default App;
