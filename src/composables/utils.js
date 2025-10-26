/** @format */

export const baseUrl = window.origin

export function downloadFile(fileLocation, fileName) {
  const link = document.createElement('a')
  link.href = fileLocation
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function downloadCurriculum() {
  const fileLocation = `${baseUrl}/docs/CV_Isabella_Melo.pdf`
  const fileName = 'CV_Isabella_Melo.pdf'
  downloadFile(fileLocation, fileName)
}
