import React from 'react';
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="btn-close close-btn"
          aria-label="Close"
          onClick={() => {
            props.setTrigger(false);
          }}
        ></button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
