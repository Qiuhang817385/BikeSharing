import React, { Component } from 'react'
import { Card, Carousel } from 'antd';
import './style.scss'
export default class Carousels extends Component {
    render() {
        return (
            <div>
                <Card title='文字背景轮播' >
                    <Carousel autoplay effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card>
                <Card title='图片背景轮播' className="slider-wrap" >
                    <Carousel autoplay effect="fade" >
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="1" />
                        </div>
                        <div>   <img src="/carousel-img/carousel-2.jpg" alt="2" /></div>
                        <div>   <img src="/carousel-img/carousel-3.jpg" alt="3" /></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
