const textArea = document.querySelector('span.text');
const text = 'Lorem ipsum dolor sit amet lorem. Cras ornare dapibus. Aenean vel lectus. Phasellus ut ante. Ut vestibulum tincidunt leo lacus, elementum nunc. Suspendisse potenti. Cras orci. Proin ornare quam. Praesent ante. Quisque vehicula enim est dolor, dictum convallis. Donec adipiscing eget, aliquet molestie. Quisque porta tincidunt. Pellentesque eget leo lacus, euismod pede, molestie a, faucibus orci imperdiet dignissim, libero mollis tempor auctor, sapien massa vel quam. Vestibulum ante sit amet, consectetuer congue risus. Aliquam tempus rutrum ac, suscipit luctus. Phasellus pulvinar interdum, dolor sit amet enim. Duis hendrerit eget, neque. Phasellus lorem velit ac viverra est diam sed neque. Etiam nibh. Morbi cursus dignissim nibh. Maecenas eu nibh. Morbi non sem laoreet ante ipsum sit amet pede. Lorem ipsum primis in wisi. Praesent elit sed lorem nec magna. Mauris eget leo vulputate at, feugiat ac, vulputate tempor ac, accumsan at, mollis nibh vel dui sit amet, massa. Maecenas facilisis, ante eget dolor nulla, accumsan at, porttitor vel, eros. Mauris arcu. Vestibulum fermentum. Vivamus eget enim. Duis pretium justo. Vestibulum commodo pulvinar odio. Vestibulum ante a massa sit amet, consectetuer adipiscing.';


let currentText = '';

function lettering() {
    if (currentText != text) {
        setTimeout(function () {
            currentText += text[currentText.length];
            textArea.textContent = currentText;
            lettering();
        },200)
        
    } else {
        return
    }
}
lettering();
// setTimeout(lettering, 1000);

console.log(textArea.textContent);