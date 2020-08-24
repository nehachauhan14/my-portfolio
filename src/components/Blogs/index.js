import React, { Component } from 'react';
import "./Blogs.scss";

const Blogs = props => {
    return (
        <section id="blogs" className="blogsSection">
            <div className="blogContainer">
                <h1 className="title">
                    Blogs
                </h1>
                <div className="blogList">
                    <a href="https://medium.com/@nehachauhan_88200/javascript-multiple-ways-to-create-objects-a47a4f0f19f1" className="blogCard">
                        <div className="imageContainer">
                            <img src="https://miro.medium.com/max/1620/0*qGEL3KyjxoQcQoB4" />
                        </div>
                        <div className="blogName">Javascript — Multiple ways to create Objects</div>
                        <div className="blogTime">21st Aug 2020</div>
                        <div className="bar"></div>
                        <div className="blogInfo">Objects in javascript can be compared to objects in real life. Look around right now and you’ll find lots of examples of an object like Pet, Laptop, Chair, Table and more…</div>
                    </a>
                </div>
            </div>
        </section>

    )
};

export default Blogs;
