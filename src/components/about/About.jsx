import React from 'react';
import { CreateLinks, CreateRoutes } from '../../utils/routesUtils';

const About = ({ routes }) => {
  const mockRedirectAbout = [{
    path: '/about/mbb',
    name:'Générer redirection'}]
  return (
  <>
    <h2>About</h2>
    <CreateLinks routes={routes} />
    <CreateLinks routes={mockRedirectAbout} />
    <CreateRoutes routes={routes} />
  </>
)
  }

export default About
