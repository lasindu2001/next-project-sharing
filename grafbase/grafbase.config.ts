import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()

const user = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
  projects: g.string().list().optional(),
})

const project = g.type('Project', {
  title: g.string(),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(), 
  githubUrl: g.url(), 
  category: g.string(),
  createdBy: g.ref(user),
})

export default config({
  graph: g,
})
