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
          //  isSaveButtonDisabled = {}
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
          //  isSaveButtonDisabled = {}
          onInputChange={ this.onInputChange }
        // onSaveButtonClick = {}
        />
      </div>
    );
  }
}

export default App;
