import imageHero from './hero.jpg'
import thumbnail from './thumbnail.jpg'
import testimonial from './review.json'
import data from './content.json'

export const caseStudy = {
  ...data,
  thumbnail: thumbnail,
  image: { src: imageHero },
  date: data.year + '-' + data.month,
  service: data.services.join(', '),
  testimonial,
}

export const metadata = {
  title: `${data.client} Case Study`,
  description: data.description,
}
