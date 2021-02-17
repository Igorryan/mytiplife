import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { uploadFileToS3 } from 'services/s3'

export default async function downloadComponentInPDF(
  Component: HTMLElement
): Promise<string> {
  let result

  await html2canvas(Component, { allowTaint: true, useCORS: true }).then(
    async (canvas) => {
      window.scrollTo(0, 0)
      const componentWidth = Component.offsetWidth
      const componentHeight = Component.offsetHeight

      const orientation = componentWidth >= componentHeight ? 'l' : 'p'

      const pdf = new jsPDF({
        orientation,
        unit: 'px'
      })

      pdf.internal.pageSize.width = componentWidth
      pdf.internal.pageSize.height = componentHeight

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        componentWidth,
        componentHeight
      )

      alert(`PDF criado`)

      const output = pdf.output('arraybuffer')

      const response = await uploadFileToS3(
        output,
        `pdfs/${new Date().getTime()}.pdf`
      )

      result = response
    }
  )

  return String(result)
}
