const { readFileSync, writeFileSync } = require('fs');
const sassVars = require('sass-vars-to-js');
const glob = require('glob');
const listSelectors = require('list-selectors');

function getTemplateData(){
    const data = {
        ICONS: []
    };

    data.VERSION_INFO = JSON.parse(readFileSync('package.json', 'utf8'));
    data.COLORS = stripDefaults(sassVars('src/styles/quarks/_quarks.colors.scss'));
    data.VARIABLES = stripDefaults(sassVars('src/styles/quarks/_quarks.variables.scss'));

    let icons = glob.sync('../src/icons/*.svg');
    for(let i in icons) {
        let filename = icons[i].split('/');
        filename = filename[filename.length-1];
        filename = filename.split('.')[0];
        data.ICONS.push(filename);
    }

    listSelectors(['src/styles/utilities/_utilities.background.scss'],
        { include: ['classes'] },
        function(bgUtilities) {
            for(let bgU in bgUtilities['classes']) {
                bgUtilities['classes'][bgU] = bgUtilities['classes'][bgU].substring(1);
            }
            data.BGUTILITIES = bgUtilities['classes'];
        }
    );

    listSelectors(['src/styles/utilities/_utilities.spacing.scss'],
        { include: ['classes'] },
        function(spacingUtilities) {
            for(let spU in spacingUtilities['classes']) {
                spacingUtilities['classes'][spU] = spacingUtilities['classes'][spU].substring(1);
            }
            data.SPACINGUTILITIES = spacingUtilities['classes'];
        }
    );

    listSelectors(['src/styles/utilities/_utilities.text.scss'],
        { include: ['classes'] },
        function(textUtilities) {
            for(let txtU in textUtilities['classes']) {
                textUtilities['classes'][txtU] = textUtilities['classes'][txtU].substring(1);
            }
            data.TEXTUTILITIES = textUtilities['classes'];
        }
    );

    return data;
}

function stripDefaults(values) {
    const response = {};

    Object.keys(values).forEach(function(key) {
        if(values[key].indexOf(" !default") !== -1 && key.indexOf("instagram") === -1) {
            response[key] = values[key].replace(' !default', '');
        }
    });

    return response;
}

// Write data to JSON file
writeFileSync('.tmp/data.json', JSON.stringify(getTemplateData()));
