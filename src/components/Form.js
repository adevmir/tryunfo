import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label htmlFor="text">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="desc">
            Descrição da carta:
            <input
              id="desc"
              name="desc"
              type="textarea"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="forc">
            Força:
            <input
              id="forc"
              name="forc"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="defe">
            Defesa:
            <input
              id="defe"
              name="defe"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="velo">
            Velocidade:
            <input
              id="velo"
              name="velo"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="img">
            Imagem da carta:
            <input
              id="img"
              name="img"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rari">
            Raridade:
            <select
              id="rari"
              name="rari"
              data-testid="rare-input"
            >
              <option value="normal"> Normal </option>
              <option value="raro"> Raro </option>
              <option value="muito raro"> Muito Raro </option>
            </select>
          </label>

          <label htmlFor="stry">
            <input
              id="stry"
              name="stry"
              type="checkbox"
              data-testid="trunfo-input"
            />
            Carta Super Tryunfo?
          </label>

          <button
            id="button"
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

export default Form;
