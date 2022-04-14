import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      name: '',
      desc: '',
      atr1: '',
      atr2: '',
      atr3: '',
      img: '',
      rar: '',
      tryf: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  validator = () => {
    const {
      name,
      desc,
      atr1,
      atr2,
      atr3,
      img,
    } = this.state;

    const atrmax = 90;
    const maxpoints = 210;
    if (name === ''
    || desc === ''
    || img === ''
    || atr1 > atrmax || atr1 < 0
    || atr2 > atrmax || atr2 < 0
    || atr3 > atrmax || atr3 < 0
    || parseInt(atr1, 10) + parseInt(atr2, 10) + parseInt(atr3, 10) > maxpoints) {
      return true;
    }
    return false;
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
          isSaveButtonDisabled={ this.validator() }
          onInputChange={ this.onInputChange }
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
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
