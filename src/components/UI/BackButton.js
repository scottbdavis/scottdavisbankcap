import React from "react";
import { FaArrowAltCircleLeft, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
	return (
		<Link to={url} className="btn btn-warning btn-back btn-block ">
			<FaArrowCircleLeft /> Back to Bank Services
		</Link>
	);
};

export default BackButton;
