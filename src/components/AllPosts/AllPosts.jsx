import React from "react";

import blogImage from '../../images/blogimage.png';
import PrimaryRecentPostCard from "../PrimaryRecentPostCard/PrimaryRecentPostCard";

export default props => {

	const postsToDisplay = props.data.slice(4);
		
	return (
		<>

			<div className={`my-8 ${props.className}`}>
				<h2 className="text-white text-2xl font-semibold">{props.sectionTitle}</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

					{postsToDisplay.map((post, index) => (
						<PrimaryRecentPostCard
							key={index}
							className="w-full"
							title={post.title}
							description={post.excerpt}
							date={post.date}
							slug={post.slug}
							category={post.categories}
							imageUrl={post.featured_image || blogImage}
						/>
					))}


				</div>
			</div>

		</>
	)
}