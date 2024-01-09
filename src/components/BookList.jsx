import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
	/* state = {
		searchQuery: "",
		asin: null,
	}; */
	const [searchQuery, setSearchQuery] = useState("");
	const [asin, setAsin] = useState(null);

	const setAsinState = (asinItem) => {
		setAsin(asinItem);
		/* this.setState({ asin: asinItem }); */
	};

	return (
		<>
			<Row>
				<Col xs={8}>
					<Row className="justify-content-center mt-5">
						<Col xs={12} md={4} className="text-center">
							<Form.Group>
								<Form.Control
									type="search"
									placeholder="Cerca un libro"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row className="g-2 mt-3">
						{props.books
							.filter((b) => b.title.toLowerCase().includes(searchQuery))
							.map((b) => (
								<Col xs={12} md={4} key={b.asin}>
									<SingleBook book={b} setAsinState={setAsinState} asin={asin} />
								</Col>
							))}
					</Row>
				</Col>
				<Col xs={4}>
					<div className="pt-5 mt-5 sticky-top">
						<CommentArea asin={asin} />
					</div>
				</Col>
			</Row>
		</>
	);
};

export default BookList;
