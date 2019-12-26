import styles from './assets/scss/style.scss';

const h1 = document.createElement( 'h1' );

h1.classList.add( styles.greeting );

h1.innerText = 'Hello Webpack!';

document.body.appendChild( h1 );
