import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import PropTypes from 'prop-types';
import { Pager } from 'react-bootstrap';
import './style.css';

class PDFViewer extends Component {
    state = {};

    onDocumentComplete = (pages) => {
        this.setState({ page: 1, pages });
    };

    onPageComplete = (page) => {
        this.setState({ page });
    };

    handlePageSelect = (isPrevious) => {
       this.setState({ page: isPrevious ? this.state.page - 1 : this.state.page + 1 });
    };

    renderPagination = (page, pages) => {
        return (
            <Pager onSelect={this.handlePageSelect}>
                <Pager.Item disabled={page === 1} href="#" eventKey={true}>Previous</Pager.Item>
                {' '}
                <Pager.Item disabled={page === pages} href="#" eventKey={false}>Next</Pager.Item>
            </Pager>
        );
    };

    render() {
        let pagination = null;
        const { page, pages } = this.state;
        if (pages) {
            pagination = this.renderPagination(page, pages);
        }
        return (
            <div className='container'>
                <PDF style={{width: '100px', height: '100px'}} file={this.props.src} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={page} />
                {pagination}
            </div>
        )
    }


}

PDFViewer.propTypes = {
    src: PropTypes.string.isRequired
};

export default PDFViewer