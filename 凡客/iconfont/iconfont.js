;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuchekong" viewBox="0 0 1028 1024">' +
    '' +
    '<path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M775.68 1011.386182 280.808727 1011.386182c-52.084364 0-94.254545-42.821818-94.254545-95.557818L186.554182 108.171636c0-52.782545 42.216727-95.604364 94.254545-95.604364l494.871273 0c52.084364 0 94.254545 42.821818 94.254545 95.604364l0 807.703273C869.934545 968.610909 827.764364 1011.386182 775.68 1011.386182zM528.244364 963.677091c52.037818 0 94.254545-21.410909 94.254545-47.802182 0-26.437818-42.216727-47.802182-94.254545-47.802182s-94.254545 21.364364-94.254545 47.802182C433.989818 942.266182 476.16 963.677091 528.244364 963.677091zM659.688727 65.117091 396.8 65.117091l0 105.146182 262.842182 0L659.642182 65.117091zM764.788364 222.859636 291.700364 222.859636l0 578.280727 473.088 0L764.788364 222.859636z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiao76" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M505.9328 52.5824c-254.2336 0-461.0816 206.848-461.0816 461.056 0 254.2592 206.848 461.0816 461.0816 461.0816s461.056-206.8224 461.056-461.0816C966.9888 259.4048 760.1664 52.5824 505.9328 52.5824zM505.9328 936.32c-233.0624 0-422.6816-189.5936-422.6816-422.6816 0-233.0624 189.6192-422.656 422.6816-422.656s422.656 189.5936 422.656 422.656C928.5888 746.7008 738.9952 936.32 505.9328 936.32z"  ></path>' +
    '' +
    '<path d="M407.8336 513.3568l236.3392-236.3392c7.5008-7.5008 7.5008-19.6608 0-27.1616s-19.6608-7.5008-27.1616 0l-249.9072 249.9328c-7.5008 7.5008-7.5008 19.6608 0 27.1616l250.496 250.5216c3.7376 3.7376 8.6528 5.632 13.568 5.632s9.8304-1.8688 13.568-5.632c7.5008-7.5008 7.5008-19.6608 0-27.1616L407.8336 513.3568z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao14" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M837.8368 190.848c-87.0144-87.0144-202.7264-134.9376-325.8112-134.9376-123.0848 0-238.8224 47.9488-325.8624 134.9888-87.0144 87.0144-134.9376 202.7264-134.9376 325.8112 0 123.0848 47.9232 238.7968 134.9376 325.8112 87.0144 87.0144 202.7264 134.9376 325.8112 134.9376s238.7968-47.9232 325.8112-134.9376c87.04-87.0144 134.9632-202.752 134.9632-325.8368C972.8 393.6 924.8512 277.8624 837.8368 190.848zM810.6496 815.36C730.88 895.1296 624.8192 939.0592 512 939.0592s-218.9056-43.9296-298.6752-123.6992C133.5552 735.5904 89.6 629.5296 89.6256 516.7104c0-112.8192 43.9296-218.88 123.6992-298.6752C293.12 138.24 399.2064 94.3104 512.0256 94.3104c112.8192 0 218.88 43.9296 298.6496 123.6992 79.7696 79.7696 123.6992 185.8304 123.6992 298.6752C934.3744 629.504 890.4192 735.5904 810.6496 815.36z"  ></path>' +
    '' +
    '<path d="M358.8864 247.9872c-8.4224-6.4768-20.48-4.8896-26.9312 3.4816-6.4512 8.3968-4.9152 20.4544 3.4816 26.9312l309.9136 238.8224-309.888 237.696c-8.4224 6.4512-10.0096 18.5088-3.5584 26.9312 3.7888 4.9152 9.4976 7.5008 15.2576 7.5008 4.0704 0 8.192-1.28 11.6736-3.968l329.7024-252.8768c4.736-3.6352 7.5008-9.2416 7.5008-15.2064s-2.7648-11.5968-7.4752-15.232L358.8864 247.9872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 223.999958c-88.351983 0-159.99997 71.615987-159.99997 159.99997s71.679987 159.99997 159.99997 159.99997 159.99997-71.615987 159.99997-159.99997S600.351983 223.999958 512 223.999958zM512 479.99991c-53.02399 0-95.999982-42.975992-95.999982-95.999982s42.975992-95.999982 95.999982-95.999982 95.999982 42.975992 95.999982 95.999982S565.02399 479.99991 512 479.99991zM512 0C299.93604 0 128.000072 171.935968 128.000072 383.999928c0 160.57597 320.12794 640.35188 383.999928 639.99988 62.847988 0.352 383.999928-481.59991 383.999928-639.99988C895.999928 171.935968 724.06396 0 512 0zM512 927.999826C458.78401 928.255826 192.00006 517.791903 192.00006 383.999928 192.00006 207.263961 335.264033 63.999988 512 63.999988c176.735967 0 319.99994 143.263973 319.99994 319.99994C831.99994 515.999903 564.38399 928.255826 512 927.999826z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-15tian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.229167 311.688835c-23.271006-55.019081-56.582693-104.428398-99.008968-146.854673-42.426275-42.426275-91.835591-75.737962-146.854673-99.008968C650.395 41.72838 589.885881 29.511127 527.520485 29.511127S404.64597 41.72838 347.675444 65.825195c-55.019081 23.271006-104.428398 56.582693-146.854673 99.008968-42.426275 42.426275-75.737962 91.835591-99.008968 146.854673-24.096814 56.970526-36.314067 117.478621-36.314067 179.845041 0 120.279411 45.975101 234.1826 129.456421 320.726675l22.095227-21.313422c-77.932953-80.791048-120.852462-187.124841-120.852462-299.413254 0-58.235332 11.402701-114.719788 33.889855-167.885662 21.723767-51.359738 52.826136-97.489358 92.442412-137.105634 39.617299-39.616276 85.745896-70.718645 137.105634-92.442412 53.165874-22.487154 109.650329-33.889855 167.885662-33.889855 58.235332 0 114.719788 11.402701 167.885662 33.889855 51.358715 21.723767 97.489358 52.826136 137.105634 92.442412 39.616276 39.617299 70.718645 85.745896 92.442412 137.105634 22.487154 53.165874 33.888831 109.650329 33.888831 167.885662 0 58.235332-11.402701 114.719788-33.888831 167.885662-21.723767 51.358715-52.826136 97.489358-92.442412 137.105634-39.617299 39.616276-85.74692 70.718645-137.105634 92.442412-53.165874 22.487154-109.650329 33.888831-167.885662 33.888831-52.937676 0-104.626919-9.473769-153.631006-28.15934l-10.937097 28.684296c52.509934 20.020986 107.878986 30.173207 164.568103 30.173207 62.365396 0 122.874515-12.217253 179.845041-36.314067 55.019081-23.271006 104.428398-56.582693 146.854673-99.008968s75.737962-91.835591 99.008968-146.854673c24.096814-56.970526 36.314067-117.479645 36.314067-179.845041S977.325981 368.659361 953.229167 311.688835z"  ></path>' +
    '' +
    '<path d="M427.845345 696.627974 427.845345 298.393018l-62.579267 0c-26.548656 46.786583-73.957409 84.09121-142.226259 111.884207l0 68.26885c46.756907-15.170514 88.476077-37.274952 125.159558-66.37164l0 284.45354L427.845345 696.627974z"  ></path>' +
    '' +
    '<path d="M655.409201 645.426849c-37.927821 0-61.33595-21.482267-70.164013-64.476477L505.59615 599.913259c18.96391 68.26885 68.892043 102.403275 149.813051 102.403275 94.817506-2.548032 143.470599-47.408753 146.018631-134.641513-3.793396-79.646991-46.164413-121.367185-127.055744-125.159558-30.341029 0-56.891731 8.237615-79.645968 24.65247l9.481955-98.609879 176.360683 0 0-66.372663L535.938202 302.18539l-15.169491 223.769436 66.370617 1.89721c13.896498-17.688871 36.031635-27.171849 66.372663-28.445866 44.237527 1.274016 66.994834 25.927509 68.269873 73.957409C719.233831 617.632829 697.128371 641.633453 655.409201 645.426849z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chongzhiqiaquan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M671.981644 640.006396l191.996802 0c17.750269 0 31.999808-14.374382 31.999808-31.999808L895.978255 416.009785c0-17.749246-14.249539-31.999808-31.999808-31.999808l-191.996802 0c-17.624403 0-31.999808 14.250562-31.999808 31.999808l0 191.996802C639.98286 625.632013 654.358265 640.006396 671.981644 640.006396zM703.981453 448.009593l127.998209 0 0 127.998209-127.998209 0L703.981453 448.009593z"  ></path>' +
    '' +
    '<path d="M160.022577 768.004605l703.95587 0c17.750269 0 31.999808-14.375405 31.999808-31.999808 0-17.750269-14.249539-31.999808-31.999808-31.999808l-703.95587 0c-17.687848 0-31.999808 14.250562-31.999808 31.999808C128.022769 753.629199 142.334729 768.004605 160.022577 768.004605z"  ></path>' +
    '' +
    '<path d="M160.022577 640.006396l127.998209 0c17.686824 0 31.999808-14.374382 31.999808-31.999808 0-17.750269-14.31196-31.999808-31.999808-31.999808l-127.998209 0c-17.687848 0-31.999808 14.249539-31.999808 31.999808C128.022769 625.632013 142.334729 640.006396 160.022577 640.006396z"  ></path>' +
    '' +
    '<path d="M959.977871 192.014198l-895.953695 0c-35.374672 0-63.999616 28.624944-63.999616 63.999616l0 639.987976c0 35.374672 28.624944 63.999616 63.999616 63.999616l895.953695 0c35.373649 0 63.998593-28.624944 63.998593-63.999616L1023.976464 256.013815C1023.976464 220.639143 995.35152 192.014198 959.977871 192.014198zM959.977871 896.001791l-895.953695 0L64.024176 256.013815l895.953695 0L959.977871 896.001791z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-buchongiconsvg05" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M861.438989 292.670402l-138.386289 0c17.759308-22.547587 28.366385-50.978444 28.366385-81.841816 0-73.061427-59.438522-132.499949-132.499949-132.499949-43.849751 0-82.785349 21.416779-106.91709 54.333002-24.130718-32.917246-63.065293-54.333002-106.916067-54.333002-73.061427 0-132.499949 59.439545-132.499949 132.499949 0 30.863372 10.607078 59.294229 28.366385 81.841816l-138.387312 0c-47.25036 0-85.691678 38.441318-85.691678 85.691678l0 106.574266c0 38.815866 25.950243 71.667617 61.407457 82.166219l0 292.944661c0 46.097039 37.502901 83.600963 83.600963 83.600963l280.134299 0c3.068019 1.301708 6.442022 2.02215 9.983854 2.02215 3.541833 0 6.916858-0.720442 9.983854-2.02215l280.135323 0c46.098062 0 83.600963-37.502901 83.600963-83.600963l0-292.945684c35.456191-10.498602 61.407457-43.34933 61.407457-82.165196l0-106.574266C947.130668 331.11172 908.68935 292.670402 861.438989 292.670402zM618.919137 129.496401c44.846499 0 81.332185 36.485686 81.332185 81.332185 0 44.818868-36.441682 81.28818-81.250316 81.332185l-81.414053 0 0.001023-81.238036c0-0.063448 0-0.136106-0.001023-0.210811C537.648354 165.918639 574.110502 129.496401 618.919137 129.496401zM405.087003 129.496401c44.825008 0 81.295344 36.449869 81.332185 81.26669l0 81.397679-81.238036-0.001023c-0.077775 0-0.163737 0-0.250722 0.001023-44.775887-0.084938-81.174588-36.537877-81.174588-81.332185C323.755842 165.982087 360.240504 129.496401 405.087003 129.496401zM128.043237 484.937369l0-106.574266c0-18.988357 15.535557-34.523914 34.523914-34.523914l323.851014 0 0 175.623117-323.851014 0C143.579817 519.461283 128.043237 503.925727 128.043237 484.937369zM189.450694 860.04825l0-289.419202 296.96747 0 0 321.852401-264.534271 0C204.00076 892.481449 189.450694 877.931383 189.450694 860.04825zM802.122247 892.481449l-264.535295 0 0-321.852401 296.968494 0 0 289.419202C834.555446 877.931383 820.006404 892.481449 802.122247 892.481449zM895.962903 484.937369c0 18.988357-15.535557 34.523914-34.523914 34.523914l-323.852037 0 0-175.623117 323.852037 0c18.988357 0 34.523914 15.53658 34.523914 34.523914L895.962903 484.937369z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yijiuhuanxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M440.889136 412.44479l170.666074 0 0 220.443679-170.666074 0 0-220.443679Z"  ></path>' +
    '' +
    '<path d="M440.889136 387.555988 440.889136 391.111531l3.555543 0L611.55521 391.111531l0-3.555543c0-9.799077-7.971528-17.777716-17.777716-17.777716l-135.110642 0C448.860664 369.778272 440.889136 377.756911 440.889136 387.555988z"  ></path>' +
    '' +
    '<path d="M440.889136 654.221728l0 3.555543c0 9.799077 7.971528 17.777716 17.777716 17.777716l135.110642 0c9.806188 0 17.777716-7.978639 17.777716-17.777716L611.55521 654.221728 444.444679 654.221728 440.889136 654.221728z"  ></path>' +
    '' +
    '<path d="M1007.543168 282.397242c-21.944813-126.278673-142.840393-246.420478-268.656845-266.978629-125.816452-20.558151-331.703737-20.558151-457.520189 0C155.542571 35.976764 35.848764 156.118569 15.361724 282.397242c-20.479929 126.278673-20.479929 332.919733 0 459.205517 20.479929 126.278673 140.180847 246.420478 265.997299 266.978629 125.816452 20.558151 331.703737 20.558151 457.520189 0 125.816452-20.558151 246.712032-140.699956 268.656845-266.978629C1029.48087 615.324086 1029.48087 408.675914 1007.543168 282.397242zM222.721004 604.22368c-7.203531-26.204353-11.12885-53.752702-11.12885-82.218381 0-143.131947 97.350773-263.856862 229.296982-299.703848l0-34.026549 95.267225 41.393634L440.889136 271.069281l0-26.631019c-120.035139 35.228322-207.963722 146.28927-207.963722 277.567036 0 24.561692 3.100434 48.405165 8.888858 71.196197L222.721004 604.22368zM593.777494 348.445012c21.567925 0 39.110975 17.54305 39.110975 39.110975L632.888469 391.111531l0 24.177694 0 220.443679L632.888469 654.221728l0 3.555543c0 21.567925-17.54305 39.110975-39.110975 39.110975l-135.110642 0c-21.567925 0-39.110975-17.54305-39.110975-39.110975L419.555877 654.221728l0-18.488825 0-220.443679L419.555877 391.111531l0-3.555543c0-21.567925 17.54305-39.110975 39.110975-39.110975L593.777494 348.445012zM522.225742 832.638887c-88.028139 0-167.56564-36.856761-224.134333-95.900111l-27.363461 15.793723-11.78307-103.203197 83.484155 61.809563-25.272801 14.591949c52.43004 52.785594 124.970233 85.574814 205.06951 85.574814 80.675275 0 153.706133-33.230107 206.228617-86.669921l18.993712 10.965295C690.808268 795.291461 610.815657 832.638887 522.225742 832.638887zM767.344891 687.643835l11.78307-103.203197 22.2577 12.849733c6.499533-24.035472 10.133298-49.230051 10.133298-75.285072 0-133.539092-90.97924-246.185812-214.193034-279.351919l0-22.044368c135.110642 33.678105 235.526293 156.010125 235.526293 301.396287 0 29.966118-4.344874 58.915351-12.30218 86.342811l30.279006 17.47905L767.344891 687.643835z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yiyuanduobao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 62.938448c-248.009514 0-449.060529 201.052039-449.060529 449.060529s201.052039 449.060529 449.060529 449.060529c248.009514 0 449.060529-201.052039 449.060529-449.060529S760.009002 62.938448 511.999488 62.938448zM797.816073 797.816584c-37.117362 37.117362-80.344886 66.261123-128.479163 86.6198-49.839105 21.080108-102.775758 31.768541-157.338445 31.768541S404.500149 905.516492 354.661044 884.436384c-48.134277-20.3597-91.360777-49.502437-128.47814-86.6198-37.118386-37.118386-66.261123-80.344886-86.620823-128.479163-21.080108-49.839105-31.768541-102.775758-31.768541-157.337421 0-54.562686 10.688433-107.499339 31.768541-157.338445 20.3597-48.134277 49.502437-91.359754 86.620823-128.47814 37.117362-37.118386 80.344886-66.261123 128.47814-86.6198 49.839105-21.081131 102.775758-31.768541 157.338445-31.768541S619.498828 118.481462 669.337933 139.562593c48.134277 20.358677 91.360777 49.502437 128.479163 86.6198 37.118386 37.118386 66.262146 80.344886 86.620823 128.47814 21.080108 49.839105 31.768541 102.775758 31.768541 157.338445 0 54.562686-10.688433 107.498316-31.768541 157.337421C864.078219 717.471698 834.935482 760.697175 797.816073 797.816584z"  ></path>' +
    '' +
    '<path d="M511.999488 128.260176c-211.595162 0-383.739824 172.144662-383.739824 383.739824s172.144662 383.739824 383.739824 383.739824c211.595162 0 383.740848-172.144662 383.740848-383.739824S723.594651 128.260176 511.999488 128.260176zM678.569178 640.737036l7.506974 1.471514 80.080873-0.010233 7.407714-1.462305 0 13.682627-7.506974-1.471514-80.080873 0.010233-7.407714 1.462305L678.569178 640.737036zM647.904785 763.040547 374.977765 763.040547l0-30.865985 53.565986 0c19.736507 0 29.331026-10.679223 29.331026-32.647561L457.874777 329.068667c-34.944883 21.75242-68.199265 36.111452-98.857519 42.684148l-0.366344 0.078795-13.725606-24.019043 0.503467-0.234337c65.918315-30.744211 122.758881-73.095785 168.942737-125.876895l0.152473-0.174985 47.166229 0 0 474.685139c-1.152243 13.738909 1.001817 23.660886 6.402827 29.534663 4.078899 4.437056 10.139941 6.686283 18.014282 6.687306 0.002047 0 0.00307 0 0.004093 0 1.539053 0 3.174296-0.086981 4.859681-0.255827l56.933687-0.00307L647.904785 763.040547zM786.017352 753.644549c-1.206478 1.299599-2.416026 2.368954-3.613294 3.199878-2.088568 1.233084-5.360078 1.849114-9.756201 1.849114L749.391177 758.693542c-6.786567-0.094144-11.101849-1.113357-13.198603-3.116991-1.735527-1.366114-3.015683-2.980891-3.768837-4.767584-0.932232-1.859347-1.391696-4.986571-1.391696-9.529027l0-48.435129-12.633738 0 0 2.733251c0 9.015328-1.280156 18.159592-3.804652 27.181059-1.269923 4.529153-2.924609 8.549723-4.919033 11.952216-2.000564 3.409656-4.669346 6.700609-7.933693 9.780761-7.862062 7.68196-17.581424 13.138228-28.881794 16.21224-1.546216 0.454348-3.963265 1.092891-7.176446 1.896186l-0.464581 0.115634-2.849908-8.849552 0.39295-0.196475c5.726421-2.865257 10.522658-5.716188 14.257725-8.472975 8.695033-6.565533 14.547321-15.027252 17.389042-25.145703 1.870604-6.857175 2.865257-15.183817 2.955308-24.74559l0-2.457981L672.049694 692.847881l-7.40669 1.462305 0-13.006222 7.505951 1.471514 108.881826-0.010233 7.40669-1.462305 0 13.006222-7.505951-1.471514-29.27065 0.010233 0 41.944298c0 2.061962 0.36225 3.473101 1.044796 4.078899 0.907673 0.909719 2.605338 1.358951 5.068436 1.358951l15.819291 0c2.097778-0.082888 3.581572-0.494257 4.391007-1.220804 0.802272-0.723477 1.338485-2.118244 1.592264-4.145413l1.119497-14.429641 9.803273 1.056052-1.521656 21.585621C788.606317 748.279355 787.637246 751.736083 786.017352 753.644549z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qianjin-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.655 798.771c158.223 0 286.426-128.204 286.426-286.426 0-158.183-128.204-286.426-286.426-286.426-158.183 0-286.426 128.242-286.426 286.426 0 158.223 128.243 286.426 286.426 286.426zM511.655 264.11c136.874 0 248.236 111.362 248.236 248.236s-111.362 248.236-248.236 248.236-248.236-111.362-248.236-248.236 111.362-248.236 248.236-248.236z"  ></path>' +
    '' +
    '<path d="M561.646 512.307l-101.547 101.547c-7.447 7.446-7.447 19.554 0 27s19.553 7.447 27 0l115.028-115.066c7.447-7.446 7.447-19.554 0-27l-114.265-114.303c-3.742-3.704-8.63-5.576-13.52-5.576s-9.739 1.872-13.48 5.576c-7.446 7.446-7.446 19.553 0 27l100.783 100.822z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoujiqia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M259.721253 704.158485l251.345492 0c35.647895 0 64.649416-29.001521 64.649416-64.649416L575.71616 388.163577c0-35.647895-29.001521-64.649416-64.649416-64.649416L259.721253 323.514161c-35.647895 0-64.649416 29.001521-64.649416 64.649416l0 251.345492C195.071837 675.156964 224.073358 704.158485 259.721253 704.158485zM240.09731 388.163577c0-10.82044 8.803503-19.623943 19.623943-19.623943l251.345492 0c10.82044 0 19.623943 8.803503 19.623943 19.623943l0 251.345492c0 10.82044-8.803503 19.623943-19.623943 19.623943L259.721253 659.133012c-10.82044 0-19.623943-8.803503-19.623943-19.623943L240.09731 388.163577z"  ></path>' +
    '' +
    '<path d="M427.161776 635.496685c12.43317 0 22.512736-10.079566 22.512736-22.512736l0-16.981766 25.069979 0c12.43317 0 22.512736-10.079566 22.512736-22.512736s-10.079566-22.512736-22.512736-22.512736l-25.069979 0L449.674513 414.68972c0-12.43317-10.079566-22.512736-22.512736-22.512736s-22.512736 10.079566-22.512736 22.512736l0 198.293205C404.64904 625.417119 414.728606 635.496685 427.161776 635.496685z"  ></path>' +
    '' +
    '<path d="M294.547433 491.847008l25.069979 0 0 121.135918c0 12.43317 10.079566 22.512736 22.512736 22.512736s22.512736-10.079566 22.512736-22.512736L364.642884 414.68972c0-12.43317-10.079566-22.512736-22.512736-22.512736s-22.512736 10.079566-22.512736 22.512736l0 32.131815-25.069979 0c-12.43317 0-22.512736 10.079566-22.512736 22.512736S282.114263 491.847008 294.547433 491.847008z"  ></path>' +
    '' +
    '<path d="M944.064436 377.788276l-179.078585-168.845523c-4.177136-3.938706-9.700943-6.132674-15.443737-6.132674L200.282512 202.810079c-28.843932 0-56.164161 9.255805-79.007425 26.76662-22.097274 16.939811-38.438451 40.950667-46.01501 67.609841-3.3984 11.960403 3.541663 24.409946 15.501042 27.809369 11.960403 3.399423 24.409946-3.540639 27.809369-15.501042 10.316973-36.303834 43.917232-61.658292 81.712023-61.658292l540.319999 0L906.107963 403.883607l0 291.022143c0 46.833655-38.10076 84.934414-84.934414 84.934414L200.282512 779.840164c-46.833655 0-84.934414-38.10076-84.934414-84.934414L115.348098 376.213407c0-12.43317-10.079566-22.512736-22.512736-22.512736s-22.512736 10.079566-22.512736 22.512736l0 318.691319c0 71.660086 58.299801 129.959887 129.959887 129.959887l620.891036 0c71.660086 0 129.959887-58.299801 129.959887-129.959887L951.133436 394.168338C951.133436 387.967102 948.576193 382.041136 944.064436 377.788276z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.705 213.684c-138.888-138.934-364.124-138.934-503.059 0s-138.934 364.17 0 503.059c138.914 138.924 364.14 138.924 503.059 0.015v-0.015c138.924-138.904 138.924-364.13 0.015-503.044 0-0.005-0.015-0.005-0.015-0.015zM136.238 794.151c-181.64-181.69-181.64-476.225 0-657.921 181.68-181.64 476.2-181.64 657.921 0 181.65 181.696 181.65 476.23 0 657.921-181.721 181.64-476.235 181.64-657.92 0z m869.113 211.238c-24.836 24.801-65.069 24.801-89.885 0l-89.84-89.885c-24.806-24.822-24.806-65.039 0-89.845 24.801-24.8 65.018-24.8 89.84 0l89.885 89.845c24.863 24.862 24.863 65.069 0 89.885z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M85.93 950.016c0 24.576 7.126 31.317 29.44 31.317h353.366V511.744H85.931v438.272z m469.334 31.317h353.365c22.358 0 29.44-6.698 29.44-31.317V511.744H555.221v469.59zM938.667 256H725.333c51.499-11.733 105.899-49.707 112.598-94.293 7.85-50.859-52.566-127.958-125.654-118.187-87.424 12.117-151.509 89.259-196.736 149.077C470.656 133.931 412.16 65.408 328.363 45.483c-81.152-19.2-136.747 64.938-135.254 116.992 1.451 44.245 52.608 81.834 105.558 93.525H85.333c-26.368 0-42.666 14.848-42.666 42.667v170.581l426.666 0.085V256h85.334v213.333l426.666-0.085V298.667c0-27.819-16.341-42.667-42.666-42.667z m-687.019-77.824c-14.763-16.427-4.779-38.741 4.48-55.595 17.024-29.696 40.747-47.744 81.152-30.933 56.32 23.51 97.792 73.216 131.584 117.803-71.552 7.893-178.304 10.965-217.216-31.275z m311.296 30.507c34.816-44.63 75.221-89.942 131.157-117.803 58.582-28.97 113.024 49.323 85.206 86.912-21.419 28.544-89.259 31.232-125.91 32.853-30.08 1.536-60.501 0.811-90.453-1.962z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m158.72 534.528L398.523733 806.724267a32.017067 32.017067 0 0 1-45.2608-45.294934L602.709333 512 353.28 262.536533a32.017067 32.017067 0 0 1 45.2608-45.2608L670.72 489.4208a32.426667 32.426667 0 0 1 0 45.1072z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixiu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M856.0128 719.65696l-204.48256-207.01184a16.59904 16.59904 0 0 0-23.7312 0 17.05984 17.05984 0 0 0 0 24.0384l204.48256 207.01696c24.60672 24.96512 24.60672 65.56672 0 90.48064a62.6432 62.6432 0 0 1-89.344 0l-201.3696-203.90912c-0.0512-0.1024-0.07168-0.20992-0.12288-0.31744-4.33152-8.25344-14.54592-11.40224-22.69696-7.0144-90.56256 48.84992-200.12544 32.18432-272.71168-41.27232-61.31712-62.11584-82.76992-154.74688-56.8832-237.37856L311.0656 467.7632a49.98656 49.98656 0 0 0 35.59424 14.85824 49.96096 49.96096 0 0 0 35.61984-14.85824l78.8992-79.90272c9.46688-9.59488 14.70464-22.38976 14.70464-36.06016s-5.23264-26.46016-14.70464-36.05504L339.2512 192.3072c81.57696-26.24 173.12256-4.56704 234.49088 57.55904 54.77888 55.45472 78.40768 134.58944 63.39584 211.65568-1.80736 9.23648 4.07552 18.16064 13.2096 20.0192 1.08032 0.2048 2.21696 0.3072 3.2512 0.3072 7.83872 0 14.85312-5.62176 16.50688-13.6704 17.2288-88.26368-9.95328-178.84672-72.63232-242.35008-77.07136-77.99808-195.77344-100.33664-295.25504-55.66464-8.45824 3.81952-12.30336 13.8752-8.53504 22.44096 0.98816 2.26816 2.42688 4.18304 4.13696 5.73952L437.4528 339.77856c3.11808 3.2 4.87424 7.42912 4.87424 12.01664 0 4.59264-1.73056 8.82176-4.87424 12.02176L358.5536 443.7248a16.67072 16.67072 0 0 1-23.7568 0L194.9952 302.1824c-0.09728-0.10752-0.2048-0.20992-0.3072-0.31232l-0.1536-0.15872c-0.1024-0.10752-0.22528-0.17408-0.3328-0.27648a16.24064 16.24064 0 0 0-2.18624-1.81248c-0.24064-0.16384-0.49664-0.2816-0.7424-0.43008-0.5888-0.3584-1.152-0.74752-1.792-1.03936-0.128-0.05632-0.26112-0.0768-0.38912-0.128-0.26112-0.10752-0.5376-0.16896-0.80384-0.26624a17.408 17.408 0 0 0-2.38592-0.72192l-0.19456-0.02048a16.60928 16.60928 0 0 0-14.848 4.65408l-0.0512 0.04096c-0.08704 0.09216-0.14848 0.19968-0.2304 0.28672a16.98816 16.98816 0 0 0-1.78176 2.2016c-0.256 0.38912-0.44544 0.79872-0.67072 1.2032-0.26624 0.47104-0.57344 0.90624-0.7936 1.41312-44.12928 100.80256-22.02624 220.89216 54.9632 298.89024 51.328 51.94752 118.74816 79.0784 187.22816 79.0784 38.20032 0 76.71808-8.51968 112.94208-25.80992l196.75648 199.23968a95.8976 95.8976 0 0 0 68.4032 28.63104c24.76032 0 49.52064-9.54368 68.39808-28.63104 37.65248-38.22592 37.65248-100.33664-0.01024-138.55744z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M499.18464 707.32288l133.05856-298.99264V340.89472H413.93152l-0.57856 56.47872 160.14336-1.152-134.8096 311.10656h60.49792z m295.97696-426.50112c-21.34016 41.17504-82.87744 156.52864-82.87744 156.52864l109.98272-28.57472c5.81632 23.73632 14.55616 77.51168 14.55616 103.2448 0 177.8688-143.92832 321.80224-321.80224 321.80224-177.82784 0-321.75616-143.92832-321.75616-321.80224 0-177.91488 143.92832-321.8432 321.75616-321.8432 37.35552 0 73.20576 6.2976 106.12736 17.92512 0 0 5.8624-19.38944 12.16-39.75168-37.36064-13.09184-77.07136-19.87584-118.75328-19.87584-200.63232 0-363.45856 162.87744-363.45856 363.55072 0 200.63232 162.83136 363.50464 363.45856 363.50464 200.6528 0 363.48416-162.87744 363.48416-363.50464 0-87.76704-31.0528-168.20736-82.87744-231.20384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)