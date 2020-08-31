import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import List from '../components/list'
import {
  ContainerApp,
  SearchInput,
  DivInputBlock,
  DivFlexRow, 
  Button,
  MyFavoritesButton
} from './style'
import api from '../server/api';

function App({
  favoritesReducer
}) {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState('')
  const [viewFavorites, setViewFavorites] = useState(false)

  async function loadGifsTrending() {
    const response = await api.get('/gifs/trending', {
      params: {
        limit: 16
      }
    })
    // debugger
    setGifs(response.data)
  }

  async function loadGifWithFilter(query){

    if(!query){
      loadGifsTrending()
      return
    }

    const response = await api.get('/gifs/search', {
      params: {
        limit: 16,
        offset: 0,
        q: query
      }
    })
    setViewFavorites(false)
    setGifs(response.data)
  }

  function showFavorites(){
    setViewFavorites(true)
    setGifs(favoritesReducer.list)
  }

  // useEffect(() => {
  //   loadGifsTrending()
  // }, [])

  useEffect(() => {
    if(viewFavorites){
      setGifs(favoritesReducer.list)
    }
  }, [favoritesReducer.list])

  return (
    <ContainerApp>
      <DivFlexRow>
        <DivInputBlock>
          <i className="fa fa-search"></i>
          <SearchInput
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && loadGifWithFilter(search)}
          />
        </DivInputBlock>
        <Button onClick={() => loadGifWithFilter(search)}>
          Buscar
        </Button>
        <div style={{ flex: 1 }} />
        <MyFavoritesButton onClick={showFavorites}>
          Meus Favoritos
        </MyFavoritesButton>
      </DivFlexRow>

      <List gifsList={gifs} />
    </ContainerApp>

  );
}

function mapStateToProps(state) {

  return {
    favoritesReducer: state.favoritesReducer
  }
}

export default connect(mapStateToProps)(App);
