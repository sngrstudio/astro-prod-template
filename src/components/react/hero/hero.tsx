import type { FC } from 'react'
import style from './hero.module.scss'

const Hero: FC = () => (
  <section className="hero min-h-screen">
    <div className="hero-content">
      <div className="max-w-md">
        <h1 className={style.h1}>A template for production</h1>
        <p className="text-center mb-2">
          The template is created using Astro and a pinch of React. Batteries
          included: SASS, TailwindCSS + DaisyUI, PostCSS with Autoprefixer and
          Font Magician plugin.
        </p>
        <p className="text-center italic text-sm">
          a{' '}
          <a className="link-hover" href="http://sngr.studio/">
            SNGR Studio
          </a>{' '}
          tool. (c) {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </section>
)

export default Hero
