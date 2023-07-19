import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { fetchApiTodo } from "../Services/ProductService";
import Cards from "../Components/Cards/Cards";

const Books = () => {
	const [data, setData] = useState({});

	const getData = async () => {
		const newData = await fetchApiTodo();
		setData(newData);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<section>
				<Navbar />
				<div className="flex flex-wrap gap-5 justify-center">
					{data.products?.map((item, index) => (
						<Cards key={index} image={item.images?.[0]} brand={item.brand} title={item.title} />
					))}
				</div>
			</section>
		</>
	);
};

export default Books;
