import React from "react";
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
			<div className="flex flex-wrap md:flex-nowrap gap-6 lg:max-h-[200px]">
				<Link to={`/blog/${props.slug}`}>
					<img className='object-cover w-full md:min-w-[320px] md:max-w-[320px] md:h-[200px]' src={props.imageUrl} alt={props.title} />
				</Link>
				<div className='flex flex-wrap flex-col gap-2'>
					<h3 className='text-[#6941C6] font-semibold'>{props.date}</h3>
					<Link to={`/blog/${props.slug}`}>
						<h4 className='text-white text-xl font-semibold'>{props.title}</h4>
					</Link>
					<p className='text-[#C0C5D0]'>
						{limitDescription(props.description, 10)}
					</p>
					<div className='mt-3 max-h-max text-[#3538CD] bg-[#EEF4FF] rounded-2xl py-1 px-2 max-w-max text-sm'>
						{props.category}
					</div>
				</div>
			</div>

		</>
	)
}