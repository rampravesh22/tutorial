import { Link } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";
function Footer() {
	return (
		<div>
			<footer className="">
				<div className="">
					<section className="">
						<SocialIcon url="https://facebook.com" />

						<SocialIcon url="https://instagram.com" />

						<SocialIcon url="https://google.com" />

						<SocialIcon url="https://twitter.com/jaketrent" />
					</section>
				</div>

				<div className="">
					© 2020 Copyright:
					<Link className="" href="https://mdbootstrap.com/">
						MDBootstrap.com
					</Link>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
