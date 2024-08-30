import React from "react";
import { Link } from "react-router-dom";

function CtaBtn(props) {
  return (
    <Link to="/paradoxes"  className="bg-gradient-to-r from-pink-600 to-violet-600 text-lg font-semibold rounded-lg text-white px-3 py-1 hover:ring-1 focus:ring-1 ring-white mt-5 md:me-auto">
      <button>
        {props.text}
      </button>
    </Link>
  );
}

export default CtaBtn;
