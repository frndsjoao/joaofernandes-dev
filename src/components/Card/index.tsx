/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import profileImg from '../../assets/profile.jpg'
import { Container, Content, Line } from './styles'

interface ICardProps {
  isEnglish: boolean
}

function Card({ isEnglish }: ICardProps) {
  const [languageEn, setLanguageEn] = useState(true)

  useEffect(() => {
    if (isEnglish) {
      setLanguageEn(true)
    } else {
      setLanguageEn(false)
    }
  }, [isEnglish])

  return (
    <Container>
      <img src={profileImg} alt="João Pedro Profile" />

      {languageEn ? (
        <Content>
          <h1>Hi, I'm João Pedro Assunção</h1>
          <h2>Front-end Developer</h2>
          <Line />
          <p>
            I'm 25 years, brazilian and graduated in Systems Information.
            Fascinated with technology since I was a child, in 2020 I started to
            study programming, finding myself in web development and currently
            working as a Junior Full-Stack developer at Universalprev, a
            Brazilian company.
          </p>
          <p>
            My currrent stacks and technologies are Javascript, ReactJS,
            Next.js, Typescript, MySQL and I know a little bit of NodeJS and
            React Native too.
          </p>
        </Content>
      ) : (
        <Content>
          <h1>Olá, eu sou João Pedro Assunção</h1>
          <h2>Desenvolvedor Front-end</h2>
          <Line />
          <p>
            Tenho 25 anos, sou de Minas Gerais e sou graduado em Sistemas de
            Informação. Apaixonado por tecnologia desde pequeno, comecei a
            estudar programação em 2020, me encontrei no desenvolvimento web e
            atualmente trabalho como desenvolvedor Full-Stack Jr na
            Universalprev, empresa especializada em sistemas de previdência
            privada.
          </p>
          <p>
            Atualmente minhas stacks são Javascript, ReactJS, Next.js,
            Typescript, MySQL e tenho conhecimento básico em NodeJS e React
            Native.
          </p>
        </Content>
      )}
    </Container>
  )
}

export default Card
