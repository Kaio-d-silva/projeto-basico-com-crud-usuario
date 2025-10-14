import { HttpResponse } from '../protocols'
import { ServerError } from '../errors'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const noContet = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (data: any): HttpResponse => ({
  statusCode: 401,
  body: data
})

export const forbidden = (data?:any): HttpResponse => ({
  statusCode: 403,
  body: data
})

export const notFount = (data:any): HttpResponse => ({
  statusCode: 404,
  body: data
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})