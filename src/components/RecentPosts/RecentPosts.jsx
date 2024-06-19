import React from "react";

import blogImage from '../../images/blogimage.png';
import blogImage2 from '../../images/blogImage2.png';
import blogImage3 from '../../images/blogImage3.png';

import PrimaryRecentPostCard from '../PrimaryRecentPostCard/PrimaryRecentPostCard';
import SecondaryRecentPostCard from '../SecondaryRecentPostCard/SecondaryRecentPostCard';
import FullWidthRecentPostCard from '../FullWidthRecentPostCard/FullWidthRecentPostCard';

export default props => {

	return (
		<>

			<div className={`mt-8 ${props.className}`}>
				<h2 className='text-white text-2xl font-semibold'>{props.sectionTitle}</h2>

				<div className="flex flex-wrap lg:flex-nowrap gap-8">

					<PrimaryRecentPostCard
						className="lg:max-w-[600px] lg:flex-1 w-full lg:w-auto"
						// title="UX review presentations"
						title={props.data[0].title}
						description={props.data[0].excerpt}
						date={props.data[0].date}
						slug={props.data[0].slug}
						category={props.data[0].categories}
						imageUrl={props.data[0].featured_image || blogImage}
					/>

					<div className="flex flex-wrap gap-6 lg:gap-1 lg:flex-1 lg:items-end">
						<SecondaryRecentPostCard
							title={props.data[1].title}
							description={props.data[1].excerpt}
							date={props.data[1].date}
							slug={props.data[1].slug}
							category={props.data[1].categories}
							imageUrl={props.data[1].featured_image || blogImage }
						/>

						<SecondaryRecentPostCard
							title={props.data[2].title}
							description={props.data[2].excerpt}
							date={props.data[2].date}
							slug={props.data[2].slug}
							category={props.data[2].categories}
							imageUrl={props.data[2].featured_image || blogImage}
						/>

					</div>


				</div>

				<FullWidthRecentPostCard
					title={props.data[3].title}
					description={props.data[3].excerpt}
					date={props.data[3].date}
					slug={props.data[3].slug}
					category={props.data[3].categories}
					imageUrl={props.data[3].featured_image || blogImage}
				/>

			</div>

		</>
	)
}