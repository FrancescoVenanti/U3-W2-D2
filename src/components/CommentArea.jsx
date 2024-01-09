import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
	/* state = {
		comments: [],
		isLoading: true,
		isError: false,
	}; */

	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchBooks = async () => {
		setIsLoading(true);
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc1MjBkOGEyMDAwMThhNDhhMzQiLCJpYXQiOjE3MDQ3MjMyNzYsImV4cCI6MTcwNTkzMjg3Nn0.bh5SMrFd56OxmRKmQ8fRDM4rVt8VvY3OToSP3bMaXMA",
				},
			});
			console.log(response);
			if (response.ok) {
				let comments = await response.json();
				setComments(comments);
				setIsLoading(false);
				setIsError(false);
			} else {
				setIsLoading(false);
				setIsError(true);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			setIsError(true);
		}
	};

	/* componentDidMount = () => {
		this.fetchBooks();
	}; */

	useEffect(() => {
		fetchBooks();
	}, [props.asin]);
	/* componentDidUpdate(prevProps, prevState) {
		if (prevProps.asin !== props.asin) {
			// se siamo qui dentro significa che è cambiata la selezione nel menu a tendina
			this.fetchBooks();
			console.log("Prop diversa ==> nuova fetch");
		}
	} */

	return (
		<div className="text-center">
			{props.asin == null ? (
				<h3>Clicca per vedere i commenti</h3>
			) : (
				<>
					{isLoading && <Loading />}
					{isError && <Error />}
					<AddComment asin={props.asin} />
					<CommentList commentsToShow={comments} />
				</>
			)}
		</div>
	);
};

export default CommentArea;
