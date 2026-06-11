
const req = "/products?category=books&category=furniture&page=2&sort=price";

const parsed = new URL(req, "http://www.microsoft.com");
const params = parsed.searchParams;

console.log("href: ", parsed.href);
console.log("pathname: ", parsed.pathname);
console.log("search: ", parsed.search);

console.log("query: ", parsed.searchParams);
console.log("category: ", params.get("category"));
console.log("page: ", params.get("page"));
console.log("sort: ", params.get("sort"));
console.log("all category: ", params.getAll("category"));
