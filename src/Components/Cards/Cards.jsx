export default function Cards({ image, title, brand }) {
	return (
		<div className="card w-80 bg-base-100 shadow-xl h-fit">
			<div className="w-full h-48">
				<img className="rounded-md w-full h-full object-cover" src={image} alt={title} />
			</div>
			<div className="card-body">
				<h1>{brand}</h1>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Read Now</button>
				</div>
			</div>
		</div>
	);
}
