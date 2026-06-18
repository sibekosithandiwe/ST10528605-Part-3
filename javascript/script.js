// CONTACT FORM VALIDATION

function validateContactForm() {

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("ename").value;
    let subject = document.getElementById("subj").value;
    let message = document.getElementById("message").value;

    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please complete all fields.");
        return false;
    }

    alert("Thank you! Your message has been sent successfully.");

    return false;
}


// VOLUNTEER FORM VALIDATION

function validateVolunteerForm() {
    alert("Thank you for volunteering with Blue Bees Recovery!");
    return false;
}


// SEARCH FEATURE

function searchContent() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input.includes("beekeeping")) {

        alert("Beekeeping programmes can be found on the Programs & Services page.");
    }

    else if(input.includes("volunteer")) {

        alert("Volunteer opportunities can be found on the Get Involved page.");
    }

    else if(input.includes("contact")) {

        alert("Contact information is available on the Contact page.");
    }

    else {

        alert("No matching content found.");
    }
}
// NEWSLETTER FORM HANDLER

function handleNewsletterSubmit() {

    let email = document.getElementById("newsletterEmail").value;

    if (
        email === ""

    ) {
        alert("Please enter your email address.");
        return false;
    }

    alert("Thank you for subscribing to the Blue Bees Recovery newsletter!");

    document.getElementById("newsletterEmail").value = "";
}

// DYNAMIC COPYRIGHT YEAR

window.onload = function() {

    let year = document.getElementById("year");

    if(year){
        year.innerHTML = new Date().getFullYear();
    }

}
function openLightbox(imageSrc) {

    document.getElementById("lightbox-img").src = imageSrc;

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}
