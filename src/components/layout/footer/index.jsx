import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Let's write the future together. </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
                        <a className="text-primary lined-link" href="https://github.com/MarquisLP/portfolio_website" target="_blank">Source code for this website</a>
					</div>
					<div className="box">
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()} {data.SiteAuthor} | Built using {` `}
								<a className="text-primary lined-link" href="https://www.gatsbyjs.org">Gatsby</a>{" "}
                            </span>
							| Template by Abdelali Dahir </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;