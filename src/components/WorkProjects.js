import React from 'react';
import data from '../data/projects.json';

const WorkProjects = () => (
	<div>
		<div class="flex flex-wrap">
			{data.Projects.map((projects, i) => {
				return (
					<div key={i} class="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
						<div className="p-3 border-2 border-solid border-blue rounded">
							<div>
								<h1 className="mt-2">{projects.title}</h1>
								<p className="mt-2">{projects.para1}</p>
								<p className="mt-2" dangerouslySetInnerHTML={{ __html: projects.para2 }} />
							</div>
							<button
								className="mt-6 mb-2"
								onClick={() => {
									let url = projects.url;
									window.location.replace(url);
								}}
							>
								Visit Site
							</button>
						</div>
					</div>
				);
			})}
		</div>
	</div>
);
export default WorkProjects;
