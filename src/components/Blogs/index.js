import React, { Component } from 'react';
import style from "./Blogs.module.scss";

const Blogs = props => {
    return (
        <section id="blogs" className={style.blogsSection}>
            <div className={style.blogContainer}>
                <h1 className="title">
                    Blogs
                </h1>
                <div className={style.blogList}>
                    <a href="https://medium.com/@nehachauhan_88200/javascript-multiple-ways-to-create-objects-a47a4f0f19f1" className={style.blogCard}>
                        <div className={style.imageContainer}>
                            <img src="https://miro.medium.com/max/1620/0*qGEL3KyjxoQcQoB4" />
                        </div>
                        <div className={style.blogName}>Javascript — Multiple ways to create Objects</div>
                        <div className={style.blogTime}>21st Aug 2020</div>
                        <div className={style.bar}></div>
                        <div className={style.blogInfo}>Objects in javascript can be compared to objects in real life. Look around right now and you’ll find lots of examples of an object like Pet, Laptop, Chair, Table and more…</div>
                    </a>
                </div>
            </div>
        </section>

    )
};

export default Blogs;
