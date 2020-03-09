import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      404! - <Link to="/dashboard">Go Home</Link>
    </div>
  );
};

NotFoundPage.propTypes = {
  //name: PropTypes.string
};

export default NotFoundPage;
