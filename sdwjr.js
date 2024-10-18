document.getElementById('contact-form').addEventListener('submit', 
    function(event) { event.preventDefault();
        alert('Contact form submitted!'); }); 
        document.getElementById('signup-form').
        addEventListener('submit', function(event) 
        { event.preventDefault(); alert('Sign up form submitted!'); });
         document.querySelector('.call-to-action').addEventListener('click', 
            function() { alert('Calling...'); });
            // Function is called, the return value will end up in x
// Just testing this
document.getElementById("susu").style.color ="red";

//just testing this
document.getElementById("sdwjr").innerHTML = "Click this link";

// Just testing this document
document.getElementById("sdwsr").style.color = "red";

// Function to apply styles to the body
function applyBodyStyles() {
    const body = document.body;
    body.style.margin = auto;
    body.style.padding = 0;
    body.style.fontfamily = "Arial, sans-serif";
    body.style.color = "#333";
}
// Function to apply styles to header
Function applyHeaderStyles() {
  const header = document.querySelector('header');
  header.style.background = "#4caf50";
  header.style.color = "white";
  header.style.padding = "10px 20px";  
}
// Function to apple style to paragraphs
Function applyParagraphStyles() {
 const paragraph = document.querySelectorAll('p');
 paragraphs.ForEach(p => { 
    p.style.border = "1px solid #4CAF50";
 });
    
}
//Function to apply styles to nav
function applyNavStyles() {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
        item.style.display = "inline";
        item.style.marginRight = "20px";
        

    });

}
//Function to apple styles to hero section
function applyHeroStyles() {
    const hero = document.querySelector('hero');
    hero.style.background = "#f4f4f4";
    hero.style.textAlign = "center";
    hero.style.padding = "50px 20px";
}
// Function to apply styles to images
function applyImageStyles() {
    const images = document.querySelectorAll ( '.work-gallery img');
    images.forEach(img => {
        img.style.width = "30%";
        img.style.height = "auto";
        img.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";


    
 });
}
//Function to apply styles to content section
function applyContentStyles() {
    const content = document.querySelector('.content');
    content.style.justifyContent = "space-around";
    content.style.padding = "20px";
    content.style.textingAlign = "center";

}
// Function to apply styles to textbox
function applyTextboxStyles() {
    const textboxes = document.querySelectorAll('.textbox');
    textboxes.forEach(box => {
      box.style.border = "1px solid #ccc";
      box.style.padding = "10px";
      box.style.width = "30px";
      box.style.boxShadow = "2px 2px 10px rgba(0,0,0,0)";
      box.style.textAlign = "center";
    });
}
// Function to apply styles to footer
function applyFooterStyles() {
    const footer = document.querySelector('footer');
    footer.style.textAlign = "center";
    footer.style.background = "#333";
    footer.style.color = "white";
    footer.style.padding = "10px 0";
}

// Function to apply styles to call-to-action buttons
function applyCallToActionStyles() {
    const buttons = document.querySelectorAll('.call-to-action');
    buttons.forEach(button => {
        button.style.background = "#4CAF50";
        button.style.color = "white";
        button.style.padding = "10px 15px";
        button.style.border = "none";
        button.style.cursor = "pointer";
    });
}
// JavaScript for handling header actions

// Search functionality
document.querySelector('.search-link').addEventListener('click', function() {
    let searchQuery = prompt('What are you looking for?');
    if (searchQuery) {
        alert('You searched for: ' + searchQuery);
        // Implement actual search logic here
    }
});

// Shopping cart functionality (basic)
document.querySelector('.cart-link').addEventListener('click', function() {
    alert('Your cart is empty.');
    // Implement actual cart logic here
});
// Javascript for Dynamic Styling
document.getElementById('')




// Call all style functions
applyBodyStyles();
applyHeaderStyles();
applyParagraphStyles();
applyNavStyles();
applyHeroStyles();
applyImageStyles();
applyContentStyles();
applyTextboxStyles();
applyFooterStyles();
applyCallToActionStyles();



