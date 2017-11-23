import React, { Component } from 'react';
import PDFViewer from './components/PDFViewer';
const PDF_URL = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

class App extends Component {
  render() {
    return (
        <PDFViewer src={PDF_URL}/>
    );
  }
}

export default App;
