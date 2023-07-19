import Img from "./../../assets/images/Background1.jpg";

export default function Cards({ data }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl h-fit">
      <div>
        <img className="rounded-md" src={Img} alt="" />
      </div>
      <div className="card-body">
        <h1>{data.brand}</h1>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read Now</button>
        </div>
      </div>
    </div>
  );
}
