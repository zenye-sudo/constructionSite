    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainMenu = document.querySelector('.main-menu');
        const body = document.body;

        // Toggle menu when clicking hamburger
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            body.classList.toggle('menu-open');
            mainMenu.style.display = body.classList.contains('menu-open') ? 'block' : 'none';
            document.getElementsByClassName("top-nav-container")[0].style.display="none";
            document.getElementsByClassName("company-name")[0].style.display="none";

            //test end
            if (!body.classList.contains('menu-open')) {
                document.getElementsByClassName("top-nav-container")[0].style.display="flex";
                // alert("close");

            document.getElementsByClassName("company-name")[0].style.display="block";
            if(document.getElementsByClassName("showHide").length>0){
                for(var i=0;i<document.getElementsByClassName("showHide").length;i++){
                    document.getElementsByClassName("showHide")[i].style.display="none";
                }
            }
            }else{
            // alert("open");
            //test start
            // const mainMenu=document.getElementsByClassName("main-menu")[0];
            const newListItem = document.createElement('li');
             const newListItem1 = document.createElement('li');
             const newListItem2 = document.createElement('li');
             const newListItem3 = document.createElement('li');
             newListItem.classList.add("showHide");
             newListItem1.classList.add("showHide");
             newListItem2.classList.add("showHide");
             newListItem3.classList.add("showHide");

             const link = document.createElement('a');
             const link1 = document.createElement('a');
             const link2 = document.createElement('a');
             const link3 = document.createElement('a');
             link.href = '会社概要.html';
             link.textContent = '会社概要';
             newListItem.appendChild(link);
             link1.href = 'アクセス.html';
             link1.textContent = 'アクセス';
             newListItem1.appendChild(link1);
             link2.href = '新着情報.html';
             link2.textContent = '新着情報';
             newListItem2.appendChild(link2);
             link3.href = 'お問い合わせ.html';
             link3.textContent = 'お問い合わせ';
             newListItem3.appendChild(link3);
             // Append the new <li> to the <ul>
             mainMenu.appendChild(newListItem);
             mainMenu.appendChild(newListItem1);
             mainMenu.appendChild(newListItem2);
             mainMenu.appendChild(newListItem3);
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.main-nav') && !e.target.closest('.menu-toggle')) {
                if (body.classList.contains('menu-open')) {
                    body.classList.remove('menu-open');
                    mainMenu.style.display = 'none';

                    // console.log(document.getElementsByClassName("top-nav-container")[0]);

                    //test start
                //     for(var i=0;i<3;i++){
                //     mainMenu.removeChild(mainMenu.lastElementChild);
                // }
                    //test end

                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainMenu.style.display = 'flex';
                document.getElementsByClassName("company-name")[0].style.display="block";
                if(document.getElementsByClassName("top-nav-container")[0].style.display=="none"){
                    document.getElementsByClassName("top-nav-container")[0].style.display="flex";
                }
                // document.getElementsByClassName('top-menu')[0].style.display="block";
                if(document.getElementsByClassName("showHide").length>0){
                for(var i=0;i<document.getElementsByClassName("showHide").length;i++){
                    document.getElementsByClassName("showHide")[i].style.display="none";
                }
            }
            } else if (!body.classList.contains('menu-open')) {
                mainMenu.style.display = 'none';
            }
        });

        // Prevent menu close when clicking inside menu
        mainMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });


     document.addEventListener('DOMContentLoaded', function() {
            const button = document.getElementById('backToTop');
            let lastScrollPosition = 0;
            const scrollThreshold = 300; // Show button after scrolling this many pixels

            // Throttle function to limit scroll event handling
            function throttle(func, limit) {
                let inThrottle;
                return function() {
                    const args = arguments;
                    const context = this;
                    if (!inThrottle) {
                        func.apply(context, args);
                        inThrottle = true;
                        setTimeout(() => inThrottle = false, limit);
                    }
                }
            }

            // Handle scroll event
            window.addEventListener('scroll', throttle(function() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

                // Show/hide button based on scroll position
                if (currentScrollPosition > scrollThreshold) {
                    button.classList.add('visible');
                } else {
                    button.classList.remove('visible');
                }

                // Update last scroll position
                lastScrollPosition = currentScrollPosition;
            }, 100));

            // Smooth scroll to top when button is clicked
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Use smooth scroll if supported
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Fallback for browsers that don't support smooth scroll
                    smoothScrollFallback();
                }
            });

            // Fallback smooth scroll implementation
            function smoothScrollFallback() {
                const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
                if (currentPosition > 0) {
                    window.requestAnimationFrame(smoothScrollFallback);
                    window.scrollTo(0, currentPosition - currentPosition / 8);
                }
            }
        });