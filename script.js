function scrollToAboutMe(section) {
    const sectionElement = document.getElementById(section);

    // Check if the element exists and is visible
    if (sectionElement && sectionElement.getBoundingClientRect().top) {
        const yOffset = -100; // Adjust this value to control the offset from the top
        const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}