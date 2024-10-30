import { NavLink } from "react-router-dom";
import NextStep from "../../assets/home/join/nextstep.png"
import BulkLogo from "../../assets/home/join/bulklogo.png";

const Join = () => {
	return (
		<>
			<div className="container flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-20 md:px-8 lg:px-64 py-10 lg:py-16 bg-yellow-50">
				<div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
					<img
						src={NextStep}
						alt="Next Step Image"
						className="w-auto h-auto lg:max-h-96 rounded-lg"
					/>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
					<h2 className="text-3xl md:text-4xl mb-4 lg:mb-6 text-black">
						Take the next step toward your personal and professional goals with
						Coursera.
					</h2>
					<p className="text-md md:text-lg mb-4 lg:mb-6 text-gray-800">
						Join now to receive personalized recommendations from the full
						Coursera catalog.
					</p>
					<NavLink to="/home">
						<button className="bg-blue-600 text-white px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 text-md md:text-lg rounded-md hover:bg-blue-500 transition duration-300">
							Join for Free
						</button>
					</NavLink>
				</div>
			</div>

			{/* Coursera for Business Section */}
			<div className="container flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-16 md:px-8 lg:px-64 py-10 lg:py-16">
				{/* Text Content */}
				<div className="w-full lg:w-1/2 mb-8 lg:mb-0">
					<h2 className="text-3xl md:text-4xl mb-4 lg:mb-10 text-black">
						Coursera for Business
					</h2>
					<p className="text-md md:text-lg mb-4 lg:mb-10 text-gray-800">
						We&apos;ve got the solution: world-class training and development
						programs developed by top universities and companies. All on
						Coursera for Business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="bg-blue-50 text-blue-600 border-2 border-blue-600 px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 rounded-md hover:bg-blue-100 transition duration-300">
							Coursera For Enterprise
						</button>
						<button className="bg-blue-50 text-blue-600 border-2 border-blue-600 px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 rounded-md hover:bg-blue-100 transition duration-300">
							Coursera For Teams
						</button>
					</div>
				</div>
				{/* Image */}
				<div className="w-full lg:w-auto flex justify-center">
					<img
						src={BulkLogo}
						alt="Coursera for Business Logo"
						className="w-auto h-auto lg:max-h-64 rounded-lg"
					/>
				</div>
			</div>
		</>
	);
};

export default Join;