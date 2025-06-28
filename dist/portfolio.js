// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Section navigation
const sections = ["about", "skills", "projects", "contact"]
let currentSectionIndex = 0

function showSection(sectionId) {
  // Update current section index
  currentSectionIndex = sections.indexOf(sectionId)

  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  // Show selected section
  document.getElementById(sectionId).classList.add("active")

  // Update navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === sectionId) {
      link.classList.add("active")
    }
  })
}

// Add click event to navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const sectionId = link.getAttribute("data-section")
    showSection(sectionId)
    mobileMenu.classList.add("hidden")
  })
})

// Previous and Next buttons
document.getElementById("prev-section").addEventListener("click", () => {
  let newIndex = currentSectionIndex - 1
  if (newIndex < 0) newIndex = sections.length - 1
  showSection(sections[newIndex])
})

document.getElementById("next-section").addEventListener("click", () => {
  let newIndex = currentSectionIndex + 1
  if (newIndex >= sections.length) newIndex = 0
  showSection(sections[newIndex])
})

// Initialize skill bars animation
function animateSkillBars() {
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    const width = bar.getAttribute("data-width")
    bar.style.width = width
  })
}

// Profile image placeholder click handler
document.getElementById("profile-placeholder").addEventListener("click", () => {
  alert("To replace this with your photo, edit the HTML and replace the placeholder with your image.")
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showSection("about")
  animateSkillBars()
})
