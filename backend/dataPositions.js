const dataPositions = [
    {
        piece: 'a8',
        position: [44, 6, 44],
        in: 'a8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'r',
        move: false,
        available: []
    }, 
    {
        piece: 'b8',
        position: [31.5, 6, 44],
        in: 'b8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'h',
        available: []
    }, 
    {
        piece: 'c8', 
        position: [19, 6, 44],
        in: 'c8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'b',
        available: []
    },
    {
        piece: 'd8',
        position: [6.5, 6, 44],
        in: 'd8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'q',
        available: []
    }, 
    {
        piece: 'e8',
        position: [-6, 6, 44],
        in: 'e8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'k',
        move: false,
        available: []
    }, 
    {
        piece: 'f8',
        position: [-18.5, 6, 44],
        in: 'f8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'b',
        available: []
    }, 
    {
        piece: 'g8',
        position: [-31, 6, 44],
        in: 'g8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'h',
        available: []
    }, 
    {
        piece: 'h8',
        position: [-43.5, 6, 44],
        in: 'h8',
        dead: false,
        color: 'black',
        inDanger: false,
        name: 'r',
        move: false,
        available: []
    }, 
    {
        piece: 'a7',
        position: [44, 6, 31.5],
        in: 'a7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'b7',
        position: [31.5, 6, 31.5],
        in: 'b7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'c7',
        position: [19, 6, 31.5],
        in: 'c7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'd7',
        position: [6.5, 6, 31.5],
        in: 'd7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'e7',
        position: [-6, 6, 31.5],
        in: 'e7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'f7',
        position: [-18.5, 6, 31.5],
        in: 'f7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'g7',
        position: [-31, 6, 31.5],
        in: 'g7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'h7',
        position: [-43.5, 6, 31.5],
        in: 'h7',
        dead: false,
        prom: false,
        color: 'black',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'a1',
        position: [44, 6, -44],
        in: 'a1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'r',
        move: false,
        available: []
    }, 
    {
        piece: 'b1',
        position: [31.5, 6, -44],
        in: 'b1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'h',
        available: []
    }, 
    {
        piece: 'c1', 
        position: [19, 6, -44],
        in: 'c1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'b',
        available: []
    },
    {
        piece: 'd1',
        position: [6.5, 6, -44],
        in: 'd1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'q',
        available: []
    }, 
    {
        piece: 'e1',
        position: [-6, 6, -44],
        in: 'e1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'k',
        move: false,
        available: []
    }, 
    {
        piece: 'f1',
        position: [-18.5, 6, -44],
        in: 'f1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'b',
        available: []
    }, 
    {
        piece: 'g1',
        position: [-31, 6, -44],
        in: 'g1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'h',
        available: []
    }, 
    {
        piece: 'h1',
        position: [-43.5, 6, -44],
        in: 'h1',
        dead: false,
        color: 'white',
        inDanger: false,
        name: 'r',
        move: false,
        available: []
    }, 
    {
        piece: 'a2',
        position: [44, 6, -31.5],
        in: 'a2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'b2',
        position: [31.5, 6, -31.5],
        in: 'b2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'c2',
        position: [19, 6, -31.5],
        in: 'c2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'd2',
        position: [6.5, 6, -31.5],
        in: 'd2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'e2',
        position: [-6, 6, -31.5],
        in: 'e2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'f2',
        position: [-18.5, 6, -31.5],
        in: 'f2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'g2',
        position: [-31, 6, -31.5],
        in: 'g2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
    {
        piece: 'h2',
        position: [-43.5, 6, -31.5],
        in: 'h2',
        dead: false,
        prom: false,
        color: 'white',
        inDanger: false,
        name: 'p',
        available: []
    },
];
module.exports = {
    dataPositions
  };