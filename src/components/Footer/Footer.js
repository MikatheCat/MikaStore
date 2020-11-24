import s from './Footer.module.css'
const Footer = () => {
    return (
        <div className={s.footerWrap}>
            <div className={s.footerContent}>
                Made by <a href= "https://github.com/MikatheCat"> Mika_the_Cat </a>
            </div>
        </div>
    )
}

export default Footer;