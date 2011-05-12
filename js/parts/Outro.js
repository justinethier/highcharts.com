
// Initiate dependency
if (useCanVG) {
	var head = doc.getElementsByTagName('head')[0];
	createElement('script', {
		type: 'text/javascript',
		src: 'http://highcharts.com/js/canvg.js',
		onload: function() {
			drawDeferredCanvases();
		}
	}, null, head);
}


// global variables
win.Highcharts = {
	Chart: Chart,
	dateFormat: dateFormat,
	pathAnim: pathAnim,
	getOptions: getOptions,
	numberFormat: numberFormat,
	Point: Point,
	Color: Color,
	Renderer: Renderer,
	seriesTypes: seriesTypes,
	setOptions: setOptions,
	Series: Series,
		
	// Expose utility funcitons for modules
	addEvent: addEvent,
	createElement: createElement,
	discardElement: discardElement,
	css: css,
	each: each,
	extend: extend,
	map: map,
	merge: merge,
	pick: pick,
	extendClass: extendClass,
	version: '2.1.4'
};
})();
