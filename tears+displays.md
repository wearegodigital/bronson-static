---
layout: default
title: "Tears + Displays Page Example"
type: tears-displays
body_class: "bg-black"
---

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
<div id="gallery" class="portfolio-items relative overflow-x-clip">
    <div class="scrolling-text scrolling-text-mix container fixed top-1/2 left-8 transform -translate-y-1/2 z-30 mix-blend-difference">
        <ul class="v-slides">
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    TEARS + <br>DISPLAYS
                </h1>
            </li>
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    BILLBOARDS<br>+ TEARS
                </h1>
            </li>
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    PRESS
                </h1>
            </li>
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    DIGITAL
                </h1>
            </li>
        </ul>
    </div>
    <div class="scrolling-text scrolling-text-overlay fixed top-1/2 left-8 transform -translate-y-1/2 opacity-60" style="z-index: 31">
        <ul class="v-slides">
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    TEARS + <br>DISPLAYS
                </h1>
            </li>
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    BILLBOARDS<br>+ TEARS
                </h1>
            </li>
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    PRESS
                </h1>
            </li>
            <li class="v-slide">
                <h1 class="title text-white font-800 font-display text-h2 md:text-jumbo text-left">
                    DIGITAL
                </h1>
            </li>
        </ul>
    </div>
    {% include components/portfolio-item.html 
        title="Displays" slug="displays-1" url="#" count=1
        layout=1 display="light" last_display="light" next_display="light"
        image_1="http://wearego.digital/wp-content/uploads/2022/12/Screenshot-2022-10-31-at-12.48-1.png"
        image_1_vertical_position="+ 20vw" image_1_vertical_position_mobile="+ 50vw" image_1_css_classes="z-20"
    %}
    {% include components/portfolio-item.html 
        title="Billboards + Signage" slug="billboards+signage" url="#" count=2
        layout=2 display="light" last_display="light" next_display="light"
        image_1="http://wearego.digital/wp-content/uploads/2022/12/Screenshot-2022-10-31-at-12.48.png"
        image_1_vertical_position="+ 10vw" image_1_vertical_position_mobile="+ 70vw" image_1_css_classes="z-40"
        image_2="http://wearego.digital/wp-content/uploads/2022/12/Screenshot-2022-10-31-at-12.48-1-1.png"
        image_2_vertical_position="+ 40vw" image_2_vertical_position_mobile="- 45vw" image_2_css_classes="z-30"
    %}
    {% include components/portfolio-item.html 
        title="Press" slug="press" url="#" count=3
        layout=3 display="light" last_display="light" next_display="light"
        image_1="http://wearego.digital/wp-content/uploads/2022/12/Screenshot-2022-10-31-at-12.46-1.png"
        image_1_vertical_position="+ 10vw" image_1_vertical_position_mobile="- 40vw" image_1_css_classes="z-20"
    %}
    {% include components/portfolio-item.html 
        title="Digital" slug="digital" url="#" count=4
        layout=4 display="light" last_display="light" next_display="light"
        image_1="http://wearego.digital/wp-content/uploads/2022/12/Screenshot-2022-10-31-at-12.47.png"
        image_1_vertical_position="" image_1_vertical_position_mobile="+ 75vw" image_1_css_classes="z-20"
        image_2="http://wearego.digital/wp-content/uploads/2022/12/Screenshot-2022-10-31-at-12.47-1.png"
        image_2_vertical_position="+ 50vw" image_2_vertical_position_mobile="+ 5vw" image_2_css_classes="z-30"
    %}
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}