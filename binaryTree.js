
//Aqui declaramos la funcion que deifne cada nodo de nuestro arbol que tienen un ramificacion tanto a la i0zquierda como a la derecha, y un valor
class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

//esta clase define la estructura y funcionalidad de nuestros arboles
class BinarySearchTree{
    //aqui le decimos que debe llevar un arbol que es una raiz
    constructor(){
        this.root = null;
    }
    // esta es la funcion para meter valores al arbol 
    insert(value){
        // apartamos el espacio de nuestro nuevo nodo
        const newNode = new Node(value);
        //aqui decimos que si la raiz es nula significa que es el primer nodo, por lo tanto es el primero y se asigna como la raiz
        if(this.root === null){
            this.root = newNode;
        }else{
            // la ejecucion si si hay algo en la raiz
            let currentNode = this.root;
            while(true){
                // aqui va iterarndo viendo si es mayor o menor hasta que encuentra el final de y lo asigna
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
// aqui se imprime los valores de profundidad
    DFS_pre(root){

        if(root){
            console.log("Nos encontramos en el nodo con valor: " + root.value);
            this.DFS_pre(root.left)
            this.DFS_pre(root.right)
        }
    }
// aqui de izquierda a derecha bajando la jerarquia
    BFS(){
        const cola = []
        cola.push(this.root)
        while(cola.length){
            let current = cola.shift()
            console.log("Valor actual: " + current.value)
            if(current.left){
                cola.push(current.left)
            }
            if(current.right){
                cola.push(current.right)
            }
        }
    }
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);

tree.DFS_pre(tree.root);
tree.BFS(tree.root);