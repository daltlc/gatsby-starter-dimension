import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import data from '../data/projects.json';
import resume from '../images/Dalton_Carr_12_10.png';
import me from '../images/me_pizza.jpg';

import vueIcon from '../images/vue.png';
class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			/>
		);

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
			>
				<article
					id="intro"
					className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout
						? 'timeout'
						: ''}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Resume</h2>
					<img className="resume" src={resume} />

					{close}
				</article>

				<article
					id="work"
					className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout
						? 'timeout'
						: ''}`}
					style={{ display: 'none' }}
				>
					<div>
						{data.Projects.map((projects, i) => {
							return (
								<div key={i}>
									<h1>{projects.title}</h1>

									<span className="image main">
										<img src={require('../images/' + projects.image)} alt="" />
									</span>
									{/* <p>{projects.para1}</p> */}
									<p className="skills" dangerouslySetInnerHTML={{ __html: projects.para2 }} />
									<button
										onClick={() => {
											let url = projects.url;
											window.location.replace(url);
										}}
									>
										Visit Site
									</button>
									<hr />

									{/* {projects.map(function(skill, i) {
                      return (
                        <div key={i}>
                          <img className="skill-icon" alt="" src={skill.src}></img>
                        </div>
                       )
                    })}  */}
								</div>
							);
						})}
					</div>
					{close}
				</article>

				<article
					id="about"
					className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout
						? 'timeout'
						: ''}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">About</h2>
					<div className="about_struc">
						<span className="image main">
							<img src={me} alt="" />
						</span>
						<p>
							Hello and welcome! My name is Dalton. I am a Front End Developer out of Seattle, WA. I
							strive to create originial and stunning web expereinces using the most modern technologies.
							I love to dabble in many things including various art forms, videography and video game
							development.
						</p>
						<p />
					</div>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout
						? 'timeout'
						: ''}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Contact</h2>
					<form method="post" action="#">
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="4" />
						</div>
						<ul className="actions">
							<li>
								<input type="submit" value="Send Message" className="special" />
							</li>
							<li>
								<input type="reset" value="Reset" />
							</li>
						</ul>
					</form>
					<ul className="icons">
						<li>
							<a href="https://twitter.com/HuntaroSan" className="icon fa-twitter">
								<span className="label">Twitter</span>
							</a>
						</li>
						<li>
							<a href="https://codebushi.com" className="icon fa-facebook">
								<span className="label">Facebook</span>
							</a>
						</li>
						<li>
							<a href="https://codebushi.com" className="icon fa-instagram">
								<span className="label">Instagram</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/codebushi/gatsby-starter-dimension" className="icon fa-github">
								<span className="label">GitHub</span>
							</a>
						</li>
					</ul>
					{close}
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired
};

export default Main;
