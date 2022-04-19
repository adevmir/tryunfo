import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      name: '',
      desc: '',
      atr1: 0,
      atr2: 0,
      atr3: 0,
      img: '',
      rar: '',
      tryf: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        if (this.validator() === true) {
          this.setState({ isSaveButtonDisabled: false });
        }
        if (this.validator() === false) {
          this.setState({ isSaveButtonDisabled: true });
        }
      },
    );
  }

  validator = () => {
    const {
      name,
      desc,
      atr1,
      atr2,
      atr3,
      img,
      rar,
    } = this.state;

    const atrmax = 90;
    const maxpoints = 210;
    if (name === ''
    || desc === ''
    || img === ''
    || rar === ''
    || atr1 > atrmax || atr1 < 0
    || atr2 > atrmax || atr2 < 0
    || atr3 > atrmax || atr3 < 0
    || parseInt(atr1, 10) + parseInt(atr2, 10) + parseInt(atr3, 10) > maxpoints) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      desc,
      atr1,
      atr2,
      atr3,
      img,
      rar,
      tryf,
      cards,
    } = this.state;
    const newCard = {
      name,
      desc,
      atr1,
      atr2,
      atr3,
      img,
      rar,
      tryf,
    };
    if (tryf === true) {
      this.setState({ hasTrunfo: true });
    }
    cards.push(newCard);
    this.setState({
      name: '',
      desc: '',
      atr1: '0',
      atr2: '0',
      atr3: '0',
      img: '',
      rar: 'normal',
      tryf: false,
    });
  }

  render() {
    const {
      name,
      desc,
      atr1,
      atr2,
      atr3,
      img,
      rar,
      tryf,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ name }
          cardDescription={ desc }
          cardAttr1={ atr1 }
          cardAttr2={ atr2 }
          cardAttr3={ atr3 }
          cardImage={ img }
          cardRare={ rar }
          cardTrunfo={ tryf }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.handleSubmit }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ desc }
          cardAttr1={ atr1 }
          cardAttr2={ atr2 }
          cardAttr3={ atr3 }
          cardImage={ img }
          cardRare={ rar }
          cardTrunfo={ tryf }
        />
        <Deck cards={ cards } />
      </div>
    );
  }
}

export default App;
