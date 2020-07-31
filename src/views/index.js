import { lazy } from 'react'
import 'element-theme-default'

const Index = lazy(() => import(/* webpackChunkName: "home" */ 'views/home/index.jsx'))
const AuthError = lazy(() => import(/* webpackChunkName: "home" */ 'views/home/AuthError.jsx'))
const TextGrain = lazy(() => import(/* webpackChunkName: "image" */ 'views/image/text-grain.jsx'))
const ImageGrain = lazy(() => import(/* webpackChunkName: "image" */ 'views/image/image-grain.jsx'))
const HcHistogram = lazy(() => import(/* webpackChunkName: "hc" */ 'views/hc/histogram.jsx'))
const PieGraph = lazy(() => import(/* webpackChunkName: "hc" */ 'views/hc/pieGraph.jsx'))
const ClipPath = lazy(() => import(/* webpackChunkName: "hc" */ 'views/hc/clip-path.js'))
const BaseShape = lazy(() => import(/* webpackChunkName: "canvas" */ 'views/canvas/base-shape.js'))

export default {
  Index, AuthError, TextGrain, ImageGrain, HcHistogram, PieGraph,
  ClipPath, BaseShape
}