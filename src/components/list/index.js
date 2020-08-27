import React from 'react'
import PropTypes from 'prop-types';

import {
  Card,
  Container
} from './style'

export default function List({
  gifsList
}) {
  return (
    <Container>
      {(gifsList || []).map(gif => {
        return (
          <Card key={gif.id}>
            <img
              src={gif.images?.original?.url}
              alt={gif.title}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </Card>
        )
      })}
    </Container>
  )
}

List.propTypes = {
  gifsList: PropTypes.array.isRequired
}


