import React, { useState } from "react";

const Feedback = () => {
	const [feedback, setFeedback] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFeedback({
			...feedback,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Feedback Submitted:", feedback);
		setSubmitted(true);
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
			<div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
				<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
					Help & Feedback
				</h2>

				{submitted ? (
					<div className="text-center">
						<h3 className="text-xl font-semibold text-green-600">
							Thank you for your feedback!
						</h3>
						<p className="text-gray-600 mt-2">
							We&apos;ll get back to you if necessary.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-gray-700 mb-2">
								Name (Optional)
							</label>
							<input
								type="text"
								name="name"
								value={feedback.name}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Your name"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 mb-2">Email</label>
							<input
								type="email"
								name="email"
								value={feedback.email}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
								placeholder="Your email address"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 mb-2">Message</label>
							<textarea
								name="message"
								value={feedback.message}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								rows="4"
								required
								placeholder="How can we help you?"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
						>
							Submit Feedback
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Feedback;
