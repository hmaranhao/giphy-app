import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addFavoriteAction, removeFavoriteAction } from './../../actions/favoritesAction'
import {
  Card,
  Container,
  CardHover
} from './style'

function List({
  gifsList,
  favoritesReducer,
  addFavoriteAction,
  removeFavoriteAction
}) {
  const [hover, setHover] = useState({
    display: null,
    gif: null
  })

  function copyGif(gifUrl) {
    let inputTest = document.createElement("input");
    inputTest.value = gifUrl;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    alert('Link do gif copiado!')
    document.body.removeChild(inputTest);
  }
  return (
    <Container>
      {(gifsList || []).map(gif => {
        return (
          <div style={{ position: 'relative' }}>
            <Card
              key={gif.id}
              onMouseEnter={() => setHover({ display: 'block', gif })}
            >
              <img
                src={gif.images?.original?.url}
                alt={gif.title}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </Card>
            <CardHover display={hover.display && hover?.gif?.id === gif?.id}>
              {/* <div style={{ textAlign: 'center' }}>
                <i className="fas fa-search-plus"></i>
                <p>Detalhes</p>
              </div> */}
              <div style={{ textAlign: 'center' }} onClick={() => copyGif(gif.images?.original?.url)}>
                <i className="fas fa-link"></i>
                <p>Copiar Link do Gif</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                {(favoritesReducer?.list || []).find(f => f.id === gif.id)
                  ? <><i className="fas fa-star" onClick={() => removeFavoriteAction(gif)} /><p>Favorito</p></>
                  : <><i className="far fa-star" onClick={() => addFavoriteAction(gif)} /><p>Favoritar</p></>
                }
                
              </div>
            </CardHover>
          </div>
        )
      })}

    </Container>
  )
}

List.propTypes = {
  gifsList: PropTypes.array.isRequired,
  favoritesReducer: PropTypes.array,
  addFavoriteAction: PropTypes.func,
  removeFavoriteAction: PropTypes.func
}

function mapStateToProps(state) {

  return {
    favoritesReducer: state.favoritesReducer
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    addFavoriteAction,
    removeFavoriteAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)


