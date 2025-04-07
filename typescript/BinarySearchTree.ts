interface TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
type TraversalOption = "inorder" | "preorder" | "postorder";
type TraversalCallBackFn<T> = (val: T) => boolean; // true => continue, false => stop

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null;

  constructor(root?: TreeNode<T> | null) {
    this.root = root || null;
  }

  private traversePreorderRecursively(
    currentNode: TreeNode<T> | null,
    callBackFn: TraversalCallBackFn<T>,
  ): boolean {
    if (!currentNode) {
      return true;
    }

    return (
      callBackFn(currentNode.val) &&
      this.traversePreorderRecursively(currentNode.left, callBackFn) &&
      this.traversePreorderRecursively(currentNode.right, callBackFn)
    );
  }

  private traverseInorderRecursively(
    currentNode: TreeNode<T> | null,
    callBackFn: TraversalCallBackFn<T>,
  ): boolean {
    if (!currentNode) {
      return true;
    }

    return (
      this.traverseInorderRecursively(currentNode.left, callBackFn) &&
      callBackFn(currentNode.val) &&
      this.traverseInorderRecursively(currentNode.right, callBackFn)
    );
  }

  private traversePostorderRecursively(
    currentNode: TreeNode<T> | null,
    callBackFn: TraversalCallBackFn<T>,
  ): boolean {
    if (!currentNode) {
      return true;
    }

    return (
      this.traversePostorderRecursively(currentNode.left, callBackFn) &&
      this.traversePostorderRecursively(currentNode.right, callBackFn) &&
      callBackFn(currentNode.val)
    );
  }

  traverseRecursively(
    callBackFn: TraversalCallBackFn<T>,
    option: TraversalOption = "inorder",
  ) {
    switch (option) {
      case "preorder":
        this.traversePreorderRecursively(this.root, callBackFn);
        break;
      case "postorder":
        this.traversePostorderRecursively(this.root, callBackFn);
        break;
      case "inorder":
      default:
        this.traverseInorderRecursively(this.root, callBackFn);
    }
  }
}
