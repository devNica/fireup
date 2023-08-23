import { Router } from 'express'
import testRouter from './test.router'

export interface APIModel {
  path: string
  controller: Router
}

export default function api (): APIModel[] {
  return [
    { path: '/test', controller: testRouter }
  ]
}
