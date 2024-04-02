import { createHashRouter } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import EpisodesPage from './pages/EpisodesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import EpisodeDetailPage from './pages/EpisodeDetailPage.jsx'
import SectionFeedback from './components/SectionFeedback.jsx'

export default createHashRouter([
  
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
        children: [
          {
            
            Component: SectionFeedback
          }
        ]
      },
      {
        path: 'episodes',
        children: [
          {
            index: true,
            Component: EpisodesPage
          },
          {
            path: ':id',
            Component: EpisodeDetailPage
          }
        ]
      },
      {
        path: 'about',
        Component: AboutPage
      }
    ]
    },
    {
      path: '*',
      Component: NotFoundPage
    }
])