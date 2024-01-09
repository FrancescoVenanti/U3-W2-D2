import { Card } from "react-bootstrap";

const SingleBook = (props) => {
	return (
		<>
			<Card
				onClick={() => {
					/* this.setState({ selected: !this.state.selected }); */
					props.setAsinState(props.book.asin);
				}}
				style={{ border: props.asin === props.book.asin ? "3px solid red" : "3px solid #efefef" }}
			>
				<Card.Img variant="top" src={props.book.img} />
				<Card.Body>
					<Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleBook;
