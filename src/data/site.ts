// Central place for contact/social info so Navbar, Footer, Home, and Contact
// pages never drift out of sync. Update here once, it updates everywhere.
export const site = {
  name: 'Ravibhushan Kumar',
  title: 'Staff Software Engineer',
  location: 'Bangalore, India',
  email: 'ravibhushankumarsonu@gmail.com',
  phone: '+91 8603436230',
  linkedIn: 'https://www.linkedin.com/in/ravibhushankumarsonu',
  github: 'https://github.com/ravibhushankumarsonu',
  // TODO: drop your real résumé PDF at public/resume.pdf — this link will
  // start working the moment the file exists.
  resumeUrl: '/resume.pdf',
}

export const mailtoHref = `mailto:${site.email}`
export const telHref = `tel:${site.phone.replace(/[^+0-9]/g, '')}`
