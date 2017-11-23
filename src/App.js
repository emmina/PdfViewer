import React, { Component } from 'react';
import PDFViewer from './components/PDFViewer';
const PDF_FILE = require('./assets/MyCV.pdf');

class App extends Component {
  render() {
    return (
        <PDFViewer src={PDF_FILE}/>
    );
  }
}

export default App;
