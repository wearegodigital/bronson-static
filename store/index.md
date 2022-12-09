---
layout: default
title: "Store Example"
type: store
body_class: "bg-white dark-mode"
---

{% assign grid_item_classes = "grid-item py-8 px-20 flex flex-row" %}

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
<div id="products" class="grid grid-cols-1 md:grid-cols-2">
    <div class="store-title h-screen flex flex-col justify-center items-center md:items-start py-8 px-8 md:px-24">
        {% include elements/title-element.html 
            text="Store"
            id="store-title"
            css_classes="dark-mode"
            element_css_classes="text-black font-800 font-display text-h1 md:text-mega text-center md:text-left" 
        %}
        {% include elements/button.html 
            text="NFT Store  →" 
            font_weight="300"
            link="https://foundation.app/@bronsonfarrphoto"
            css_classes="mt-8 w-64 text-center outline py-16" 
        %}
    </div>
    <div id="grid-item-1" class="{{ grid_item_classes }} justify-center items-center">
        {% include components/product-tease.html 
            title="Nico Tortorella I" slug="nico-tortorella-1" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="portrait"
            image="https://wearego.digital/wp-content/uploads/2022/12/image_original-e1670609145623.png"
            count=1
            css_classes=""
        %}
    </div>
    <div id="grid-item-2" class="{{ grid_item_classes }} justify-left items-start">
        {% include components/product-tease.html 
            title="Nico Tortorella II" slug="nico-tortorella-2" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="portrait"
            image="http://wearego.digital/wp-content/uploads/2022/12/nico_2-e1670611808649.png"
            count=2
            css_classes=""
        %}
    </div>
    <div id="grid-item-3" class="{{ grid_item_classes }} justify-right items-center">
        {% include components/product-tease.html 
            title="Peaceful but Grand I" slug="peaceful-but-grand-1" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="landscape"
            image="http://wearego.digital/wp-content/uploads/2022/12/Peaceful-but-Grand-1-e1670612277822.png"
            count=3
            css_classes=""
        %}
    </div>
    <div id="grid-item-4" class="{{ grid_item_classes }} justify-left items-center">
        {% include components/product-tease.html 
            title="Peaceful but Grand II" slug="peaceful-but-grand-2" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="landscape"
            image="http://wearego.digital/wp-content/uploads/2022/12/Peaceful-but-Grand-2-e1670612443619.png"
            count=4
            css_classes=""
        %}
    </div>
    <div id="grid-item-5" class="{{ grid_item_classes }} justify-right items-center">
        {% include components/product-tease.html 
            title="Peaceful but Grand III" slug="peaceful-but-grand-3" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="landscape"
            image="http://wearego.digital/wp-content/uploads/2022/12/Peaceful-but-Grand-3-e1670612422313.png"
            count=5
            css_classes=""
        %}
    </div>
    <div id="grid-item-6" class="{{ grid_item_classes }} justify-right items-start">
        {% include components/product-tease.html 
            title="Peaceful but Grand IV" slug="peaceful-but-grand-4" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="landscape"
            image="http://wearego.digital/wp-content/uploads/2022/12/Peaceful-but-Grand-4-e1670612395208.png"
            count=6
            css_classes=""
        %}
    </div>
    <div id="grid-item-7" class="{{ grid_item_classes }} justify-left items-center">
        {% include components/product-tease.html 
            title="Peaceful but Grand V" slug="peaceful-but-grand-5" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="landscape"
            image="http://wearego.digital/wp-content/uploads/2022/12/Peaceful-but-Grand-5-e1670612362469.png"
            count=7
            css_classes=""
        %}
    </div>
    <div id="grid-item-8" class="{{ grid_item_classes }} justify-right items-start">
        {% include components/product-tease.html 
            title="Ethan Hethcote" slug="ethan-hethcote" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="portrait"
            image="http://wearego.digital/wp-content/uploads/2022/12/Ethan-1-e1670612327459.png"
            count=9
            css_classes=""
        %}
    </div>
    <div id="grid-item-9" class="{{ grid_item_classes }} justify-right items-end">
        {% include components/product-tease.html 
            title="Jason Cobb" slug="jason-cobb" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="portrait"
            image="http://wearego.digital/wp-content/uploads/2022/12/Jason-1-e1670612301733.png"
            count=8
            css_classes=""
        %}
    </div>
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}