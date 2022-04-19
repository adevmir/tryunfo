import React from 'react';
import PropTypes from 'prop-types';

class Deck extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {cards.map((card, i) => {
          const {
            name,
            desc,
            atr1,
            atr2,
            atr3,
            img,
            rar,
            tryf,
          } = card;
          return (
            <div key={ i }>
              <p>{name}</p>
              <img src={ img } alt={ img } />
              <p>{desc}</p>
              <p>{atr1}</p>
              <p>{atr2}</p>
              <p>{atr3}</p>
              <p>{rar}</p>
              {tryf === true ? <span>Super Trunfo</span> : undefined}
            </div>
          );
        })}
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      atr1: PropTypes.string.isRequired,
      atr2: PropTypes.string.isRequired,
      atr3: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      rar: PropTypes.string.isRequired,
      tryf: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Deck;
