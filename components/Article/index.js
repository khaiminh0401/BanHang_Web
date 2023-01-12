import style from'./index.module.scss';
const Article = ({children})=> {
    return (  
        <div className={style.article}>{children}</div>
    );
}

export default Article;