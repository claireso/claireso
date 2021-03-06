import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Grid, Cell } from '@components/Grid'
import * as Icons from '@components/Icons'

const Item = styled(Grid)`
  font-size: 2.8rem;
  padding: 2rem 0;
  position relative;
`

const ProjectTitle = styled.a`
  display: block;
  font-size: 3.2rem;
  line-height: 4rem;

  &:after {
    bottom: 0;
    content: '';
    cursor: pointer;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-1rem, -50%);
    width: 1.6rem;
    height: auto;
    opacity: 0;
    transition: opacity 250ms ease-out, transform 250ms ease-out;
    fill: var(--secondaryColor);
  }

  &:hover svg {
    opacity: 1;
    transform: translate(0, -50%);
  }
`

const ProjectRole = styled.span`
  color: var(--secondaryColor);
  display: block;
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0.4rem 0 0;
`

const Project = ({ project }) => {
  return (
    <Item as="li">
      <Cell startAt="3" endAt="13">
        <Link
          as={`/p/${project.slug}`}
          href="/p/[slug]"
          scroll={false}
          passHref
        >
          <ProjectTitle>
            {project.title}
            <Icons.AngleRight />
          </ProjectTitle>
        </Link>
        <ProjectRole>{project.role}</ProjectRole>
      </Cell>
    </Item>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  })
}

export default Project
