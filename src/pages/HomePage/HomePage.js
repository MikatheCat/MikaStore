import Footer from "../../components/Footer";
import s from './HomePage.module.css';
import Header from "../../components/Header";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={s.root}>
                <div className={s.search_bar}>
                    <input type="search" className={s.search} placeholder="Введите название товара"/>
                    <button className={s.search_button}>Поиск</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;