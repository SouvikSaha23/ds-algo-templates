interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// Encodes a tree to a single string
export function serializeBinaryTree(root: TreeNode | null): string {
  if(!root){
    return "*";
  }

  const serializedLeft = serializeBinaryTree(root.left);
  const serializedRight = serializeBinaryTree(root.right);

  // Pre-order traversal capturing leaf nodes as well
  return `${root.val},${serializedLeft},${serializedRight}`;
}

// Decodes your encoded data to tree
export function deserializeBinaryTree(data: string): TreeNode | null {

  function* elementGenerator(): Generator<string> {
    const length = data.length;
    let index = 0;
    let element = "";
    while(index <= length){
      if(index === length || data[index]===","){
        yield element;
        element = "";
      } else {
        element += data[index];
      }
      index++;
    }
  }

  const generator = elementGenerator();

  const decode = (): TreeNode | null  => {
    const element = generator.next().value;

    if(!element || element === "*"){
      return null;
    }

    return {
      val: +element, // Convert string to number
      left: decode(),
      right: decode()
    };
  }

  return decode();
}
