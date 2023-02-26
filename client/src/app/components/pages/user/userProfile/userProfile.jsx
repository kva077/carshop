import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Container from "../../../common/container";
import { getUserById } from "../../../../store/users";
import { useSelector } from "react-redux";
const UserProfile = ({ userId }) => {
    const user = useSelector(getUserById(userId));
    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <section className="user">
            <Container>
                <h2 className="head-title">Профиль</h2>
                <div className="user-card">
                    <div className="user-card__left">
                        <div className="user-card__image">
                            <img
                                className="user-card__image"
                                src={user.image}
                                alt="shot"
                            />
                        </div>
                        <div className="user-card__edit-button">
                            <button
                                className="edit-button"
                                onClick={handleClick}
                            >
                                Редактировать профиль
                            </button>
                        </div>
                    </div>
                    <div className="user-card__right">
                        <div className="user-card__name">
                            <h4>{user.name}</h4>
                        </div>
                        <div className="user-card__role">{user.role}</div>
                        {user.role === "admin" ? (
                            <>
                                <Link to="/add">
                                    <button className="edit-button">
                                        Добавление товара
                                    </button>
                                </Link>
                                <Link to="/editparts">
                                    <button className="edit-button">
                                        Редактирование списка товаров
                                    </button>
                                </Link>
                            </>
                        ) : null}
                    </div>
                </div>
            </Container>
        </section>
    );
};
UserProfile.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserProfile;
