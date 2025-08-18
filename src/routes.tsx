import { RouteObject } from 'react-router-dom'
import HomePage from '@/pages/HomePage/HomePage'
import Root from '@/pages/Root'
import AboutPage from '@/pages/AboutPage/AboutPage'
import { RouteName } from './constants/RouteName'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import VentNotePage from './pages/PlayStorePage/VentNote/VentNotePage'
import OauthPage from './pages/PlayStorePage/VentNote/OauthPage'

export const routes: RouteObject[] = [
  {
    path: RouteName.HOME,
    element: <Root />,
    children: [
      {
        path: RouteName.HOME,
        element: <HomePage />
      },
      {
        path: RouteName.PROJECTS,
        element: <ProjectsPage />
      },
      {
        path: RouteName.ARTICLES,
        element: <ArticlesPage />
      },
      {
        path: RouteName.ABOUT,
        element: <AboutPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  {
    path: RouteName.VENTNOTE_PRIVACY_POLICY,
    element: <VentNotePage />
  },
  {
    path: RouteName.VENTNOTE_OAUTH_PRIVACY_POLICY,
    element: <OauthPage />
  }
]
