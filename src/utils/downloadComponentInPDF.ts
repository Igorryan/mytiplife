import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { uploadFileToS3 } from 'services/s3'

export default async function downloadComponentInPDF(
  Component: HTMLElement
): Promise<string> {
  let result

  await html2canvas(Component, {
    allowTaint: true,
    useCORS: true
  }).then(async (canvas) => {
    window.scrollTo(0, 0)
    setTimeout(async () => {
      const componentWidth = Component.offsetWidth
      const componentHeight = Component.offsetHeight

      const orientation = componentWidth >= componentHeight ? 'l' : 'p'

      const pdf = new jsPDF({
        orientation,
        unit: 'px'
      })

      alert('Tentando capturar URL do canvas')
      const url = canvas.toDataURL('image/png')
      alert('Conseguiu')

      alert(url)
      if (!url) return

      pdf.internal.pageSize.width = componentWidth
      pdf.internal.pageSize.height = componentHeight

      pdf.addImage(url, 'PNG', 0, 0, componentWidth, componentHeight)

      const output = pdf.output('arraybuffer')

      const response = await uploadFileToS3(
        output,
        `pdfs/${new Date().getTime()}.pdf`
      )

      result = response
    }, 200)
  })

  return String(result)
}
