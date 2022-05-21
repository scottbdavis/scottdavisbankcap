import React from "react";
import classes from "./NavBar.css";
import { Navbar, Nav, Brand, NavDropdown, Container } from "react-bootstrap";
import {
	BrowserRouter as Router,
	Route,
	Link,
	useNavigate,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

import Deposit from "../BankFunctions/Deposit";
import Withdraw from "../BankFunctions/Withdraw";
import Home from "../BankFunctions/Home";

function NavBar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<div>
			<div>
				<Navbar bg="light" variant="light">
					<Container>
						<Navbar.Brand as={Link} to={"/"}>
							BankFast
						</Navbar.Brand>
						<Nav.Link as={Link} to={"/"}>
							Home Page
						</Nav.Link>
						<Nav.Link as={Link} to={"/bankservices"}>
							Bank Services
						</Nav.Link>

						{/* <Nav.Link as={Link} to={"/CreateAccount"}>
							<FaUser />
							Create Account
						</Nav.Link> */}
						{user ? (
							<li>
								<button className="btn" onClick={onLogout}>
									<FaSignOutAlt />
									Logout
								</button>
							</li>
						) : (
							<>
								<Nav.Link as={Link} to={"/login"}>
									<FaSignInAlt />
									Login
								</Nav.Link>
								<Nav.Link as={Link} to={"/register"}>
									<FaUser />
									Register
								</Nav.Link>
							</>
						)}

						{/* <Nav.Link as={Link} to={"/deposit"}>
							Deposit
						</Nav.Link>
						<Nav.Link as={Link} to={"/withdraw"}>
							Withdraw
						</Nav.Link> */}
						<Nav.Link as={Link} to={"/deposits"}>
							Make Deposit
						</Nav.Link>
						<Nav.Link as={Link} to={"/withdrawals"}>
							Make Withdrawal
						</Nav.Link>
						{/* <Nav.Link as={Link} to={"/new-bankAction"}>
							New Bank Action
						</Nav.Link> */}
						<Nav.Link as={Link} to={"/deposit-data"}>
							Deposit Data
						</Nav.Link>
						<Nav.Link as={Link} to={"/withdrawal-data"}>
							Withdrawal Data
						</Nav.Link>
						<Nav.Link as={Link} to={"/"}></Nav.Link>
					</Container>
				</Navbar>
			</div>
		</div>
	);
}

export default NavBar;
