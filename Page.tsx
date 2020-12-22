import React, { FunctionComponent } from 'react';
import { Image, useData } from 'wordpress-r';

type Props = {
	page: Page,
}

export default function Page({ page }) {
	return <>
		<h2 className="text-gray-800 text-4xl font-bold mt-2 mb-8 leading-tight">{ page.title.rendered }</h2>

		<div className="flex flex-col lg:flex-row lg:space-x-12">
			<div className="px-4 lg:px-0 text-gray-700 text-lg leading-relaxed w-full" dangerouslySetInnerHTML={ { __html: page.content.rendered } }>
			</div>
		</div>
	</>
}
