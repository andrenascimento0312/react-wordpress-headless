import React from "react";

import iconWrap from '../../images/icon-wrap.png';

import { Link } from "react-router-dom";

export default props => {

	const limitDescription = (description, maxWords) => {
		const words = description.split(" ");
		if (words.length > maxWords) {
			return words.slice(0, maxWords).join(" ") + " ...";
		}
		return description;
	};

	return (
		<>
			<div className={`${props.className}`}>
				<div className="main-card ">
					<Link to={`/post/${props.slug}`}>
						<img src={props.imageUrl} className="object-cover mt-8 mb-2 w-full md:min-h-[228px] md:max-h-[228px]" alt="" srcset="" />
					</Link>
					<div className="text-[#6941C6] font-semibold mb-3">
						{props.date}
					</div>
					<Link to={`/post/${props.slug}`}>
						<div className="flex justify-between mb-3">
							<h3 className="text-white text-2xl font-semibold">
								{props.title}
							</h3>
							<img src={iconWrap} className="max-h-7" alt="" />
						</div>
					</Link>
					<div className="text-[#C0C5D0]">
						{limitDescription(props.description, 15)}
					</div>

					<div className='mt-3 text-[#3538CD] bg-[#EEF4FF] rounded-2xl py-1 px-2 max-w-max text-sm'>
						{props.category}
					</div>
				</div>

			</div>

		</>
	)
}