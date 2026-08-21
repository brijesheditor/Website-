(function() {
    const trollPage = '404 error.html';

    if (window.location.href.includes(trollPage)) {
        return;
    }

    const detector = function() {

        const threshold = 100; 
        
        const startTime = new Date();
 
        debugger; 
        
        const endTime = new Date();
        
        const timeDifference = endTime.getTime() - startTime.getTime();
        

        if (timeDifference > threshold) {
            // Pakda gaya!
            
            console.clear();
            
            window.location.href = trollPage;
        }
    };

    setInterval(detector, 1000);

    let devtoolsOpen = false;
    const checkSize = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 150;
        const heightThreshold = window.outerHeight - window.innerHeight > 150;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                window.location.href = trollPage;
            }
        } else {
            devtoolsOpen = false;
        }
    };

    window.addEventListener('resize', checkSize);
})();