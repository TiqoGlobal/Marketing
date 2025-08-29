export const apiVersion = '2024-07-25'
export const dataset = 'production'
export const projectId = 'co9gmxrc'

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}