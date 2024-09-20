// core function on homepage

export function ready(fn) {
    if (document.readyState !== 'loading') {
        console.log( "Doc ready" );
        fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }