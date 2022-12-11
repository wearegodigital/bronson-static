---
layout: default
title: "Press + Features Example"
type: press-and-features
body_class: "bg-white dark-mode"
---

{% assign grid_item_classes = "grid-item py-8 px-20 flex flex-row" %}

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
<div id="press-title" class="grid grid-cols-1 md:grid-cols-1 gap-16">
    <div class="store-title h-screen flex flex-col justify-center items-center md:items-start py-8 px-8 md:px-24 col-span-1">
        {% include elements/title-element.html 
            text="Press + Features"
            id="press-and-features-title"
            css_classes="dark-mode"
            element_css_classes="text-black font-800 font-display text-h1 md:text-jumbo text-center md:text-left" 
        %}
    </div>
</div>
<div id="press-items" class="grid grid-cols-1 md:grid-cols-1 gap-16 -mt-40 pb-40">
    <div id="grid-item-1" class="{{ grid_item_classes }} justify-start items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="vogue-1" subtitle="Vogue - Autumn 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?vogue"
            count=1
            css_classes=""
        %}
    </div>
    <div id="grid-item-2" class="{{ grid_item_classes }} justify-end items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="sports-1" subtitle="Sports Illustrated - September 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?sports"
            count=2
            css_classes=""
        %}
    </div>
    <div id="grid-item-3" class="{{ grid_item_classes }} justify-start items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="huff-po-1" subtitle="Huffington Post - August 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?lifestyle"
            count=3
            css_classes=""
        %}
    </div>
    <div id="grid-item-4" class="{{ grid_item_classes }} justify-end items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="magazine-1" subtitle="Magazine - Month 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?fashion"
            count=4
            css_classes=""
        %}
    </div>
    <div id="grid-item-5" class="{{ grid_item_classes }} justify-start items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="magazine-2" subtitle="Magazine - Month 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?nyc"
            count=5
            css_classes=""
        %}
    </div>
    <div id="grid-item-6" class="{{ grid_item_classes }} justify-end items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="magazine-3" subtitle="Magazine - Month 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?travel"
            count=6
            css_classes=""
        %}
    </div>
    <div id="grid-item-7" class="{{ grid_item_classes }} justify-start items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="magazine-4" subtitle="Magazine - Month 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?photography"
            count=7
            css_classes=""
        %}
    </div>
    <div id="grid-item-8" class="{{ grid_item_classes }} justify-end items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="magazine-5" subtitle="Magazine - Month 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?beautiful"
            count=9
            css_classes=""
        %}
    </div>
    <div id="grid-item-9" class="{{ grid_item_classes }} justify-start items-center">
        {% include components/press-tease.html 
            title="Lorem Ipsum Dolar" slug="magazine-6" subtitle="Magazine - Month 2022" url="https://wearegodigital.github.io/bronson-static/store/product"
            image="https://source.unsplash.com/random/1200x600?view"
            count=8
            css_classes=""
        %}
    </div>
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}