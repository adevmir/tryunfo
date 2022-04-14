import React from 'react';
import PropTypes, { bool } from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form">

        <label htmlFor="name">
          Nome:
          <input
            name="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="desc">
          Descrição da carta:
          <input
            name="desc"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atr1">
          Força:
          <input
            name="atr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atr2">
          Defesa:
          <input
            name="atr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atr3">
          Velocidade:
          <input
            name="atr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="img">
          Imagem da carta:
          <input
            name="img"
            type="file"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rar">
          Raridade:
          <select
            name="rar"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal"> Normal </option>
            <option value="raro"> Raro </option>
            <option value="muito raro"> Muito Raro </option>
          </select>
        </label>

        <label htmlFor="tryf">
          <input
            name="tryf"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Carta Super Tryunfo?
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
