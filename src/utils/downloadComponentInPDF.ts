import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default async function downloadComponentInPDF(Component: HTMLElement) {
  await html2canvas(Component).then((canvas) => {
    const componentWidth = Component.offsetWidth
    const componentHeight = Component.offsetHeight

    const orientation = componentWidth >= componentHeight ? 'l' : 'p'

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      unit: 'px',
      orientation,
      format: [componentHeight / 1.78, componentWidth / 1.78]
    })
    pdf.addImage(imgData, 'PNG', 0, 0, 0, 0)
    pdf.save('downlddoad.pdf')
  })
}
