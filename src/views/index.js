import { lazy } from 'react'

const Index = lazy(() => import(/* webpackChunkName: "home" */ 'views/home/index'))
const AuthError = lazy(() => import(/* webpackChunkName: "home" */ 'views/home/AuthError'))
const TextGrain = lazy(() => import(/* webpackChunkName: "image" */ 'views/image/text-grain'))
const ImageGrain = lazy(() => import(/* webpackChunkName: "image" */ 'views/image/image-grain'))

export default {
  Index, AuthError, TextGrain, ImageGrain
}