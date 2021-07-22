function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === 'hard')
        options.shadow_type = '0px';
    else
        options.shadow_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if (options.padding) {
            image.style.padding = '1em';

        }

    })
}

function debounce(func, wait) {
    var timeoutHandler;
    var args = arguments;
    return function () {
        timeoutHandler && clearTimeout(timeoutHandler);
        timeoutHandler = setTimeout(function () {
            timeoutHandler = null;
            func.apply(null, args);
        }, wait);
    }
}

function throttle(func, wait) {
    var timeoutHandler;
    var args = arguments;
    return function () {
        if (timeoutHandler) {
            return;
        }
        timeoutHandler = setTimeout(function () {
            timeoutHandler = null;
            func.apply(null, arguments);
        }, wait);
    }
}

module.exports.shadowizard = shadowizard;
module.exports.debounce = debounce;
module.exports.throttle = throttle;