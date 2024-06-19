import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../images/menu.png"

export default props => {

	const [menuMobile, setMenuMobile] = useState(false);

	let logo = props.logo
	const extension = props.logo.split('.').pop().toLowerCase();
	if (extension === 'svg' || extension === 'png' || extension === 'jpeg' || extension === 'jpg' || extension === 'webp') {
		logo = <img width="75" src={props.logo} alt="logo" />;
	}

	return (
		<>
			<div className='bg-primary text-white'>
				<div className="lg:flex items-center flex-nowrap justify-between py-8">
					<div className="flex items-center justify-between">
						<div className="logo">
							<Link to="/">
								{logo}
							</Link>
						</div>
						<div className="lg:hidden cursor-pointer" onClick={() => setMenuMobile(!menuMobile)}>
							<img src={menuIcon} width="25" alt="" srcset="" />
						</div>
					</div>

					<div className="bg-transparent text-white blog-items hidden lg:flex flex-row gap-4">

						<Link to="/">
							<div className="item ">Blog</div>
						</Link>

						<Link to="/about">
							<div className="item">About</div>
						</Link>

						<Link to="/contato">
							<div className="item">Contato</div>
						</Link>

					</div>

					{menuMobile && (
						<div className="flex lg:hidden gap-3 mt-4 p-4 bg-white text-primary blog-items flex-col">

							<Link to="/">
								<div className="item ">Blog</div>
							</Link>

							<Link to="/about">
								<div className="item">About</div>
							</Link>

							<Link to="/newsletter">
								<div className="item">Newsletter</div>
							</Link>

						</div>
					)}
				</div>
			</div>

		</>
	)
}