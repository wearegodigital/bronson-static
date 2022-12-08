---
layout: default
title: "Contact Page Example"
type: contact
body_class: "black-bg"
---

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
{% include elements/title-element.html 
    text="Contact"
    id="contact-title"
    css_classes="fixed top-1/2 left-8 transform -translate-y-1/2 z-30"
    element_css_classes="text-white font-800 font-display mega text-left" 
%}
<div id="contact-form" class="section content-container relative z-20 w-screen mx-auto">
    <div class="contact-container grid grid-cols-2 gap-4 h-screen justify-items-center place-items-center">
        <div class="contact-image-carousel p-4 w-full h-full relative">
            <img src="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/ebd46804-5930-4aae-930b-ebcc78c4361c/03032022_Sorel_KenticImpactSandal_3623_4x5.jpg" class="carousel-image w-full opacity-0" data-mouse-x="0.1" data-mouse-y="0.2">
            <img src="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1613151812831-4RW73H9VU2T3CORZTH3J/Bubly_PrideMedia_102020_4020.JPG" class="carousel-image w-full opacity-0" data-mouse-x="0.1" data-mouse-y="0.2">
            <img src="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1613076501632-TH6XC6TR3R7G10ZANBP6/Samsung+HyperFast+Photoshoot+1.jpg" class="carousel-image w-full opacity-0" data-mouse-x="0.1" data-mouse-y="0.2">
        </div>
        <div class="about-description text-white text-h4 p-4">
            <form action="/#wpcf7-f7-o1" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
                <div style="display: none;">
                <input type="hidden" name="_wpcf7" value="7">
                <input type="hidden" name="_wpcf7_version" value="5.6.4">
                <input type="hidden" name="_wpcf7_locale" value="en_US">
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f7-o1">
                <input type="hidden" name="_wpcf7_container_post" value="0">
                <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                <input type="hidden" name="_wpcf7_recaptcha_response" value="03AEkXODCxyd8_drWjm_3cnoXZAWH12KOtpWV1Yz-jHLHTEhUsg88Ym8_ffWQjbB3DX5tTVA3xsi8G3iczOddOiT50jYhtP2MvFn9vmgzsZS3jVDS9QpF7UjYwJvXb5h2U5HxY2TJwRh8MPMW7uBzbkEjdXna-76Te9wptPh_Prn644A-bXvQerscVDxapRnz07mz9uofd-ve4cmfb-5YD4qPPgXQLCfDmX2Dx0K4y3IZqnersJyts_LstPzH5r-gEGrF2nNYcj3u56J_xL3fklZ8ebZm0IlidNcEec6nWmuaig-hiXaUWzkGfg8ToG1CDnTcqf5FrQYTHNoRKsEE5olf8b5ilfv0KiJ07QPQ79273lW0reR6zZE94wnCmDwePYxmzDldWbSAiMVyO-ZbliPia4TkgJyaG3llMWchxLdz1aFrESfb_aa6fs3HkTKM8HuAU46bUNif_s8szYqEp3tRpyirMSPZpqckSWicpStMPy8ySNQp51LPpsJo0PAbBBw1cq5swzNS_">
                </div>
                <div id="name-form-field" class="floating-label-container relative">
                    <span class="wpcf7-form-control-wrap your-name block">
                        <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required peer" id="name" aria-required="true" aria-invalid="false" placeholder="Name">
                        <label for="name" class="peer-placeholder-shown:font-extralight peer-placeholder-shown:text-h2 peer-placeholder-shown:font-medium peer-placeholder-shown:top-0 peer-focus:-top-0 peer-focus:text-white peer-focus:text-p">Name</label>
                    </span>
                </div>
                <div id="email-form-field" class="floating-label-container relative mt-12">
                    <span class="wpcf7-form-control-wrap your-email block">
                        <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email peer" id="email" aria-required="true" aria-invalid="false" placeholder="Email">
                        <label for="email" class="peer-placeholder-shown:font-extralight peer-placeholder-shown:text-h2 peer-placeholder-shown:font-medium peer-placeholder-shown:top-0 peer-focus:-top-0 peer-focus:text-white peer-focus:text-p">Email</label>
                    </span>
                </div>
                <div id="email-form-field" class="floating-label-container relative mt-12">
                    <span class="wpcf7-form-control-wrap your-email block">
                        <input type="text" name="how-you-found-me" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email peer" id="how-you-found-me" aria-required="true" aria-invalid="false" placeholder="How did you find me?">
                        <label for="how-you-found-me" class="peer-placeholder-shown:font-extralight peer-placeholder-shown:text-h2 peer-placeholder-shown:font-medium peer-placeholder-shown:top-0 peer-focus:-top-0 peer-focus:text-white peer-focus:text-p">How did you find me?</label>
                    </span>
                </div>
                <div id="message-form-field" class="floating-label-container relative mt-12">
                    <span class="wpcf7-form-control-wrap your-message block">
                        <textarea name="your-message" cols="40" rows="1" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required peer" id="message" aria-required="true" aria-invalid="false" placeholder="Message" style="height: 58px;"></textarea> 
                        <label for="message" class="peer-placeholder-shown:font-extralight peer-placeholder-shown:text-h2 peer-placeholder-shown:font-medium peer-placeholder-shown:top-0 peer-focus:-top-0 peer-focus:text-white peer-focus:text-p">Message</label>
                    </span>
                </div>
                <div class="flex-row justify-center md:justify-start items-center mt-12">
                    <input type="submit" value="Get In Touch" class="wpcf7-form-control has-spinner wpcf7-submit btn right-arrow text-h5 go-btn"><span class="wpcf7-spinner"></span>
                </div>
                <div class="wpcf7-response-output" aria-hidden="true"></div>
            </form>
        </div>
    </div>
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}