import React from "react";
import iconWrap from '../../images/icon-wrap.png';
import { Link } from "react-router-dom";

export default props => {
	return (
		<>

			<div className={`w-full flex flex-wrap lg:flex-nowrap gap-8 justify-between items-center my-16 ${props.className}`}>
				<div className="lg:flex-1 w-full lg:w-auto ">
					<Link to={`/post/${props.slug}`}>
						<img src={props.imageUrl} className="w-full lg:max-h-[246px] object-cover" alt="" srcset="" />
					</Link>
				</div>
				<div className="lg:flex-1">
					<div className="text-[#6941C6] font-semibold mb-3">
						{props.date}
					</div>
					<Link to={`/post/${props.slug}`}>
						<div className="flex justify-between mb-3">
							<h3 className="text-white text-2xl font-semibold">
								{props.title}
							</h3>
							<img src={iconWrap} alt="" />
						</div>
					</Link>
					<div className="text-[#C0C5D0]">
						{props.description}
					</div>
					<div className='mt-3 text-[#3538CD] bg-[#EEF4FF] rounded-2xl py-1 px-2 max-w-max text-sm'>
						{props.category}
					</div>
				</div>
			</div>

		</>
	)
}