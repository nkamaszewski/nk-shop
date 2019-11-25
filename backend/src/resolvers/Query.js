// const Query = {
//     dogs : function() {

//     }
// };
//  the same as above
const Query = {
  dogs(parent, args, ctx, info) {
    return global.dogs || [];
  }
};

module.exports = Query;
