// import React from 'react'
import PropTypes from "prop-types";

const InputCard = ({ url, onUrlChange, onDownload }) => {
  return (
    <div className="card w-full md:w-[670px] mt-12 mx-auto shadow-md px-2 md:px-4 py-3 md:py-6 ">
      <input
        value={url}
        onChange={(e) => onUrlChange && onUrlChange(e.target.value)}
        className="input input-bordered  w-full"
        placeholder="Paste url here..."
      />
      <button onClick={onDownload} className="btn mt-3 px-8">
        Download
      </button>
    </div>
  );
};

InputCard.propTypes = {
  url: PropTypes.string,
  onUrlChange: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
};

export default InputCard;
