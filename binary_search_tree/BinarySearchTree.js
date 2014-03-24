var BinarySearchTree = function (key) {
  'use strict';
  this._root = undefined;
  this._key = key;
};

BinarySearchTree.prototype = {
  /* 
   * Public methods
   */

  /**
   * Inserts a new node into the tree
   * @this {BinarySearchTree}
   * @param {object} node The node to be inserted into the tree
   */
  insert: function (node) {
    if (this._is_empty()) {
      this._root = node;
      return true;
    }

    var y;
    var x = this._root;

    while ( x !== undefined ) {
      y = x;
      if ( node[this._key] < y[this._key] ) {
        x = x.left;
      }
      else {
        x = x.right;
      }
    }

    node.parent = y;
    
    if ( node[this._key] < y[this._key]) {
      y.left = node;
    }
    else {
      y.right = node;
    }
  },

  delete: function (key) {

  },

  search: function (key) {

  },

  inorder_walk: function() {

  },

  preorder_walk: function() {

  },

  postorder_walk: function() {

  },

  /**
   * Find the minimum of the tree rooted at the given node
   * @this {BinarySearchTree}
   * @param {Object} root The root of the tree to find the min of
   */
  minimum: function(root) {
    if ( !root ) {
      root = this._root;
    }

    while ( root.left ) {
      root = root.left;
    }

    return root;
  },

  /**
   * Find the maximum of the tree rooted at the given node
   * @this {BinarySearchTree}
   * @param {Object} root The root of the tree to find the max of
   */
  maximum: function(root) {
    if ( !root ) {
      root = this._root;
    }

    while ( root.right ) {
      root = root.right;
    }

    return root;
  },

 /*
  * Private methods
  */

  _transplant: function (tree, u, v) {

  },

  _predecessor: function (x) {

  },

  _successor: function (x) {

  },

  _is_empty: function () {
    return this._root ? false : true;
  }

};