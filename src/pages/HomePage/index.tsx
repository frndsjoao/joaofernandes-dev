/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Card from '../../components/Card'
import Header from '../../components/Header'

import { Container } from './styles'

function HomePage() {
  const [langEnUS, setLangEnUS] = useState(true)

  return (
    <>
      <Header />
      <Container>
        <Card isEnglish={langEnUS} />

        <div className="links">
          <a
            href="https://github.com/frndsjoao"
            target="_blank"
            rel="noreferrer"
          >
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
          <div>
            <button type="button" onClick={() => setLangEnUS(true)}>
              en-US
            </button>
            <button type="button" onClick={() => setLangEnUS(false)}>
              pt-BR
            </button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
