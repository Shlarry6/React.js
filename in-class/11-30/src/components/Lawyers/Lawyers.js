import Main from "../UI/Main/Main";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";

const Lawyers = () => {

	const [lawyers, setLawyers] = useState([]);

	const { isLoading, error, sendRequest: getLawyers } = useHttp();

	useEffect(() => {
		getLawyers({ url: 'http://localhost:5000/lawyers' }, setLawyers);
	}, [getLawyers])

	return (
		<Main>
			{error && <p>Oops, something went wrong. {error}</p>}
			{isLoading && <p>Loading...</p>}
			{!error && !isLoading && <><h1>Our Lawyers</h1>
				{Object.keys(lawyers).map((title, index) => {
					return (
						<div className={`section ${index === Object.keys(lawyers).length - 1 ? "last-child" : ""}`}>
							<h2>{title}</h2>
							<ul>
								{lawyers[title].map((lawyer) => {
									return (
										<li>
											<div class="frame4">
												<div class="box">
													<img src={ require(`../../Assets/images/${lawyer.image}`)} alt="Img" height="94" width="90" />
												</div>
											</div>
											<p>
												<b>{lawyer.name}</b> {lawyer.bio}
											</p>
										</li>
									);
								})}
								
							</ul>
						</div>
					);
				})}
			</>}

		</Main>
	);
}

export default Lawyers;