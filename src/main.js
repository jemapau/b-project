require('!style-loader!css-loader!sass-loader!./css/main.scss');
require('./index.html');
require('jquery');
import css from './css/main.scss';
import 'fullpage.js/dist/jquery.fullpage.js';
import ScrollReveal from 'scrollreveal';


window.sr = ScrollReveal()
window.sr.reveal('.box', { duration: 1000 });

$(document).ready(function() {
	$('#fullpage').fullpage();
});


import { map } from 'lodash';
