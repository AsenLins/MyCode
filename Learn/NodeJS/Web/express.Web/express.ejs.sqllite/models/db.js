const sqlLite=require("sqlite3").verbose();

const dbName="article";

const db=new sqlLite.Database(dbName);

db.serialize(()=>{
    //const dropsql="drop table article";
    const sql=`create table  IF NOT EXISTS  article
    (
        Id integer PRIMARY KEY autoincrement,
        articleTitle TEXT,
        article TEXT)`
    //db.run(dropsql);
    db.run(sql)
});

class Article{
    static getAll(cb){
        db.all("select * from article",cb);        
    }

    static getOne(id,cb){
        db.get("select * from article where id=?",id,cb);
    }

    static create(article,cb){
        db.run("insert into article(articleTitle,article) values(?,?)",article.articleTitle,article.article,cb);
    }

    static delete(id,cb){
        db.run("delete from article where id=?",id,cb);
    }

}


module.exports={
    db:db,
    Article:Article
}

