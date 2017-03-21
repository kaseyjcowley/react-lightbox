import React, {PropTypes, Component} from 'react';
import ReactModal from 'react-modal';
import './LightBox.css';

export function LightBox(props) {
  return (
    <ReactModal
      className="LightBox"
      isOpen={this.props.isOpen}
      onRequestClose={this.props.close}
      closeTimeoutMS={250}
      contentLabel="LightBox Modal"
      overlayClassName="LightBox__overlay"
      shouldCloseOnOverlayClose
    >
      <i className="fa fa-2x fa-chevron-left LightBox__prev" onClick={this.props.prev} />
      
      {this.props.children}

      <i className="fa fa-2x fa-chevron-right LightBox__next" onClick={this.props.next} />
      <i className="fa fa-lg fa-close LightBox__close" onClick={this.props.close} />
    </ReactModal>
  );
}

LightBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};