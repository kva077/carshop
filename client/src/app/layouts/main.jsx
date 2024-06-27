import React from "react";
import Container from "../components/common/container";

const Main = () => {
    const features = [
        {
            id: 1,
            name: "Детейлинг-центр премиум класса",
            description:
                "Учитываем индивидуальные особенности автомобилей. Наши мастера знают свое дело."
            // icon: SparklesIcon
        },
        {
            id: 2,
            name: "Ателье по пошиву салонов",
            description:
                "В процессе перетяжки салонов автомобилей мы используем высококачественную автомобильную кожу, которая прослужит вам долгие годы и десятки тысяч километров пробега."
            // icon: ScissorsIcon
        },
        {
            id: 3,
            name: "Тюнинг-центр",
            description:
                "Производим технические доработки агрегата автомобиля любой сложности: от системы охлаждения вплоть до усиления мотора и трансмиссии"
            // icon: RocketLaunchIcon
        },
        {
            id: 4,
            name: "Шумоизоляция автомобилей",
            description:
                "Шумоизолируем автомобили только по топовому варианту (как полностью салона, так и частично)"
            // icon: SpeakerXMarkIcon
        }
    ];
    return (
        <main className="main">
            <section className="top">
                <Container>
                    <h1 className="title">Carshop Performance</h1>
                    <p className="subtitle">
                        Мы предлагаем полный спектр услуг по тюнингу Вашего
                        автомобиля
                    </p>
                    <div className="top__spec">
                        {features.map((feature) => (
                            <div key={feature.id} className="top__spec-box">
                                <div className="">
                                    {/* <feature.icon
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    /> */}
                                </div>
                                <div>
                                    <p className="top__spec-name">
                                        {feature.name}
                                    </p>
                                    <p className="top__spec-des">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <section className="contacts">
                <Container>
                    <div className="contacts__inner">
                        <form className="contacts__form">
                            <h2 className="contacts__title">ОСТАВЬТЕ ЗАЯВКУ</h2>
                            <input
                                type="text"
                                className="contacts__input"
                                placeholder="Ваше имя"
                            />
                            <input
                                type="tel"
                                className="contacts__input"
                                placeholder="Номер телефона"
                            />
                            <p>
                                В ближайшее время наш менеджер свяжется с вами
                            </p>
                            <button>ОТПРАВИТЬ</button>
                        </form>
                        <div className="contacts__img"></div>
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default Main;
