const themes = {
    default: {
        board: {
            backgroundColor: 'transparent',
            background: 'none',
            border: 'none',
            overflow: 'unset',
            borderRadius: '0px'
        },
        cell: {
            boxShadow: 'none',
            background: 'none',
            border: '1px solid black',
            animation: 'none',
            filter: 'opacity(100%)',
            backgroundColor: 'transparent'
        }
    },
    dark: {
        board: {
            backgroundColor: '#479aa1',
            background: 'none'
        },
        cell: {
            boxShadow: 'inset 0 0 15px 10px #000',
            background: 'none',
            animation: 'none',
            filter: 'opacity(100%)',
            borderRadius: '0px',
            backgroundColor: 'silver'
        },
        x: {
            backgroundColor: 'red'
        }
    },
    evilSpirits: {
        board: {
            backgroundColor: '#000',
            background: '#000'
        },
        cell: {
            animation: 'spirit 3s linear 0s infinite',
            borderRadius: '0px',
            filter: 'opacity(100%)',
            boxShadow: '0px 0px 2px rgb(0, 0, 0), 1px -1px 12px rgb(21, 55, 58), 1px 1px 12px rgb(55, 87, 0)',
            background: 'radial-gradient(black,rgb(53, 53, 53))'
        }
    },
    minimal: {
        board: {
            backgroundColor: 'white',
            background: 'none'
        },
        cell: {
            boxShadow: '0 0 0px 2px rgb(13, 14, 14)',
            background: 'none',
            animation: 'none',
            filter: 'opacity(100%)',
            backgroundColor: 'white'
        }
    },
    lunarEclipse: {
        board: {
            background: 'none',
            overflow: 'unset'
        },
        cell: {
            boxShadow: '0 0 40px 5px #3B1E47',
            background: 'transparent',
            border: 'none',
            borderRadius: '50px',
            animation: 'none',
            backgroundColor: '#0C0C0C',
            filter: 'opacity(100%)'
        }
    }
};

// Single function to apply any theme
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');

    // Apply board styles
    Object.assign(board.style, theme.board);

    // Apply cell styles
    cells.forEach(cell => {
        Object.assign(cell.style, theme.cell);

        // Apply X styles if they exist in theme
        if (theme.x) {
            const xElements = cell.querySelectorAll('.x');
            xElements.forEach(x => Object.assign(x.style, theme.x));
        }
    });
}

// Theme application functions
function defaultTheme() { applyTheme('default'); }
function outlined() { applyTheme('minimal'); }
function lunarEclipse() { applyTheme('lunarEclipse'); }

