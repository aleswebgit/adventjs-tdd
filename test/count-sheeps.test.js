import { describe, expect, it } from 'vitest'
import { countSheeps, sheeps } from '../src/count-sheeps'

describe('countSheeps', () => {
  it('should be a function', () => {
    expect(typeof countSheeps).toBe('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => countSheeps()).toThrow()
  })

  it('should throw if parameter is not an array', () => {
    expect(() => countSheeps('asf')).toThrow()
    expect(() => countSheeps(1)).toThrow()
    expect(() => countSheeps({})).toThrow()
  })

  it('should return an array', () => {
    expect(Array.isArray(countSheeps(sheeps))).toBe(true)
  })
})