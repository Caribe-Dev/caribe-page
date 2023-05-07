import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { Community } from '@/components/Community'
import { Avatar } from '@/components/Avatar'

import allCommunities from '@/all-communities'
import allOrganizers from '@/all-organizers'

const { communities } = allCommunities
const { organizers } = allOrganizers

export default function Home() {
  return (
    <>
      <Hero />
      <section id='communities' className='pt-20 pb-32'>
        <Layout>
          <h2 className='text-white highlight'>Comunidades</h2>
          <div className='flex justify-evenly items-center pt-6'>
            {
              communities.map(({ name, logo, website }) => {
                return (
                  <Community
                    key={website}
                    name={name}
                    website={website}
                    logo={logo}
                  />
                )
              })
            }
          </div>
        </Layout>
      </section>
      <section id='organizers' className='bg-white pt-10 pb-20'>
        <Layout>
          <h2 className='highlight text-primary' style={{ '--highlight-text': '#005d6866' }}>Organizadores</h2>
          <div className='flex flex-wrap justify-evenly items-center pt-10'>
            {
              organizers.map(({ name, image, social }) => {
                return (
                  <div className='flex justify-center basis-[25%] mb-12' key={name}>
                    <Avatar name={name} image={image} social={social} />
                  </div>
                )
              })
            }
          </div>
        </Layout>
      </section>
    </>
  )
}
