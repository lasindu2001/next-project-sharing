import Categories from "@/components/Categories"
import LoadMore from "@/components/LoadMore"
import ProjectCard from "@/components/ProjectCard"

const Home = () => {
  return (
    <section className="flexStart flex-col paddings mb-16">
      <Categories/>
      <section className="projects-grid">
        <ProjectCard/>
      </section>
      <LoadMore/>
    </section>
  )
}

export default Home