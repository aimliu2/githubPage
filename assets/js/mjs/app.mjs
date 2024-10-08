// core function on homepage

export async function docReady(fn) {
    if (document.readyState !== 'loading') {
            console.log( "Doc ready" );
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }