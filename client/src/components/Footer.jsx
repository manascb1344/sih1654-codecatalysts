import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Services', path: '/services' },
		{ name: 'Contact', path: '/contact' },
	];

	const socialLinks = [
		{ icon: <FaFacebook size={24} />, url: 'https://facebook.com' },
		{ icon: <FaTwitter size={24} />, url: 'https://twitter.com' },
		{ icon: <FaLinkedin size={24} />, url: 'https://linkedin.com' },
		{ icon: <FaGithub size={24} />, url: 'https://github.com' },
	];

	return (
		<footer className="bg-gray-800 text-gray-300 py-12 border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
					{/* Logo and Description */}
					<div className="space-y-4">
						<h2 className="text-3xl font-bold text-white">DRDO IBS</h2>
						<p className="text-gray-400">
							Empowering the selection process for DRDO Interview Boards with advanced AI and expert matching.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link
										to={link.path}
										className="text-gray-400 hover:text-green-400 transition-colors duration-300"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
						<p className="text-gray-400 mb-2">Email: contact@drdoibs.gov.in</p>
						<p className="text-gray-400 mb-4">Phone: +91 11 2300 7090</p>
						<div className="flex space-x-4">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-green-400 transition-colors duration-300"
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-gray-800 text-center">
					<p className="text-gray-500">
						© {currentYear} DRDO Interview Board Selection. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;