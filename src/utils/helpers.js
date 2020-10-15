export const dataMock = [
    ["1", "John", ""],
    ["2", "Warwick", "1"],
    ["3", "Jessica", "1"],
    ["4", "Thor", "8"],
    ["5", "Bobby", "6"],
    ["6", "Hank", "15"],
    ["7", "Maria", "15"],
    ["8", "Bruce", ""],
    ["9", "Alfred", "8"],
    ["10", "Gene", ""],
    ["11","India","12"],
    ["12","Karen",""],
    ["13","Sandy","12"],
    ["14","Max","11"],
    ["15","Lex","8"],
    ["16","George","12"],
    ["17","JarJar","16"],
    ["18","Roger","2"],
    ["19","Archer","4"],
    ["20","Bianca","1"],
];

export const buildTree = (parentId, list) => {
    // create a new object to store the result
    var result = {};
  
    // for each item in the list
    for (var i = 0; i < list.length; i++){
      // find all children of parent
      if (list[i].parent === parentId) {
        // recursively find children for each children of parentId
        var ch = buildTree(list[i].id, list);
  
        // if it has no children, skip adding the children prop
        var item = Object.keys(ch).length === 0 ? {} : { children: ch };
        result[list[i].id] = Object.assign(item, list[i]);
      }
    }
  
    return result;
  }