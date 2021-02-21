import React from 'react';

function DialogHelp (props) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClose}>x</button>
    </div>
  );
}

export default DialogHelp;