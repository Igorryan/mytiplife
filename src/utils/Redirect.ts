function Redirect(route: string) {
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    window.location.href = `/${route}`
  }
}

export default Redirect
