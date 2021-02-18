import Image from "next/image";
const Brands = () => {
  return (
    <div className="flex items-center pt-5 justify-between">
      <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
        <img
          src="https://stripe.com/img/v3/payments/overview/logos/slack.svg"
          alt=""
          style={{ maxHeight: 60 + "px" }}
        />
      </button>
      <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
        <img
          src="/img/js.png"
          alt=""
          style={{ maxHeight: 60 + "px", maxWidth:60+"px" }}
        />
      </button>
      <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
        <img
          src="/img/mongodb.png"
          alt=""
          style={{ maxHeight: 70 + "px", maxWidth:70+"px" }}
        />
      </button>
      <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
        <img
          src="/img/nodejs.png"
          alt=""
          style={{ maxHeight: 60 + "px", maxWidth:60+"px" }}
        />
      </button>


    </div>
  );
};
export default Brands;
