module.exports = async function(context, { query: { principal, rate, term } }) {
    principal = parseFloat(principal);
    rate = parseFloat(rate);
    term = parseFloat(term);
  
    if ([principal, rate, term].some(isNaN)) {
      return context.res = {
        status: 400,
        body: "You need provide princila, rate and term parameter"
      };
    } 
    
    context.res = { body: principal * rate * term };
  };