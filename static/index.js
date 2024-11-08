document.addEventListener('DOMContentLoaded', () => {

    const mobile_overlay = document.getElementById('mobile-menu-label')
    const mobile_menu_close = document.getElementById('mobile-menu-close')
    const features_list = document.getElementById('features-list')
    const company_list = document.getElementById('company-list')

    console.log(mobile_overlay)
    console.log(mobile_menu_close)
    // Event listener to uncheck (reset the menu) the nav items when menu is closed on mobile
    [mobile_overlay, mobile_menu_close].forEach((item) => {
        item.addEventListener(('click'), function (e) {
            features_list.checked = false
            company_list.checked = false
        })
    })

})