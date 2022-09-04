function paperRequireMents(book1,book2, book3){
        let book1TotalPage = book1 * 100
       
        let book2TotalPage = book2 * 200

        let book3TotalPage = book3 * 300

        let totalPage = book1TotalPage + book2TotalPage + book3TotalPage;
        return totalPage;
        
}

console.log(paperRequireMents(1,2,1));