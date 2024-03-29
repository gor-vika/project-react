import { createHashRouter } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import EpisodesPage from './pages/EpisodesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import NewsDetailPage from './pages/NewsDetailPage.jsx'
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
      },
      {
        path: 'news',
        children: [
          {
            index: true,
            Component: NewsPage
          },
          {
            path: ':slug',
            Component: NewsDetailPage
          }
        ]
      }
    ]
    },
    {
      path: '*',
      Component: NotFoundPage
    }
])