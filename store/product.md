---
layout: default
title: "Product Example"
type: product
body_class: "bg-white dark-mode"
---

{% assign grid_item_classes = "grid-item py-8 px-20 flex flex-row" %}

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
<div id="product-main" class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-24 relative">
    <div class="product-image-container justify-self-center align-self-center flex flex-col justify-center items-center mt-8 md:mt-0">
        <img id="product-main-image" src="https://wearego.digital/wp-content/uploads/2022/12/image_original-e1670609145623.png" class="w-100 h-auto"/>
    </div>      
    <div class="product-information md:relative flex flex-col justify-center items-center md:items-start w-full">
        <a href="https://wearegodigital.github.io/bronson-static/store" id="back-to-store" class="absolute left-24 md:-left-6 top-4 text-h4 font-normal">
            <i class="fas fa-arrow-left mr-1"></i> Back to Store
        </a>
        <h2 class="product-title mb-2">Nico Tortorella I</h2>
        <h5 class="product-subtitle font-bold mb-8">Limited Edition Giclee Fine Art Print</h5>
        <p class="product-description font-normal text-center md:text-left">
            Giclee prints are the pinnacle of artistic printing, made from high-end 100% archival Hahnemuhle fine art papers in medium texture. The edition number is printed on the back and the total paper size is 10X20 inches. Most importantly, they are printed with lots of love!
        </p>
        <div class="purchase-form flex flex-col-reverse md:flex-row justify-start items-start w-full mt-4">
            <form class="form grid grid-cols-2 gap-4 w-full md:w-1/2">
                <input aria-label="Quantity" size="4" max="9999" min="1" value="1" type="number" step="1" id="quantity" class="px-4 pt-2 pb-3 outline capitalize font-normal">
                <select aria-label="Select Size" data-variant-option-name="Size" id="product-size" class="px-4 pt-2 pb-3 outline capitalize font-normal">
                    <option value="" selected data-price="$65.99+" data-image="https://wearego.digital/wp-content/uploads/2022/12/image_original-e1670609145623.png">Enter Size</option>
                    <option value="12x12" data-price="$212.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485020672-SWLNF19421DD0ZSDXSUC/fineartprints_square_0_307_2495_2495_0.png?format=1500w">12x12</option>
                    <option value="4x6" data-price="$65.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485010277-L8UMXMHRVRGF5I32RWVO/fineartprints_rectangle2_3_0_0_2217_3326_0.png?format=1500w">4x6</option>
                    <option value="10x10" data-price="$140.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485020672-SWLNF19421DD0ZSDXSUC/fineartprints_square_0_307_2495_2495_0.png?format=1500w">10x10</option>
                    <option value="24x30" data-price="$427.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485034100-SRGKFJSLUOWP5HBMN83B/fineartprints_rectangle4_5_0_103_2495_3118_0.png?format=1500w">24x30</option>
                    <option value="16x20" data-price="$267.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485034100-SRGKFJSLUOWP5HBMN83B/fineartprints_rectangle4_5_0_103_2495_3118_0.png?format=1500w">16x20</option>
                    <option value="16x16" data-price="$262.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485020672-SWLNF19421DD0ZSDXSUC/fineartprints_square_0_307_2495_2495_0.png?format=1500w">16x16</option>
                    <option value="20x30" data-price="$327.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485010277-L8UMXMHRVRGF5I32RWVO/fineartprints_rectangle2_3_0_0_2217_3326_0.png?format=1500w">20x30</option>
                    <option value="20x20" data-price="$302.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485020672-SWLNF19421DD0ZSDXSUC/fineartprints_square_0_307_2495_2495_0.png?format=1500w">20x20</option>
                    <option value="5x7" data-price="$90.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485003345-8DF35SXIERRQT7LOU1GS/fineartprints_rectangle5_7_83_0_2375_3326_0.png?format=1500w">5x7</option>
                    <option value="8x10" data-price="$115.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485034100-SRGKFJSLUOWP5HBMN83B/fineartprints_rectangle4_5_0_103_2495_3118_0.png?format=1500w">8x10</option>
                    <option value="40x60" data-price="$1,327.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485010277-L8UMXMHRVRGF5I32RWVO/fineartprints_rectangle2_3_0_0_2217_3326_0.png?format=1500w">40x60</option>
                    <option value="24x36" data-price="$537.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485010277-L8UMXMHRVRGF5I32RWVO/fineartprints_rectangle2_3_0_0_2217_3326_0.png?format=1500w">24x36</option>
                    <option value="30x40" data-price="$696.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485591829-2HZRUHPRUVVWSHA5TXFS/fineartprints_rectangle3_4_0_0_2494_3326_0.png?format=1500w">30x40</option>
                    <option value="30x30" data-price="$487.99" data-image="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1615485020672-SWLNF19421DD0ZSDXSUC/fineartprints_square_0_307_2495_2495_0.png?format=1500w">30x30</option>
                </select>
                <input type="submit" value="Buy Now" class="px-4 pt-2 pb-3 outline col-span-2 capitalize text-h5 font-bold">
            </form>
            <div class="price  w-full md:w-1/2 text-center md:text-right mb-8 md:mb-0">
                <h3 id="product-price" class="font-bold">$65.99+</h3>
            </div>
        </div>
    </div>
</div>
<div id="related-products" class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-8 md:px-24">     
    <div class="header relative col-span-1 flex flex-col justify-start md:justify-center items-center md:items-start w-full">
        <h2 class="related-product-header md:-mt-20">Related Pieces</h2>
    </div>
    <div class="related-pieces col-span-2">
        <div id="products" class="grid grid-cols-1 md:grid-cols-1">
            <div id="grid-item-2" class="{{ grid_item_classes }} justify-start md:justify-center items-center">
                {% include components/product-tease.html 
                    title="Nico Tortorella II" slug="nico-tortorella-2" price="65.99" url="https://wearegodigital.github.io/bronson-static/store/product" layout="portrait"
                    image="http://wearego.digital/wp-content/uploads/2022/12/nico_2-e1670611808649.png"
                    count=2
                    css_classes=""
                %}
            </div>
        </div>
    </div>
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}