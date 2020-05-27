import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = (props) => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		{/* <div className="logo">
            <span className="icon far fa-desktop"></span>
        </div> */}
		<div className="content">
			<div className="inner">
				<h1>Dalton Carr</h1>
				<p>Front End Developer</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					{/* <a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('work');
						}}
					>
						Work
					</a> */}
					<Link to="/work">Work</Link>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('about');
						}}
					>
						About
					</a>
				</li>
				{/* <li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle('intro');
						}}
					>
						Resume
					</a>
				</li> */}
				<li>
					<a href="mailto:daltcarr@gmail.com">Contact</a>
				</li>
				{/* <li>
					<a href="https://github.com/daltlc">Github</a>
				</li> */}
			</ul>
			{/* <form method="get" action="../data/resume.doc">
				<button type="submit" class="resume-button" style={{ marginTop: 40 + 'px', backgroundColor: 'white' }}>
					Resume
				</button>
			</form> */}
		</nav>
		<ul className="icons">
			<li>
				<a href="https://twitter.com/dalt_lc" className="icon fa-twitter">
					<span className="label">Twitter</span>
				</a>
			</li>
			{/* <li>
				<a href="https://codebushi.com" className="icon fa-facebook">
					<span className="label">Facebook</span>
				</a>
			</li>
			<li>
				<a href="https://codebushi.com" className="icon fa-instagram">
					<span className="label">Instagram</span>
				</a>
			</li> */}
			<li>
				<a href="https://github.com/daltlc" className="icon fa-github">
					<span className="label">GitHub</span>
				</a>
			</li>
		</ul>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Header;
