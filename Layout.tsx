import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FunctionComponent<{loading: boolean}> = ({ children, loading }) => {
	return (
		<div
			className="flex justify-center min-h-screen"
			style={{ background: "#edf2f7" }}
		>
			<div className="max-w-screen-lg mx-auto">
				<Suspense fallback={null}>
					<Header />
				</Suspense>
				<main className="mt-12">
					<Suspense fallback={<Loading />}>
						{ loading ? <Loading /> : children }
					</Suspense>
				</main>
				<Footer />
			</div>
		</div>
	);
}

function Loading() {
	return <div style={{ height: 'calc(100vh / 3)'}} className="flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 transition ease-in-out duration-150">
		<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	</div>

}

export default Layout;
