# Hard Drivers - Testing Documentation

The Main README documentation can be found under [README.md](README.md)

[View website on GitHub Pages](https://fadam430.github.io/game-square/)

# Table of contents

>1. [User Story Testing](#user-story-testing)
>2. [Feature Testing](#feature-testing)
>3. [Browser Testing](#browser-testing)
>4. [Automated Testing](#automated-testing)
>5. [Significant Bugs](#significant-bugs)

>6. [Other Technical Difficulties](#other-technical-difficulties)

# User Story Testing

## As a visitor to the website, I want to know what your website does.

* On arrival to the _"Home"_ page, the user is presented with the name of the Website.
* The color scheme consistent with the content of the site, the images, and the footer's text, icons, and style. 
* Two headings are visible on the _"Home"_ page which are clearly convey of the business. 
* Main heading has a icon to give users an emotional response and when you move your cursor over the heading it's start glowing.
* The concept and interface is simple, easy to use and navigate, and is responsive on all devices and viewports.

## As a potential customer, I want to know what services you provide.

* If a user requires further information with regards to the services provided by the business, they have access to link to the Footer.
* The _"Sell/Trade"_ page have "How it's works" button that show you selling or trading points of the website. 
* While maintaining the websites minimalistic design, each section offers a enough amount of detail.
* Each section contains a relevant image, which once again dynamically resizes depending on viewport.

## As an interested customer, I want to know how much the game costs.

* The _"Games"_ page you can discover what games do you like to buy or trade.
* Each game card has a price tag and a link _"Sell/Trade"_ page, where you can buy or either trade your old game.


## As a convinced customer, I want to be able to easily make an enquiry.
    
* The "Sell/Trade" page allows a user to engage with the website through filling in a simple form.

* The _"Sell/Trade"_ page is ultimately the most important page on the site. It is accessible within the Navbar, and  _"Game"_ page each card has a link.

* The formatting and style are the same as the _"Sell/Trade"_ link to ensure consistency. 
* Form submission is validated prior to submission, and users are alerted to any incomplete fields if necessary. 
* On valid completion of the form, the user is presented with a thank you _"success"_ page, informing them of the next steps, and the form is reset.

# Feature Testing

Testing the Features was completed manually, with each feature being tested as described below.

## Navigation bar (Navbar)

Unless specifically stated, all functionality for the Navbar was tested on every page.

* Visit all links within the navbar in every possible order to ensure they are functional and route correctly:
    * Home -> Games / Home -> Sell/trade 
    * Games -> Home / Games -> Games
    * Sell/trade -> Home / Sell/trade -> Games
    * Games -> logo(home) / Sell/Trade -> logo(home)
    * Success -> Home

* Click the main 'logo' on each page, to ensure it diverts the user back to the "Home" page.
* Make sure the height of the Navbar is a consistent height across each page.  
* All internal navigational links are not opened externally.
* Any relevant active link is highlights depending on user's location on site.
* On small vertical viewport, ensure the Navbar maintains its position sticky when the page's Viewport Control is scrollable.
* When adjusting the horizontal viewport, ensure the "logo" and links reposition themselves dynamically to maintain their central position on the page.
* On large horizontal viewport, ensure the Navbar's background image zooms in/out accordingly when increasing/decreasing horizontal viewport. 
* On small horizontal viewport, ensure the Navbar collapses, hides the row of navigation links, and provides the sandwich icon.
* When the collapsed Navbar is displayed, ensure that interacting with the sandwich icon displays or hides the dropdown navigational links appropriately. 
* When the collapsed Navbar is displayed, ensure the dropdown (when displayed) does close when the user interacts with another part of the current page.
* When the collapsed Navbar is displayed, ensure the dropdown does not overflow onto the Viewport Control/content of the page.
* The navigation links display the appropriate effects when hovered (desktop) over:
    * The link produces the 'glow' effect, and changes from inactive (black) to active (lightblue).
    * If the link is already in an active state, it only displays underscore effect and not change color.
* The navigation links display the appropriate effects when touched (mobile/tablet).
    * Background change a highlight color.

## Footer

All functionality for the Footer was tested on every page.

* On each page, ensure the Social links open to the correct webpage, and are opened externally.   
* The Footer appearance is consistent across all pages, and maintains the same height. 
* Footer elements maintain their position through navigation of the site.
* When adjusting the horizontal viewport, ensure the Footer elements reposition themselves dynamically to maintain equal distance, and central position within their containers.
* On small horizontal viewport, ensure the Social links stick together, and maintain their functionality. 
* No visual effects are produced when the Social Links are hovered over with the mouse (desktop).
* Hovering (desktop) over the Submit button produces the 'glow' effect, and changes from lightblue to neon lime green.
* No visual effects are produced when the Social links are touched (mobile/table).
* The Submit button produces the 'glow' effect, and changes from lightblue to neon lime green when touched (mobile/table).


## Package Table

* Modal Design ("How it's works"):
     
    * The content is displayed centrally, and that all text is clear and visible.
    * On larger viewport, the table fits comfortably on the page, and does not require unnecessary scrolling.


## Sell/Trade/Offer Form

* Make sure each input is correctly grouped into its relevant fieldset.

* Ensure tree radio buttons work and show the right content.
* Each input's label is clear and distinguishable, and highlights the correct field on click (desktop)/touch (mobile/tablet).
* The form's size is equally proportionate.
* The form's viewable on smaller vertical viewport, and can scroll through the content appropriately.
* The width of the fieldset and form inputs adjust dynamically when changing the horizontal viewport.
* Tabbing through the Sell/Trade/Offer Form correctly navigates through the form.
    

* On any invalid input entry, the default browser validation messages are presented. 
* Full Name field accepts any value, but requires at least one character to be deemed valid.
* Email Address field does not accept input that is not in the format of an email address.
* On entry of an invalid email address, the default email validation message appears.
* Game name field accepts any value.

* Platform and Condition dropdown menu working and show "select" title and required to fill the field.
* Trade-form Trade in dropdown menu work working and show "select" title and required to fill the field.

* Offer dropdown menu work working and show "select" title and required to fill the field.
* Offer price field accepts any numbers, but requires at least one number.
    * No validation about the number either you can put negative or zero value in.
* The form cannot be submitted without a valid price value entered.
* On valid form submission that the Thank You model is presented, and that the form is cleared in full.  

## Modals

These tests applied to  (_"How it's works"_  Button):

* The modal is displayed centrally, with the appropriate Header / Body / Footer.
* The modal's "close" button functions as intended, and closes the modal.
* The modal can be dismissed by clicking (desktop) and touching (phone/tablet) out of the modal area.
* Pressing the escape key closes the modal.
* The content of the modal fits appropriately.

## Viewport Control and Responsive Layout / Design

The testing for these sections were combined. While the implementation of these functions are different, and serve different purposes, the testing process for each section coincided with each other and therefore
have been discussed together.

* On all pages, the header and footer remains static, and the content in-between (i.e the Viewport Control) is dynamic.
* On all pages where the content fits within the Viewport Control, ensure the positioning of the content remains proportionate, and scales equally and proportionately.
* On mobile devices (or on small horizontal viewport), the Navbar collapses, providing a taller vertical Viewport Control. 

**Home Page**:
* On all viewports, ensure the Game Square statement appears on its own row.
* On all viewports, carousel working and show appropriate image and automatic playing.

**Games Page**:
* On all viewports, ensure that each card appropriate hight and width.
* On all viewports, ensure each section/row resizes proportionately (as can be seen from the respective size of the image on each row.)
* On all viewports, each section is proportionately spaced according to the size of the vertical viewport. 
* On all viewports, the section containers the Viewport Control is scrollable, and that all content is visible.   

**Enquire Page**:
* On all viewports, ensure that the fields are visible, and are container within equal column widths.
* On all viewports, ensure that the fields are resize dynamically when the horizontal viewport is adjusted.
* On medium to small viewport, ensure the Form's fieldset and input sections resize dynamically when the horizontal viewport is adjusted.

# Browser Testing

Cross-Browser compatibility was tested via applying the methodology described above within each browser detailed below.

## Chrome/Firefox/Edge/Brave

All functionality worked as intended.

## Safari

As I do not have access to a device which is compatible with Safari.

# Automated Testing

Automated testing was completed via third party applications, in order to assess the markdown syntax and logical application of the languages/frameworks used. 

1. **[W3 Markup Validation](https://validator.w3.org/) - HTML Validation**
    * The project's HTML was validated using the automated W3 Markup Validator. 
    * The error identified _"Sell/Trade"_ page using this validator was the following: 
        * Error:Duplicate ID full-name 
        * Error: Duplicate ID email
    * When I created three different form I forget to change full name and email ID's right for the form.
    * Solution: I changed full name and email ID right for the form.

2. **[W3 Jigsaw](https://jigsaw.w3.org/css-validator/) - CSS Validation**
    * The project's CSS was validated using the automated W3 Jigsaw Validator.
    * No error founds.

3. **[Google Lighthouse](https://developers.google.com/web/tools/lighthouse)** - Accessibility, Performance, Progressive Web Apps, and Best Practices Audit:

    **Home**  
    ![Home Lighthouse Score](/assets/images/screenshoots/mobil_home.PNG)
    * First Contentful Paint and Largest Contentful Paint
    * Home page carousel pictures bit size is to big.
    
    **Games**  
    ![Games Lighthouse Score](/assets/images/screenshoots/mobil_games.PNG)
    * First Contentful Paint and Largest Contentful Paint
    * Cards images is to big that's make a loading screen to low. 

    **Sell/Trade form**  
    ![Sell/Trade Lighthouse Score](/assets/images/screenshoots/mobil_form.PNG)
    * First Contentful Paint and Largest Contentful Paint
    * H2 element is to big that is slowing down the loading speed.


# Significant Bugs

1. **Making image fully responsive and aesthetically fluid for different viewports**
    * When first implementing the concept for the Viewport Control and responsive images, I started with the Carousel on the _"Home"_ page. 
    * I first attempted I used impropriate image size, and full screen mode in laptop images was to pixeled and not showing middle of the carousel.
    * Then attempted to download better quality picture and use Bootstrap justify content to make it center.

2. **The Games page cards images don't want to be middle of the cards**
    * Firstly all images was oriented in left this come with Bootstrap. 
    * I tried every align property, but it doesn't help. After I found Bootstrap documentation about a "d-flex" and "justify-content-center" and this make 
    the images and content middle of the card.

3. **Sell/Trade page form has three different type**
    * In _"Sell/Trade"_ page with three radio buttons. Each of them need to trigger different form.
    * First I made one form and different section to be in sight when you click a radio button. It was fine when you click each radio button content changed.
    But when you click the "Submit" button lot of error appear in console. When you click the "Submit" button (all field has required attribute), If you select 
    the Sell radio button you can't submit it because all field need to be filled.
    *Solution: I made three different form instead of one. When you click the radio button now the right form must be visible.

---

[Click here](https://GitHub.com/BAK2K3/hard-drivers/blob/master/README.md) to return to the main README.md.