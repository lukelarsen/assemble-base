var assign  = require('object-assign');
var postcss = require('postcss');

var processors = [
    {
        plugin:    require('postcss-partial-import'),
        namespace: 'import',
        defaults:  {}
    },
    {
        plugin:    require('postcss-each'),
        namespace: 'each',
        defaults:  {}
    },
    {
        plugin:    require('postcss-simple-vars'),
        namespace: 'simpleVars',
        defaults:  {}
    },
    {
        plugin:    require('postcss-map'),
        namespace: 'map',
        defaults:  {}
    },
    {
        plugin:    require('postcss-arrow-boxes'),
        namespace: 'arrowBoxes',
        defaults:  {}
    },
    {
        plugin:    require('postcss-at2x'),
        namespace: 'at2x',
        defaults:  {}
    },
    {
        plugin:    require('postcss-clearfix'),
        namespace: 'clearfix',
        defaults:  {}
    },
    {
        plugin:    require('postcss-conditionals'),
        namespace: 'conditionals',
        defaults:  {}
    },
    {
        plugin:    require('postcss-font-magician'),
        namespace: 'fontMagician',
        defaults:  {}
    },
    {
        plugin:    require('postcss-hidden'),
        namespace: 'hidden',
        defaults:  {}
    },
    {
        plugin:    require('postcss-position'),
        namespace: 'position',
        defaults:  {}
    },
    {
        plugin:    require('postcss-responsive-type'),
        namespace: 'responsiveType',
        defaults:  {}
    },
    {
        plugin:    require('postcss-show-scrollbars'),
        namespace: 'showScrollbars',
        defaults:  {}
    },
    {
        plugin:    require('postcss-size'),
        namespace: 'size',
        defaults:  {}
    }
];

module.exports = postcss.plugin('assembleBase', function (opts) {
    opts = assign({}, opts);

    var instance = postcss();

    processors.forEach(function (processor) {
        var namespaceOptions = processor.namespace in opts ? opts[processor.namespace] : opts;
        var processorOptions = {};

        processorOptions = assign({}, processor.defaults, namespaceOptions);

        if (namespaceOptions && !processorOptions.disable) {
            instance.use(processor.plugin(processorOptions));
        }
    });

    return instance;
});