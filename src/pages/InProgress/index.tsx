/* eslint-disable react/jsx-no-target-blank */
// import logo from '../../assets/logo.svg'

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

import { Container } from './styles'

function InProgress() {
  return (
    <Container>
      <h2>&lt;New site is coming up... /&gt;</h2>

      <div>
        <a href="https://github.com/frndsjoao" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/frnds-joao/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/frndsjoao/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </Container>
  )
}

export default InProgress
