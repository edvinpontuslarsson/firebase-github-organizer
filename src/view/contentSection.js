'use strict'

const getClearedContentSection = () => {
    const contentSection = document.getElementById('content-section')
    if (contentSection.firstElementChild) {
        contentSection.removeChild(contentSection.firstElementChild)
    }
    return contentSection
}

export default { getClearedContentSection }
