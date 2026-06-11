import url from "url";

const req = "http://www.microsoft.com/products?category=books&page=2&sort=price";
const parsed = url.parse(req, true);
console.log("href: ", parsed.href);
console.log("pathname: ", parsed.pathname);
console.log("search: ", parsed.search);
console.log("query: ", parsed.query);
console.log("category: ", parsed.query.category);
console.log("page: ", parsed.query.page);
console.log("sort: ", parsed.query.sort);
