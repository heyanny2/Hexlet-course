/*Write a realization for a modal window.
You have initial code for its use - class Component. Build Modal accordingly.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/mdaWNgb

import cn from "classnames";
import React from "react";
import ReactDOM from "react-dom";

//modal.jsx
const Header = (props) => {
  const { toggle, children } = props;
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={toggle}
      />
    </div>
  );
};

const Body = (props) => {
  const { children } = props;
  return (
    <div className="modal-body">{children}</div>
  );
};

const Footer = (props) => {
  const { children } = props;
  return (<div className="modal-footer">{children}</div>
  );
};

const Modal = ({ isOpen, children }) => {
  const style = {
    display: isOpen ? 'block' : 'none',
  };
  const classList = cn({
    modal: true,
    fade: isOpen,
    show: isOpen,
  });

  return (
    <div className={classList} style={style} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

//Component.jsx
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  };

  render() {
    const { modal } = this.state;
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Modal body
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("container"));
