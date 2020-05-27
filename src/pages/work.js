import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import WorkProjects from '../components/WorkProjects';

const Work = () => (
	<Layout>
		<div className="flex">
			{/* <h1 className="mb-4 p-2">Work</h1> */}
			<Link className="p-3 mb-2" to="/">
				Back to home
			</Link>
		</div>
		<WorkProjects />
	</Layout>
);

export default Work;
