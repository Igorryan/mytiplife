import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function downloadComponentInPDF(Component: HTMLElement) {
  html2canvas(Component).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    pdf.addImage(imgData, 'PNG', 0, 0, 150, 0)
    pdf.save('download.pdf')
    alert(pdf)
  })
}
