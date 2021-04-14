import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Web & Mobile Developer | Writer</SubTitle>
            </div> 
            <div>
              <Title> Hey there! </Title>
              <Text>Have you ever loved something so much that you wanted to take it apart, analyze it, and then rebuild it, piece-by-piece, into something entirely new — like some sort of <b className="text-primary lined-link">alchemy?</b></Text>
              <Text>That alchemist is me. I live for learning about the ins-and-outs of crafting things, whether in software, prose, artistry, or any other form of media. To create is my purpose, and to enhance is my philosophy.</Text>
              <Text>I cannot promise magic, nor can I guarantee sorcery. Still, if a productive mind and some degree of expertise are of interest to your goals, feel free to loose your carrier pigeons to one of the contact methods listed on this page. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
