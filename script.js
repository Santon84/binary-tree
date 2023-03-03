

/**
 * node constuctor
 * 
 */
class Node {
    constructor(value) {
        this.value = value,
        this.leftNode = null, 
        this.rightNode = null 
    }
} 


class BinaryTree {

    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        let newNode = new Node(value);

        function searchNode(node) {
            if (value < node.value) {
                if (!node.leftNode) {
                    node.leftNode = newNode;
                } else {
                    searchNode(node.leftNode)
                }
            }
            else if (value > node.value) {
                if (!node.rightNode) {
                    node.rightNode = newNode;
                } else {
                    searchNode(node.rightNode)
                }
            }
        }
        searchNode(this.root);
    }

    find() {

    }
}


const tree = new BinaryTree(20);

tree.insert(30);
tree.insert(10);
tree.insert(11);
tree.insert(7);
tree.insert(4);
tree.insert(13);
tree.insert(15);
tree.insert(8);

console.log(tree);
let result = '';

function buildTree( node ) {
    
    function buildLeft(node) {
        return Array(node).map(item => {
        
            return `<ul><li><div><span>${item.value+"L"}</span></div>${item.leftNode ? buildLeft(item.leftNode) : ''}${item.rightNode ? buildRight(item.rightNode) : ''}</li></ul>`
        
        });
    }
    function buildRight(node) {
        return Array(node).map(item => {
        
            return `<ul><li><div><span>${item.value+"R"}</span></div>${item.leftNode ? buildLeft(item.leftNode) : ''}${item.rightNode ? buildRight(item.rightNode) : ''}</li></ul>`
        
        });
    }

    return Array(node).map(item => {
        
        return `<ul><li><div><span>${item.value}</span></div>${item.leftNode ? buildLeft(item.leftNode) : ''}${item.rightNode ? buildRight(item.rightNode) : ''}</li></ul>`
    
    });
}
console.log(buildTree(tree.root));


const treeConteriner = document.querySelector('.node-tree');

treeConteriner.innerHTML = buildTree(tree.root);

document.addEventListener('keypress', (e) => {

    if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()
        console.log('Space pressed')
        function generateRandomNumber(min, max) {
            let difference = max - min;
            let randomNumber = Math.random();
            randomNumber = Math.floor( randomNumber * difference);
            randomNumber = randomNumber + min;
            return randomNumber;
        }
        //console.log(generateRandomNumber(-100, 100));
        tree.insert(generateRandomNumber(-100, 100));
        treeConteriner.innerHTML = buildTree(tree.root);
    }
    
    
    
})